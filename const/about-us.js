// const/about-us.js
// Merge this into your existing const/about-us.js — it replaces/extends
// the old `founders` / `advisors` / `journeys` exports with the data
// needed for the new design. `partners` / `awards` from const/shared can
// stay wherever else you use them; they are not part of this page anymore.

// ---- Hero stats -------------------------------------------------------
export const stats = [
    { value: "30",highlighted: "+", label: "Countries served" },
    { value: "5M", highlighted: "+", label: "Inspections processed" },
    { value: "200",highlighted: "+", label: "Enterprise clients" },
    { value: "98", highlighted: "%",label: "Accuracy rate" },
  ]
  
  // ---- Purpose / vision & mission ---------------------------------------
  export const purpose = [
    {
      key: "vision",
      label: "Vision",
      img: "Purpose1.png",
      text: "To power a world where vehicles can change hands seamlessly, with inspections that are instant, accurate, and independent of human intervention.",
    },
    {
      key: "mission",
      label: "Mission",
      img: "Purpose2.png",
      text: "We are on a mission to bring full automation to vehicle inspections by combining AI, simplicity, and precision to deliver instant, consistent, and reliable damage intelligence.",
    },
    {
      key: "reach",
      label: "Reach",
      img: "Purpose2.png",
      text: "We are built to operate globally, bringing AI-powered inspection intelligence to insurance, fleet, automotive & remarketing networks across Europe, the Middle East, LATAM, and the US.",
    },
  ]
  
  // ---- Core team (founders / leadership) ---------------------------------
  export const founders = [
    {
      name: "Devesh Trivedi",
      role: "Founder & CEO, Ex McKinsey & Zomato",
      img: "devesh.png",
      linkedin: "https://www.linkedin.com/in/devesh-trivedi-9a59399/",
    },
    {
      name: "Han Verbaas",
      role: "Director BD Europe",
      img: "han.png",
      linkedin: "https://www.linkedin.com/in/hanverbaas/",
    },
    {
      name: "Alain Drost",
      role: "Director BD Europe, Ex-Director, Bentley",
      img: "alain.png",
      linkedin: "https://www.linkedin.com/in/alain-drost-432ab2b/",
    },
  ]
  
  // ---- Broader team --------------------------------------------------------
  // `img: null` renders a circular initials avatar instead of a photo.
  export const broaderTeam = [
    { name: "Anuj Srivastav", role: "Lead Engineer", img: "anuj.png" },
    { name: "Abhilash Pattnaik", role: "Sales Head", img: "Abhilash.png" },
    { name: "Apeksha", role: "", img: "apeksha.png" },
    { name: "Niranjan Solanki", role: "Senior Data Scientist", img: "niranjan.png" },
    { name: "Uday Kanojia", role: "Product Operations Manager", img: "uday.png" },
    { name: "Prakriti Rawat", role: "Human Resources Manager", img: "prakriti.png" },
    { name: "Kshitij Manha", role: "Senior Software Engineer", img: "kshitij.png" },
    { name: "Ankit Kumar", role: "", img: "ankit.png" },
    { name: "Mohammad Salman", role: "", img: "salman.png" },
    { name: "Sushant Tiwari", role: "", img: "sushant.png" },
    { name: "Ishant Kukreti", role: "", img: "ishant.png" },
    { name: "Neeraj Kumar Pal", role: "", img: "neeraj.png" },
  ]
  
  // ---- Backers / investors --------------------------------------------------
  export const backers = [
    { name: "Better Capital", img: "bettercapital.svg" },
    { name: "Firstcheque", img: "firstcheque.webp" },
    { name: "Titan Capital", img: "titan capital.png" },
    { name: "Techstars", img: "techStars_.png" },
    { name: "Barclays", img: "Barclays Logoo.png" },
    { name: "Plug and Play", img: "plug-and-play.jpg" },
  ]
  
  // ---- Journey / timeline ----------------------------------------------------
  export const journeys = [
    {
      date: "Aug 2018 – Jun 2019",
      name: "Prototype / First POC",
      text: "Built first AI-powered inspection prototype",
      url: "",
    },
    {
      date: "Jun 2019",
      name: "Seed Round",
      text: "Seed round backed by Better Capital",
      url: "",
    },
    {
      date: "Dec 2019",
      name: "Barclays – Techstars Accelerator",
      text: "Selected as one of 10 fintech companies for the Rise London programme.",
      url: "",
    },
    {
      date: "Oct 2020",
      name: "SmartCityX by Scrum Ventures",
      text: "Accepted into the SmartCityX accelerator programme by Scrum Ventures.",
      url: "",
    },
    {
      date: "Nov 2020",
      name: "Chiratae Ventures Innovators Program",
      text: "Joined Chiratae Ventures Innovators Program, secured 2nd long-term contract.",
      url: "",
    },
    {
      date: "Jan 2021",
      name: "AI4Biz — IFC & Stellaris Ventures",
      text: "Selected for the AI4Biz programme jointly run by IFC and Stellaris Ventures.",
      url: "",
    },
    {
      date: "Feb 2021",
      name: "Winners of NTT OIC 11",
      text: "Won NTT's Open Innovation Contest 11 in the mobility category.",
      url: "",
    },
    {
      date: "Mar 2021",
      name: "Partnership with Liberty General Insurance",
      text: "Liberty General Insurance rolls out AI-based automated car inspections",
      url: "",
    },
    {
      date: "Apr 2021",
      name: "Plug and Play Mobility",
      text: "Joined Plug and Play's global industry accelerator cohort.",
      url: "",
    },
    {
      date: "2022",
      name: "Insurtech Insights 'Future 50'",
      text: "Recognized among the top 50 most promising insurtech companies in the Americas.",
      url: "",
    },
    {
      date: "Jul 2022",
      name: "Partnership with Zurich",
      text: "Kotak General Insurance automates vehicle inspection via Inspektlabs AI.",
      url: "",
    },
    {
      date: "Oct 2022",
      name: "BMW Newcomer Day & KStartup Grand Challenge",
      text: "Featured at BMW Group's Newcomer Day; won the KStartup Grand Challenge.",
      url: "",
    },
    {
      date: "Nov 2022",
      name: "1M+ Inspections Processed",
      text: "Crossed one million AI-assessed vehicle inspections on the platform",
      url: "",
    },
    {
      date: "Jan 2023",
      name: "New Office in EU",
      text: "Opened European office to serve growing demand across the EU market",
      url: "",
    },
    {
      date: "2024",
      name: "Partnership with Nissan Chile",
      text: "Nissan Chile integrates Inspektlabs for AI-powered damage detection",
      url: "",
    },
    {
      date: "2024",
      name: "Inspektbot — WhatsApp Inspections",
      text: "Launched Inspektbot, enabling vehicle inspections directly via WhatsApp",
      url: "",
    },
    {
      date: "2025",
      name: "2M+ Yearly Inspections & 25+ Countries",
      text: "Surpassed 2 million annual inspections; now operating in 25+ countries",
      url: "",
    },
    {
      date: "2025",
      name: "Photo Quality API Released",
      text: "Launched API enabling real-time photo quality scoring for inspection workflows",
      url: "",
    },
    {
      date: "2025",
      name: "Brand New Vehicle Inspection App",
      text: "Relaunched the inspection app with an all-new UI for faster, guided inspections.",
      url: "",
    },
    {
      date: "2025 — Now",
      name: "Vehicle Damage Scanners Launched",
      text: "Deployed hardware-integrated damage scanners for dealerships and fleet operators.",
      url: "",
    },
  ]
  
  // ---- Events & conferences ---------------------------------------------------
  export const events = [
    { code: "IN", name: "Insurtech Insights Europe", date: "March 2025", location: "London, UK" },
    { code: "DI", name: "Digital Insurance Agenda", date: "April 2025", location: "Amsterdam, Netherlands" },
    { code: "AI", name: "AI Summit New York", date: "June 2025", location: "New York, USA" },
    { code: "GI", name: "GITEX Global", date: "October 2025", location: "Dubai, UAE" },
    { code: "FI", name: "FinovateAsia", date: "November 2025", location: "Singapore" },
  ]