import { meta, shopify, Cling, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  react,
  redux,
  summiz,
  tailwindcss,
  threads,
  typescript,
  aws,
  postgreSQL,
  redis,
  prisma,
  Twitter,
  Typing,
  Hippo,
  Blog,
  Ecommerce,
  Spotify,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: postgreSQL,
    name: "PostgreSQL",
    type: "Database",
  },
  {
    imageUrl: redis,
    name: "Redis",
    type: "Caching",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: aws,
    name: "AWS",
    type: "CloudServices",
  },

  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },

  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Technical Lead & Founding engineer",
    company_name: "Docvita",
    icon: Cling,
    iconBg: "#accbe1",
    date: "2022 - 2023",
    points: [
      "Build the entire architecture of the product while working directly with CTO",
      "Demonstrated ability to build scalable, reliable and secured WebApp and deploy on AWS with microservices architecture.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Lead Software Engineer",
    company_name: "Cinta Medtech",
    icon: Cling,
    iconBg: "#accbe1",
    date: "2020 - 2022",
    points: [
      "Developing and maintaining web applications using React.js and other trendy related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "MERN stack developer",
    company_name: "Railofy",
    icon: Cling,
    iconBg: "#accbe1",
    date: "2019 - 2020",
    points: [
      "Developing and maintaining web applications using React.js and other trendy related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Freelance",
    icon: Cling,
    iconBg: "#accbe1",
    date: "2018 - 2019",
    points: [
      "Developing and maintaining web applications using React.js and other trendy related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/harshmriduhash",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/harsh-s-2ab5a0158/",
  },
  {
    name: "X",
    iconUrl: Twitter,
    link: "https://twitter.com/dev_twt4",
  },
];

export const projects = [
  {
    iconUrl: Typing,
    theme: "btn-back-red",
    name: "Grootin",
    description:
      "Worked as a freelance developer,  a web application that enables Indie Artist to distribute and monitize their music. The WebApp was build on MERN stack.",
    link: "https://www.grootin.in/",
  },

  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Docvita",
    description:
      "A web based chat application in healthcare sector. Rebuild the architecture of the product, made it more secure and reliable. I used S3 for image upload functionality, Google OAuth for authentication, and Redis for caching and performance optimization. I also used TypeScript for back-end development.",
    link: "https://docvita.com/",
  },
  {
    iconUrl: Hippo,
    theme: "btn-back-blue",
    name: "Railofy",
    description:
      " I created a digital asset online marketplace called DigitalHippo. I used Payload2, a headless CMS and application framework, to build an admin page where sellers can add their products and receive verification emails. I also integrated Stripe, a payment processing platform, to accept payments and generate order slips. I added many other features to enhance the functionality and user experience of the marketplace.",
    link: "https://www.railofy.com/",
  },
  {
    iconUrl: Blog,
    theme: "btn-back-pink",
    name: "Blogify - Full stack Blog application.",
    description:
      "I built a full-stack blog application using Appwrite, a self-hosted backend server that provides various features such as authentication, real time slug making and more. Users can view and edit their posts with TinyMCE, a rich text editor that offers a user-friendly content creation experience. Users can also create and update their post slugs in real-time, similar to Hashnode, a blogging platform for developers..",
    link: "https://65edb98beb260c00089fba39--voluble-cocada-701b24.netlify.app/",
    codeLink: "https://github.com/devkumar4/MegaBlog",
  },
  {
    iconUrl: Ecommerce,
    theme: "btn-back-black",
    name: "Eclatique E-commerce men's store",
    description:
      "I built an e-commerce platform for men’s fashion called Eclatique. I used React.js, TypeScript, JWT, and Redux to create the front-end and back-end of the application. I added features such as login, sign up, cart, order tracking, and Stripe payment gateway. I used JWT for authentication and authorization, and Redux for state management. I use express.js for making REST ful API's design",
    link: "https://github.com/devkumar4/Eclatique",
    codeLink: "https://github.com/devkumar4/Eclatique",
  },
  {
    iconUrl: Spotify,
    theme: "btn-back-yellow",
    name: "Small Spotify Clone",
    description:
      "I created a web application that replicates the core functionality of the popular music streaming service Spotify. Users can play songs and tracks from various genres and artists. I used HTML5, CSS3, and vanilla JavaScript to build the front-end of the application. I used Bootstrap for styling and responsive design.",
    link: "https://devspotify.netlify.app/",
    codeLink: "https://github.com/devkumar4/spotify-clone",
  },
];
