import {
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  next,
  iphone15,
  teslo,
  journalApp,
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
    name: "Next JS",
    icon: next,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Enerlink",
    country: "Chile",
    icon: "",
    iconBg: "#383E56",
    date: "April 2023 - October 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Teacher Assistant",
    company_name: "4Geeks Academy",
    country: "Chile",
    icon: "",
    iconBg: "#E6DEDD",
    date: "Jun 2021 - April 2023",
    points: [
      "supporting students in their learning journey, with a particular emphasis on teaching JavaScript and React.",
      "This experience not only strengthened my ability to communicate complex ideas but      also allowed me to tailor my teaching approach to the individual needs of each student.",
      "My greatest challenge was adapting to the different ways in which each student approached situations and developed solutions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Journal App",
    description:
      "In this application, you can create, update, and delete notes as needed. You can create your own user account, and Google authentication is available for that purpose. Additionally, you have the option to attach images to your notes if desired.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
    ],
    image: journalApp,
    source_code_link: "https://github.com/monicacalle/Journal-app-using-MUI",
  },
  {
    name: "iPhone 15 page",
    description:
      "Recreate the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects. From custom animations to animated 3D models.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "GSAP",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: iphone15,
    source_code_link: "https://github.com/monicacalle/iphone15-page-clone",
  },

  {
    name: "Teslo Shop",
    description:
      "Web application as a clone from tesla shop made with Next js.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Nextjs",
        color: "pink-text-gradient",
      },
    ],
    image: teslo,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
