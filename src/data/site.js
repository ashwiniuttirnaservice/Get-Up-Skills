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

export const successStories = [
  {
    id: 1,
    name: "Sneha Kulkarni",
    from: "Career Break",
    to: "Data Analyst",
    tag: "Career Break",
    quote: "After a 3-year career break, GetUpSkill's structured path got me back into tech with confidence.",
  },
  {
    id: 2,
    name: "Mehul Ligade",
    from: "Fresher",
    to: "AI Engineer",
    tag: "Fresher",
    quote: "Zero coding background to an AI Engineer role in 8 months — the projects made the difference.",
  },
  {
    id: 3,
    name: "Priya Sharma",
    from: "Support Engineer",
    to: "Frontend Developer",
    tag: "IT Background",
    quote: "The Full Stack bootcamp helped me switch from support to a developer role at a product company.",
  },
  {
    id: 4,
    name: "Rahul Verma",
    from: "Mechanical Grad",
    to: "Full Stack Engineer",
    tag: "Non-IT Background",
    quote: "Coming from a non-CS background, the mentors broke everything down step by step.",
  },
  {
    id: 5,
    name: "Sunita Kaur",
    from: "Homemaker",
    to: "Data Analyst",
    tag: "Career Restart",
    quote: "Flexible weekend cohorts let me learn while managing home — now I work remotely as an analyst.",
  },
  {
    id: 6,
    name: "Aditya Rao",
    from: "Fresher",
    to: "Digital Marketer",
    tag: "Fresher",
    quote: "Landed my first marketing role within 2 months of finishing the Digital Marketing course.",
  },
];

export const companies = [
  "TCS",
  "Infosys",
  "Cognizant",
  "Deloitte",
  "EY",
  "Accenture",
  "Wipro",
  "Capgemini",
  "Oracle",
  "Zoho",
  "HCL",
  "Tech Mahindra",
];

export const instructors = [
  {
    id: 1,
    name: "Dhaval Patel",
    title: "Full Stack & Data Engineering Mentor",
    bio: "12+ years building products across startups and enterprises. Ex-engineering lead who loves breaking complex systems into simple, teachable pieces.",
    tag: "12+ Years Experience",
  },
  {
    id: 2,
    name: "Hemanand Vadivel",
    title: "Data Analytics Lead",
    bio: "8+ years in data analytics across Europe and India, Microsoft certified. Focused on real-world case studies over theory.",
    tag: "8+ Years, Microsoft Certified",
  },
  {
    id: 3,
    name: "Ananya Iyer",
    title: "UX Design Mentor",
    bio: "Product designer with experience across fintech and edtech. Teaches design thinking through real client-style briefs.",
    tag: "10+ Years Experience",
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

// Dropdown shown under the "Courses" nav item — mirrors codebasics.io's
// Courses menu (Advanced Courses / Micro Courses / Free Courses).
export const courseMenu = [
  {
    label: "Advanced Courses",
    href: "#courses",
    desc: "Bootcamps with job assistance & mentor support",
  },
  {
    label: "Micro Courses",
    href: "#courses",
    desc: "Short, focused courses on a single in-demand skill",
  },
  {
    label: "Free Courses",
    href: "#courses",
    desc: "Beginner-friendly courses to get started at no cost",
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
    href: "#",
    desc: "Live sessions with mentors on trending tech topics",
  },
  {
    label: "Workshops",
    href: "#",
    desc: "Hands-on weekend workshops on real projects",
  },
  {
    label: "Hackathons",
    href: "#",
    desc: "Compete, build and win with fellow learners",
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
    label: "Success Stories",
    href: "#success-stories",
    desc: "Real career transformations from GetUpSkill alumni",
  },
  {
    label: "Video Testimonials",
    href: "#testimonials",
    desc: "Watch learners share their GetUpSkill journey",
  },
];
