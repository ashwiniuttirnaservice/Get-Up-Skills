export const heroStats = [
  { value: "1.5M+", label: "YouTube Subscribers" },
  { value: "725K+", label: "Learners" },
  { value: "83K+", label: "Paid Learners" },
  { value: "7,000+", label: "5-Star Reviews" },
  { value: "419+", label: "Recent Placements" },
];

export const features = [
  {
    icon: "GraduationCap",
    title: "Expert Instructors",
    desc: "Learn from industry professionals who bring real project experience into every lesson.",
    accent: "#53B8EC",
  },
  {
    icon: "Clock",
    title: "Flexible Learning",
    desc: "Access course content anytime, from any device, and learn entirely at your own pace.",
    accent: "#E9577C",
  },
  {
    icon: "Briefcase",
    title: "Career Focused",
    desc: "Get certified, build a portfolio, and walk away with skills employers are hiring for.",
    accent: "#C7DA40",
  },
  {
    icon: "Users",
    title: "Community Support",
    desc: "Join a community of learners and mentors for doubt-solving, code reviews and networking.",
    accent: "#485DAC",
  },
];

export const stats = [
  { value: "8,000+", label: "Happy Students" },
  { value: "40+", label: "Expert-Led Courses" },
  { value: "25+", label: "Industry Mentors" },
  { value: "95%", label: "Completion Rate" },
];


export const instructors = [
  {
    id: 1,
    name: "Dhaval Patel",
    title: "Full Stack & Data Engineering Mentor",
    bio: "12+ years building products across startups and enterprises. Ex-engineering lead who loves breaking complex systems into simple, teachable pieces.",
    tag: "12+ Years Experience",
    photo: "/instructors/avatar-1.svg",
  },
  {
    id: 2,
    name: "Hemanand Vadivel",
    title: "Data Analytics Lead",
    bio: "8+ years in data analytics across Europe and India, Microsoft certified. Focused on real-world case studies over theory.",
    tag: "8+ Years, Microsoft Certified",
    photo: "/instructors/avatar-2.svg",
  },
  {
    id: 3,
    name: "Ananya Iyer",
    title: "UX Design Mentor",
    bio: "Product designer with experience across fintech and edtech. Teaches design thinking through real client-style briefs.",
    tag: "10+ Years Experience",
    photo: "/instructors/avatar-3.svg",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Frontend Developer",
    feedback:
      "GetUpSkill completely changed my learning curve. The instructors are super helpful and the content stays up-to-date with the industry.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Full Stack Engineer",
    feedback:
      "I landed my first developer job right after finishing the Full Stack course here. The projects made all the difference in interviews.",
  },
  {
    id: 3,
    name: "Sunita Kaur",
    role: "Data Analyst",
    feedback:
      "The flexible schedule let me learn while working full-time. Structured, practical, and genuinely well taught.",
  },
];

export const faqs = [
  {
    id: 1,
    question: "Do I get a certificate after completing a course?",
    answer:
      "Yes — on successful completion of any course you receive a verifiable certificate from GetUpSkill to showcase your new skills.",
  },
  {
    id: 2,
    question: "Can I access courses on my mobile device?",
    answer:
      "Absolutely. The platform is fully responsive so you can learn on the go from your phone, tablet or desktop.",
  },
  {
    id: 3,
    question: "What payment options are available?",
    answer:
      "We accept all major credit/debit cards, UPI and net banking through a secure payment gateway.",
  },
  {
    id: 4,
    question: "Is there a free trial or preview?",
    answer:
      "We don't offer a full trial, but most courses include a free preview of the first few lessons so you can decide if it's right for you.",
  },
];

// Live LMS where students actually log in / sign up.
export const LOGIN_URL = "https://getupskills.com/login";
export const SIGNUP_URL = "https://getupskills.com/register";

// Plain (non-dropdown) links shown between the Resources and Events menus —
// mirrors codebasics.io's "Data Challenges" / "Hire Talent" nav items.
export const nav = [
  { label: "Data Challenges", href: "#courses" },
  { label: "Hire Talent", href: "#" },
];

// Dropdown shown under the "Courses" nav item — mirrors the LMS backend's
// course `type` field (Course.type enum: Beginner/Intermediate/Advanced),
// linking to /courses filtered by that level.
export const courseMenu = [
  {
    label: "Beginner",
    href: "/courses?type=Beginner",
    desc: "No prior experience needed — start from the fundamentals",
  },
  {
    label: "Intermediate",
    href: "/courses?type=Intermediate",
    desc: "For learners with some hands-on experience already",
  },
  {
    label: "Advanced",
    href: "/courses?type=Advanced",
    desc: "In-depth, job-ready bootcamps with mentor support",
  },
];

// Dropdown shown under the "Resources" nav item — mirrors codebasics.io's
// Resources menu.
export const resourceMenu = [
  {
    label: "Blog",
    href: "#",
    desc: "Articles and guides on tech, data & career growth",
  },
  {
    label: "YouTube Channel",
    href: "#",
    desc: "Free tutorials and walkthroughs from our instructors",
  },
  {
    label: "Interview Prep",
    href: "#",
    desc: "Practice questions and mock-interview resources",
  },
  {
    label: "Career Roadmaps",
    href: "#",
    desc: "Step-by-step paths to break into tech roles",
  },
];

// Dropdown shown under the "Events" nav item.
export const eventsMenu = [
  {
    label: "Upcoming Webinars",
    href: "/webinars#upcoming",
    desc: "Live sessions with mentors on trending tech topics",
  },
  {
    label: "Workshops",
    href: "/webinars#workshops",
    desc: "Hands-on weekend workshops on real projects",
  },
  {
    label: "Hackathons",
    href: "/webinars#hackathons",
    desc: "Compete, build and win with fellow learners",
  },
  {
    label: "Webinars",
    href: "/webinars#webinars",
    desc: "Watch expert-led webinars and recorded learning sessions",
  },
];

// Dropdown shown under the "Testimonials" nav item.
export const testimonialsMenu = [
  {
    label: "Student Reviews",
    href: "#testimonials",
    desc: "Ratings and feedback from our learners",
  },
  {
    label: "Video Testimonials",
    href: "#testimonials",
    desc: "Watch learners share their GetUpSkill journey",
  },
];
