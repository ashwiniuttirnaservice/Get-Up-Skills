// Placeholder/demo content for the Resources dropdown pages (Blog, YouTube,
// Interview Prep, Career Roadmaps). All original, not sourced from anywhere.

export const blogPosts = [
  {
    id: 1,
    title: "5 Portfolio Projects That Actually Get You Hired",
    excerpt:
      "Recruiters skim resumes in seconds — these are the kinds of projects that make them stop scrolling.",
    category: "Career",
    readTime: "6 min read",
    date: "12 Aug 2026",
  },
  {
    id: 2,
    title: "SQL vs NoSQL: Choosing the Right Database for Your Next Project",
    excerpt:
      "A practical breakdown of when to reach for a relational database and when a document store makes more sense.",
    category: "Data",
    readTime: "8 min read",
    date: "5 Aug 2026",
  },
  {
    id: 3,
    title: "How to Prepare for a Technical Interview in 30 Days",
    excerpt:
      "A week-by-week study plan covering DSA, system design basics, and mock-interview practice.",
    category: "Interview Prep",
    readTime: "10 min read",
    date: "29 Jul 2026",
  },
  {
    id: 4,
    title: "React Hooks Explained: A Practical Guide for Beginners",
    excerpt:
      "useState and useEffect demystified with real, runnable examples instead of toy snippets.",
    category: "Development",
    readTime: "7 min read",
    date: "20 Jul 2026",
  },
  {
    id: 5,
    title: "The Complete Guide to Landing Your First Data Analyst Role",
    excerpt:
      "From building a case-study portfolio to acing the SQL screen — everything first-timers ask us about.",
    category: "Career",
    readTime: "9 min read",
    date: "14 Jul 2026",
  },
  {
    id: 6,
    title: "Why Soft Skills Matter as Much as Coding Skills",
    excerpt:
      "Communication, ownership and collaboration show up in performance reviews more than any framework does.",
    category: "Career",
    readTime: "5 min read",
    date: "2 Jul 2026",
  },
];

export const videos = [
  {
    id: 1,
    title: "Full Stack Roadmap 2026 — Where to Start",
    duration: "18:24",
    views: "42K views",
    category: "Roadmap",
    thumbnail: "/videos/roadmap.svg",
  },
  {
    id: 2,
    title: "Build a REST API with Node.js in 20 Minutes",
    duration: "21:03",
    views: "31K views",
    category: "Backend",
    thumbnail: "/videos/backend.svg",
  },
  {
    id: 3,
    title: "Python for Data Science — Crash Course",
    duration: "34:47",
    views: "58K views",
    category: "Data",
    thumbnail: "/videos/data.svg",
  },
  {
    id: 4,
    title: "Mock Interview: Frontend Developer Round 1",
    duration: "26:15",
    views: "19K views",
    category: "Interview",
    thumbnail: "/videos/interview.svg",
  },
  {
    id: 5,
    title: "Git & GitHub for Absolute Beginners",
    duration: "15:52",
    views: "67K views",
    category: "Tools",
    thumbnail: "/videos/tools.svg",
  },
  {
    id: 6,
    title: "Resume Review: What Recruiters Actually Look For",
    duration: "22:38",
    thumbnail: "/videos/career.svg",
    views: "24K views",
    category: "Career",
  },
];

export const interviewCategories = [
  {
    id: "technical",
    label: "Technical",
    questions: [
      {
        q: "What is the difference between let, const and var in JavaScript?",
        a: "var is function-scoped and hoisted; let and const are block-scoped. const additionally prevents reassignment of the variable binding.",
      },
      {
        q: "Explain the difference between a REST API and GraphQL.",
        a: "REST exposes fixed endpoints per resource, while GraphQL exposes a single endpoint where the client specifies exactly which fields it needs.",
      },
      {
        q: "What's the difference between a primary key and a foreign key?",
        a: "A primary key uniquely identifies a row in its own table; a foreign key references a primary key in another table to enforce a relationship.",
      },
    ],
  },
  {
    id: "behavioral",
    label: "Behavioral",
    questions: [
      {
        q: "Tell me about a time you disagreed with a teammate.",
        a: "Focus on how you communicated your reasoning, listened to theirs, and reached a decision — not on who was 'right'.",
      },
      {
        q: "How do you handle tight deadlines?",
        a: "Interviewers want to see prioritization and communication — what you'd cut, defer, or flag early, not just 'work harder'.",
      },
    ],
  },
  {
    id: "system-design",
    label: "System Design",
    questions: [
      {
        q: "How would you design a URL shortener?",
        a: "Cover the core write path (hash/generate a short code, store the mapping), the read path (redirect lookup), and how you'd scale reads with caching.",
      },
    ],
  },
];

export const roadmaps = [
  {
    id: "frontend",
    track: "Frontend Developer",
    color: "#53B8EC",
    steps: [
      { title: "HTML, CSS & Responsive Design", duration: "3 weeks" },
      { title: "JavaScript Fundamentals & DOM", duration: "4 weeks" },
      { title: "React & Component-Based UI", duration: "5 weeks" },
      { title: "State Management & APIs", duration: "3 weeks" },
      { title: "Portfolio Projects & Deployment", duration: "3 weeks" },
    ],
  },
  {
    id: "data-analyst",
    track: "Data Analyst",
    color: "#485DAC",
    steps: [
      { title: "Excel & Spreadsheet Analysis", duration: "2 weeks" },
      { title: "SQL for Data Querying", duration: "4 weeks" },
      { title: "Python, Pandas & Visualization", duration: "5 weeks" },
      { title: "Statistics for Analysts", duration: "3 weeks" },
      { title: "Case-Study Portfolio", duration: "3 weeks" },
    ],
  },
  {
    id: "fullstack",
    track: "Full Stack Developer",
    color: "#E9577C",
    steps: [
      { title: "Frontend Foundations (HTML/CSS/JS)", duration: "4 weeks" },
      { title: "React for Production UIs", duration: "4 weeks" },
      { title: "Node.js, Express & REST APIs", duration: "4 weeks" },
      { title: "Databases (SQL & MongoDB)", duration: "3 weeks" },
      { title: "Auth, Deployment & Capstone", duration: "4 weeks" },
    ],
  },
];
