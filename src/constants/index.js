import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  amazon,
  netflix,
  ev_forum,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.js expert",
    icon: mobile,
  },
  {
    title: "Project Manager",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Custom Web Application Development",
    company_name: "By Acube-tech",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Get works done",
    points: [
      " At Acube-tech, we specialize in creating high-impact web applications that redefine your online presence.",
      "Our apps are accessible via web browsers, eliminating downloads for seamless user engagement.",
      "Showcase your brand's uniqueness through dynamic web solutions, making a lasting impression.",
      "Deliver top-tier services and elevate user experiences with intuitive, user-centric designs.",
    ],
  },
  {
    title: "E-commerce Website",
    company_name: "By Acube-tech",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Open doors to global markets",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Websites",
    company_name: "By Acube-Tech",
    icon: tesla,
    iconBg: "#383E56",
    date: "Ignite your brand's online presence",
    points: [
      "Personal & Branding: Creative, SEO-driven websites.",
      "Startups: Dynamic launches with social integration.",
      "Companies: Professional corporate websites to elevate your brand.",
      "NGOs: Engaging sites for impact and community outreach.",
    ],
  },
  {
    title: "Digital Mrketing Strategy",
    company_name: "By Acube-Tech",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Unleash your potential ",
    points: [
      "Expert Consultants for Strategic Digital Guidance.",
      "Enhance Your Digital Footprint for Online and Offline Impact.",
      "Illuminate Your Brand's Presence Across All Platforms.",
      "SEO Optimization and Rapid Website Performance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "In the digital age, a website is the cornerstone of your brand, the hub of your communication, and the catalyst of growth.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Our website is the bridge that transforms curious visitors into loyal clients, building relationships one click at a time.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "A well-crafted website isn't a cost – it's an investment in trust, credibility, and customer connection.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "netflix clone",
    description:
      "Discover the ultimate React-built Netflix clone. Streamline your entertainment with smooth navigation, personalized suggestions, and secure authentication. Your favorite movies and shows are just a click away!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "frontend",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://aa-netflix-clone.web.app",
  },
   {
    name: "Amazon clone",
    description:
      "Experience the essence of Amazon through our React-powered clone. Shop seamlessly with user-friendly design, secure authentication, and dynamic product showcases. Your online shopping journey, reimagined.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "backend",
        color: "pink-text-gradient",
      },
      {
        name: "frontend",
        color: "red-text-gradient",
      },
    ],
    image: amazon,
    source_code_link: "https://aa-amaz-clone.web.app",
  },
  {
    name: "evangadi forum",
    description:
      "Dive into the world of Evangadi with our React-based forum clone. Engage in vibrant discussions, connect with like-minded individuals, and explore topics you're passionate about. Your gateway to a thriving online community.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "frontend",
        color: "green-text-gradient",
      },
      {
        name: "backend",
        color: "pink-text-gradient",
      },
      {
        name: "api",
        color: "red-text-gradient",
      },
      {
        name: "database",
        color: "blue-text-gradient",
      },
    ],
    image: ev_forum,
    source_code_link: "https://aa-evangadi-forum.web.app/",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://rentcar-now.vercel.app/",
  },
  
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://travel-advisor.netlify.app/",
  },
  {
    name: "Abe Garag",
    description:
      "Revolutionary auto workflow app: Powered by cutting-edge web tech, it streamlines end-to-end operations. Manage staff, services, registration, and vehicle data seamlessly. Unleash unparalleled efficiency.",
    tags: [
     
      {
        name: "api",
        color: "red-text-gradient",
      },
      {
        name: "database",
        color: "pink-text-gradient",
      },
      {
        name: "buisness development",
        color: "blue-text-gradient",
      },
      {
        name: "project scope",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://coming-soon-tau-fawn.vercel.app/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://coming-soon-tau-fawn.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
