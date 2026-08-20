// Live GetUpSkill LMS backend (same backend as https://getupskills.com).
// See: LMS-Project-backend (routes/trainerRouter.js, routes/courseRouter.js)
const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.getupskills.com";

/** Public URL for an uploaded trainer profile photo, or null if none set. */
export function trainerPhotoUrl(filename) {
  if (!filename || filename === "default-avatar.png") return null;
  return `${API_BASE}/uploads/trainer/trainer-profilephoto/${filename}`;
}

/**
 * Shared fetcher — resilient to the backend being slow/offline at build time.
 * Always returns an array (never throws), so pages can safely fall back to
 * static content when the API has nothing (or is unreachable).
 */
async function safeGetList(path) {
  try {
    const res = await fetch(`${API_BASE}/api${path}`, {
      // Revalidate hourly (ISR) in production. In dev, a slow/failed first
      // request would otherwise get cached as an empty result for an hour —
      // always fetch fresh instead so `next dev` reflects the backend live.
      ...(process.env.NODE_ENV === "development"
        ? { cache: "no-store" }
        : { next: { revalidate: 3600 } }),
      // Don't let an unreachable backend (e.g. a LAN-only dev URL) hang the
      // build/render — fail fast and fall back to static content instead.
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return [];
    const json = await res.json();
    return Array.isArray(json?.data) ? json.data : [];
  } catch {
    return [];
  }
}

/** GET /api/trainer/all-profile — public, approved-or-not, active trainers. */
export async function getTrainers() {
  return safeGetList("/trainer/all-profile");
}

/** GET /api/courses/all-course — public, active training programs + batches. */
export async function getCourses() {
  return safeGetList("/courses/all-course");
}

/**
 * Same as getCourses(), but with each course's `type` (Beginner/Intermediate/
 * Advanced) attached — the list endpoint doesn't return it, so we fetch it
 * per-course via getCourseById. Only used when a level filter is active
 * (see /courses?type=...), to avoid the extra calls on every page view.
 */
export async function getCoursesWithType() {
  const courses = await getCourses();
  if (!courses.length) return courses;
  return Promise.all(
    courses.map(async (c) => ({ ...c, type: (await getCourseById(c._id))?.type || null }))
  );
}

/**
 * GET /api/courses/:id — single training program, used on course-click.
 * Returns null (never throws) so the page can 404 gracefully.
 *
 * Note: the raw response also includes each batch's enrolled `students`
 * (name/email/phone) — never pass that through to the client, only the
 * non-personal fields this returns.
 */
export async function getCourseById(id) {
  try {
    const res = await fetch(`${API_BASE}/api/courses/${id}`, {
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return null;
    const json = await res.json();
    const course = json?.data;
    if (!course) return null;

    return {
      _id: course._id,
      title: course.title,
      description: course.description,
      courseCode: course.courseCode,
      type: course.type,
      fees: course.fees,
      rating: course.rating,
      enrolledCount: course.enrolledCount,
      features: course.features,
      learningOutcomes: course.learningOutcomes,
      benefits: course.benefits,
      keyFeatures: course.keyFeatures,
      batches: (course.batches || []).map((b) => ({
        _id: b._id,
        batchName: b.batchName,
        mode: b.mode,
        startDate: b.startDate,
        endDate: b.endDate,
        status: b.status,
        studentCount: b.studentCount,
        offlineFee: b.offlineFee,
        onlineFee: b.onlineFee,
        // Real counts for the curriculum section — not the lecture/assignment
        // content itself, which lives behind auth-only endpoints.
        lecturesCount: b.lectures?.length || 0,
        assignmentsCount: b.assignments?.length || 0,
        testsCount: b.tests?.length || 0,
      })),
    };
  } catch {
    return null;
  }
}
