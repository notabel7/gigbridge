// js/data.js — loaded with <script src="js/data.js"></script> BEFORE page scripts
// Contract documented in README.md. Do not change fields without telling Abel.

const SEED_FREELANCERS = [
  {
    id: "f-001",
    name: "Hana Tesfaye",
    category: "Video Editing", // Video Editing | Graphic Design | Photography | Videography
    specialties: ["Wedding films", "Social media reels"],
    city: "Addis Ababa",
    languages: ["Amharic", "English"],
    priceFrom: 3000, // ETB per project
    priceTo: 12000,
    bio: "Editor with 4 years of experience in wedding and event films.",
    portfolio: [{ title: "Wedding highlight", image: "assets/hana-1.jpg" }],
    availableDays: ["Mon", "Tue", "Thu", "Sat"],
    isAvailable: true,
    rating: 4.8,
    avatar: "assets/hana.jpg"
  }
  // ...10-12 total, mixed categories, cities, and prices
];

const SEED_REQUESTS = [
  {
    id: "r-001",
    freelancerId: "f-001",
    clientName: "Selam Events",
    clientContact: "0911000000",
    projectType: "Wedding film",
    budget: 8000, // ETB
    date: "2026-11-20", // event/deadline date
    details: "Two-day wedding, need a 5-minute highlight.",
    status: "pending", // pending | accepted | declined
    createdAt: "2026-11-06T09:00:00Z"
  }
];
