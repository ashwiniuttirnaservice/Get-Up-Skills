import { courses as staticCourses } from "@/data/courses";

// The LMS API only returns title/description/features/batches — no image,
// price, rating, skills etc. To keep the course-card AND course-detail-page
// UI exactly as designed, we borrow those display fields from the static
// catalog and only override the real, live parts: id, title, longDesc and
// the link target. Same course id always picks the same template (hashed),
// so the card on the homepage and the page it links to look consistent.
function templateFor(id) {
  const hash = String(id)
    .split("")
    .reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
  return staticCourses[hash % staticCourses.length];
}

function formatDate(d) {
  if (!d) return "";
  return new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

export function toCardCourse(course) {
  const base = templateFor(course._id);
  const title = course.title?.trim() || base.title;
  const batch = course.batches?.[0];

  return {
    ...base,
    id: course._id,
    href: `/courses/live/${course._id}`,
    title,
    longDesc: course.description || base.longDesc,
    // Real batch data from the LMS, shown right on the card.
    mode: batch?.mode || base.mode,
    badge: batch?.status || base.badge,
    batchDates:
      batch?.startDate || batch?.endDate
        ? `${formatDate(batch.startDate)} – ${formatDate(batch.endDate)}`
        : null,
    // Real curriculum data from the LMS — used by CourseCurriculum instead
    // of the synthetic module list when the backend actually has it.
    learningOutcomes: course.learningOutcomes?.length ? course.learningOutcomes : null,
    keyFeatures: course.keyFeatures?.length ? course.keyFeatures : null,
    lecturesCount: batch?.lecturesCount || null,
    assignmentsCount: batch?.assignmentsCount || null,
    testsCount: batch?.testsCount || null,
  };
}
