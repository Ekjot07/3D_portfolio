import {
  mobile,
  backend,
  creator,
  web,
  skitechlogo,
  solarsecuresolutions,
  amazon,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  threejs,
  java,
  sql,
  nextjs,
  expressjs,
  aiverse,
  skitech,
  carhub,
  demenciao,
  emotionrecognition,
  leetcode,
  gdsc,
  mlsa,
  jpmorgan,
  aws,
  dsa,
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "certificates",
    title: "Certificates",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "CMS Developer",
    icon: mobile,
  },
  {
    title: "Data Engineer",
    icon: backend,
  },
  {
    title: "Competitive Coder",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "next JS",
    icon: nextjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "express JS",
    icon: expressjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "Java",
    icon: java,
  },
];

const tech = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
];

const experiences = [
  {
    title: "Data Engineer",
    company_name: " Amazon",
    icon: amazon,
    date: "Jan 2024 - June 2024",
    points: [
      "Engineered an near real time scalable data pipeline in Spark Environment by consolidating two legacy pipelines, reducing the costs and runtime by 70% and driving critical business decisions during high-volume events.",
      "Built a comprehensive unit testing package in Scala, automating 50+ sample tests to ensure data integrity, reducing testing time for Data Engineers by 40%.",
      "Architected a robust data pipeline that provides holistic insights into Amazon’s competitors by comparing delivery speed and price at the time of a glance view.",
      "Designed a Data Quality framework using Deequ in Scala that enhanced system reliability, minimized critical bugs, and accelerated deployment cycles, with regular checks and visualization in a dashboard for easy monitoring.",
    ],
  },
  {
    title: "Fullstack Web Developer and UI/UX Developer",
    company_name: "Skitech Netcorp",
    icon: skitechlogo,
    date: "May 2023 - July 2023",
    points: [
      "A dynamic, responsive website was constructed from the ground up, leveraging the MERN stack for seamless functionality.",
      "Actively collaborated with the designers and stakeholders to translate their creative concepts into practical and functional features, resulting in an aesthetically pleasing and responsive website.",
      "ENhanced Asset loading by optimizing the placement of varying-sized images, resulting in improved loading time by an 15%.",
    ],
  },
  {
    title: "Fullstack Web Developer",
    company_name: " Solar Secure Solutions",
    icon: solarsecuresolutions,
    date: "May 2022 - July 2022",
    points: [
      "Designed and constructed responsive websites using HTML, CSS and ReactJS ensuring user-friendly interfaces.",
      "Pioneered RESTful APIs using Node.js and express.js, facilitating seamless front-end and back-end data transfer.",
      "Utilized version control systems, like Git, to effectively manage codebase and facilitate seamless collaboration.",
      "Configured MongoDB and wrote Mongoose (ODM) queries enhancing response time by 15%.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "An outstanding intern who played a pivotal role in developing and seamlessly translating creative concepts into an aesthetically pleasing website.",
    name: "Mr.Aditya Yogi",
    designation: "Sr. Data Engineer, Manager",
    company: "at Amazon",
  },
  {
    testimonial:
      "Ekjot transformed a learning experience into valuable contributions, exceeding expectations, consistently demonstrating exceptional prowess.",
    name: "Mr.Chandrasekhar Raman",
    designation: "Data Engineer II, Mentor",
    company: "at Amazon",
  },
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ekjot proved me wrong.",
    name: "Mr.Debabrata Ghosh",
    designation: "Director",
    company: "of Skitech Netcorp",
  },
];

const projects = [
  {
    name: "AI verse",
    description:
      "This SaaS application offers integrated secure Single Sign-On (SSO) through Clerk authentication for simplified user access across multiple platforms. The application features versatile content generation capabilities, including code, images, videos, music, and a Conversation AI.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Prisma",
        color: "pink-text-gradient",
      },
    ],
    image: aiverse,
    source_code_link: "https://aiverse2.vercel.app/",
  },
  {
    name: "Car Hub",
    description:
      "The application is a car showcase platform where users can explore a variety of cars. They have the ability to search for cars by manufacturer, model, fuel type, and production year. This application serves as an online showroom for a car dealership.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carhub,
    source_code_link: "https://car-showcase-4qov.vercel.app/",
  },
  {
    name: "Skitech",
    description:
      "Developed a dynamic and responsive website using the MERN stack, offering seamless functionality. Collaborated closely with designers and stakeholders ensured the translation of creative ideas into practical and visually appealing features. This application serves as the home page for the company.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "pink-text-gradient",
      },
    ],
    image: skitech,
    source_code_link: "https://skitechdemoproj.vercel.app/",
  },
  {
    name: "Emotion Recognition",
    description:
      "This emotion recognition project is an innovative endeavor that harnesses cutting-edge technology to understand and interpret human emotions accurately. Using advanced machine learning algorithms, A sophisticated system capable of detecting and analyzing various emotional states from facial expressions, voice tones, and physiological signals was developed.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "CNN",
        color: "pink-text-gradient",
      },
    ],
    image: emotionrecognition,
    source_code_link: "https://github.com/Ekjot07/Emotion_Recognition",
  },
  {
    name: "Demenciao",
    description:
      "This website is designed to support patients with neurocognitive disorders such as Dementia, Alzheimer's, and Parkinson's. It introduces brain-stimulating games and teasers to promote neuroplasticity and reduce brain cell damage, providing a valuable resource for cognitive health and well-being.",
    tags: [
      {
        name: "CMS",
        color: "blue-text-gradient",
      },
      {
        name: "Wix",
        color: "green-text-gradient",
      },
      {
        name: "UI/UX",
        color: "pink-text-gradient",
      },
    ],
    image: demenciao,
  },
  {
    name: "Leetcode",
    description:
      "My LeetCode profile, featuring over 550 solved questions, showcases my strong skills in Data Structures and Algorithms. It's a testament to my problem-solving abilities, demonstrating a deep understanding of core concepts and a commitment to continuous learning. Explore my profile to see how I tackle complex challenges and find efficient solutions.",
    tags: [
      {
        name: "Leetcode",
        color: "blue-text-gradient",
      },
      {
        name: "DSA",
        color: "green-text-gradient",
      },
      {
        name: "ProblemSolving",
        color: "pink-text-gradient",
      },
    ],
    image: leetcode,
    source_code_link: "https://leetcode.com/Ekjot07",
  },
];

const certificates = [
  {
    title: "dsa",
    image: dsa,
  },
  {
    title: "gdsc",
    image: gdsc,
  },
  {
    title: "aws",
    image: aws,
  },
  {
    title: "mlsa",
    image: mlsa,
  },
  {
    title: "jpmorgan",
    image: jpmorgan,
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  certificates,
  tech,
};
