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
    title: "User Experience Advocate",
    icon: web,
  },
  {
    title: "Educator",
    icon: mobile,
  },
  {
    title: "Strategic Partnership Developer",
    icon: backend,
  },
  {
    title: "Communication Specialist",
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
    title: "Frontend Development Partner",
    company_name: "Richview",
    icon: starbucks,
    iconBg: "#383E56",
    date: "April 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Fullstack Developer",
    company_name: "Mohn Technology",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - June 2023",
    points: [
      "Specialize in frontend web development using Vue.js, HTML, CSS, and JavaScript",
      "Implement responsive design, optimize for performance and user experience",
      "Backend technology Golang and Docker to develop efficient, scalable, and secure web applications",
      "Collaborate closely with 3-5 developers at a time",
      "Scrum and Kanban methodologies",
      "Stay up to date with emerging trends and technologies in web development, conduct internal training sessions to share knowledge and best practices with colleagues",
    ],
  },
  {
    title: "Web Development Consultant",
    company_name: "RobustSys",
    icon: shopify,
    iconBg: "#383E56",
    date: "Mar 2023 - Apr 2023",
    points: [
      "Trained team on latest web development technologies, including SAPUI5 and Vue.js",
      "Demonstrated excellent communication and presentation skills",
    ],
  },
  {
    title: "Mobile Engineer (Quality Assurance focus)",
    company_name: "Samsung",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Oct 2022",
    points: [
      "Closely worked together with VIP at Samsung to bring new ideas and discuss best practices",
      "Developed and maintained together with team cutting-edge mobile applications with Scrum methodology",
      "Took initiative to learn Vue.js and other technologies on my own, and incorporate into work to enhance quality and functionality of existing applications",
      "Showed team automation techniques such as UI Automator, resulting in significant time and cost savings",
      "Utilized Samsung’s SDS for version control, code review, and collaboration",
    ],
  },
  {
    title: "Git Version Control Team Lead",
    company_name: "Texas Instruments",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2022 - May 2022",
    points: [
      "Led team to build on top of Texas Instrument’s version control",
      "Successful completion of project and given recommendation at Texas Instruments.",
    ],
  },
  {
    title: "Frontend Web Development Instructor (including freelance)",
    company_name: "Rex Academy",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug 2019 - Dec 2020",
    points: [
      " Prior to Rex Academy, I have had years of experience in education (professional and freelance)",
      "Passionate about teaching web development, empowering all individuals to succeed",
      "Continue to provide private instruction to individuals seeking to improve even today",
    ],
  },
  {
    title: "Accessibility & Teaching Assistance",
    company_name: "Arlington Independent School District",
    icon: shopify,
    iconBg: "#383E56",
    date: "Mar 2023 - Apr 2023",
    points: [
      "Highly values the importance of accessibility",
      "Worked with screen readers, text-to-speech, keyboard navigation, high contrast mode",
      "Talked with clients and end-users to understand specific needs",
      "I have a unique perspective on the importance of accessibility, especially in web design, and I am committed to creating websites accessible to all users, regardless of abilities or disabilities",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I was very impressed with Zen's thoughtfulness and decision making to make sure everyone felt involved. He knows how to listen and follow people. This sort of quality makes him a natural leader.",
    name: "Thanh Nguyen",
    designation: "Developer",
    company: "Texas Instruments",
    image: "https://media.licdn.com/dms/image/C5603AQEz3IeRNOD-SQ/profile-displayphoto-shrink_400_400/0/1639373628437?e=1689811200&v=beta&t=KspmA4IOjqw9Efc2zh7zd0zEzEvCkqfhtUEjOzR52CI",
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
    source_code_link: "https://github.com/",
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
    source_code_link: "https://github.com/",
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
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
