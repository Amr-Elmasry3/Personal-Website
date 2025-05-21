// Import Imgs For Portfolio
import portofolioOne from "./assets/imgs/project1.jpeg";
import portfolioTwo from "./assets/imgs/project2.jpg";
import portofolioThree from "./assets/imgs/project3.jpg";
import portofolioFour from "./assets/imgs/project4.jpg";
import portofolioFive from "./assets/imgs/project5.jpg";
import portfolioSix from "./assets/imgs/project6.jpg";

// Import Imgs for Testimonials
import testimonialOne from "./assets/imgs/testimonial1.jpg";
import testimonialTwo from "./assets/imgs/testimonial2.jpg";
import testimonialThree from "./assets/imgs/testimonial3.jpg";
import testimonialFour from "./assets/imgs/testimonial4.jpg";
import testimonialFive from "./assets/imgs/testimonial5.jpg";

// Import Icons Of Contact Section From Matrial Ui Icons
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";

export const links = [
  { id: 1, title: "Home", href: "#home", active: true },
  { id: 2, title: "Services", href: "#services", active: false },
  { id: 3, title: "Skills", href: "#skills", active: false },
  { id: 4, title: "Works", href: "#works", active: false },
  { id: 5, title: "Resume", href: "#resume", active: false },
  { id: 6, title: "Testimonials", href: "#testimonials", active: false },
  { id: 7, title: "Contact", href: "#contact", active: false },
];

export const services = [
  {
    id: 1,
    subtitle: "Web Development",
    title: "Web Design & Logo",
    description:
      "Web designers craft the overall vision & plan for a website layout. Professional logo development: Business, Company, or Personal.",
  },
  {
    id: 2,
    subtitle: "Apps Development",
    title: "iOS & Android",
    description:
      "Design Software applications to run on mobile devices. Modern and mobile-ready application that will help you reach all of your marketing.",
  },
  {
    id: 3,
    subtitle: "Game Development",
    title: "Unity & Unreal Engine",
    description:
      "Creating games & describes the design, development and release of a game. Developing unique mobile android and ios games.",
  },
  {
    id: 4,
    subtitle: "Advertising",
    title: "Google Ads",
    description:
      "Advertising services include: Google search result pages, gmails, YouTube and other websites participated in Google Ads program.",
  },
  {
    id: 5,
    subtitle: "Music Writing",
    title: "Sound Track",
    description:
      "Music copying, writing, creating, transcription and composition services.",
  },
];

export const skills = [
  {
    id: 1,
    skill: "PHP",
    percentage: 85,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    skill: "JavaScript",
    percentage: 75,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    skill: "WordPress",
    percentage: 90,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    skill: "Paython",
    percentage: 75,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    skill: "React",
    percentage: 70,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    skill: "Adobe Cd",
    percentage: 80,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const portfolioItems = [
  {
    id: 1,
    img: portofolioOne,
    category: "Branding",
    title: "Zorro",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 2,
    img: portfolioTwo,
    category: "Development",
    title: "Explore",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 3,
    img: portofolioThree,
    category: "Photography",
    title: "Mozar",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 4,
    img: portofolioFour,
    category: "Photography",
    title: "Gooir",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 5,
    img: portofolioFive,
    category: "Development",
    title: "Stay Fit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 6,
    img: portfolioSix,
    category: "Branding",
    title: "Kana",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
];

export const resume = {
  educationData: [
    {
      id: 1,
      headrTitle: "IT Future",
      contentTitle: "High School",
      date: "2010 - 2012",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      open: false,
    },
    {
      id: 2,
      headrTitle: "Lviv National Academy of Arts",
      contentTitle: "Faculty of Design",
      date: "2012 - 2014",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      open: false,
    },
    {
      id: 3,
      headrTitle: "CoderHouse Courses",
      contentTitle: "Backend Programming",
      date: "2014 - 2016",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      open: false,
    },
  ],
  experienceData: [
    {
      id: 1,
      headrTitle: "Plugins Developer",
      contentTitle: "Fiverr.com",
      date: "2016 - 2018",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      open: false,
    },
    {
      id: 2,
      headrTitle: "UI / UX Specialist",
      contentTitle: "Kana Design Studio",
      date: "2018 - 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      open: false,
    },
    {
      id: 3,
      headrTitle: "UI Head & Manager",
      contentTitle: "Soft Tech Inc.",
      date: "2020 - Present",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      open: false,
    },
  ],
};

export const testimonials = [
  {
    id: 1,
    img: testimonialTwo,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Charlie Smith",
    job: "Designer",
  },
  {
    id: 2,
    img: testimonialFour,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Jennifer Smith",
    job: "CEO & Founder",
  },
  {
    id: 3,
    img: testimonialThree,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Roy Wang",
    job: "Manager GYM",
  },
  {
    id: 4,
    img: testimonialOne,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Barbara Wilson",
    job: "CEO Company",
  },
  {
    id: 5,
    img: testimonialFive,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Paul Freeman",
    job: "Photographer",
  },
];

export const contactInfo = [
  {
    id: 1,
    icon: <MapOutlinedIcon />,
    title: "Address",
    data: "North Tower, Toronto, Canada",
  },
  {
    id: 2,
    icon: <PermIdentityOutlinedIcon />,
    title: "Freelance",
    data: "Available Right Now",
  },
  {
    id: 3,
    icon: <EmailOutlinedIcon />,
    title: "Email",
    data: "zoe.miller@gmail.com",
  },
  {
    id: 4,
    icon: <ContactPhoneOutlinedIcon />,
    title: "Phone",
    data: "+1 900 - 900 - 9000",
  },
];
