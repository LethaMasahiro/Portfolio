import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    csharp,
    java,
    cplusplus,
    c,
    figma,
    jira,
    python,
    rstudio,
    springboot,
    unity,
    unrealengine,
    msgglobal,
    MMI,
    analytics,
    card,
    drawing,
    game,
    calendar
} from "../assets/icons";

export const skills = [
    {
        imageUrl: csharp,
        name: "C#",
        type: "Backend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: springboot,
        name: "Spring Boot",
        type: "Backend",
    },
    {
        imageUrl: cplusplus,
        name: "C#",
        type: "Backend",
    },
    {
        imageUrl: rstudio,
        name: "R Studio",
        type: "Machine Learning",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: c,
        name: "C",
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
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: unity,
        name: "Unity",
        type: "Game Engine",
    },
    {
        imageUrl: unrealengine,
        name: "Unreal Engine",
        type: "Game Engine",
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "Frontend Design Tool",
    },
    {
        imageUrl: jira,
        name: "Jira",
        type: "Agile Development Software",
    },
];

export const experiences = [
    {
        title: "3D Full stack Developer (full time)",
        company_name: "Luxolis",
        icon: msgglobal,
        iconBg: "#e1f1fd",
        date: "Since March 2024",
        points: [
            "Contribute to the software development of the 3D digital twin, collaboration platform that displays 3D models from object reconstruction and object detection/ photogrammetry.",
            "Ensure the schedule of the product development with transparency and integrity.",
            "UI/UX design, independent product development, responding to clients’ technical requests.",
            "Requirement engineering.",
            "GitHub Management, AWS Management",
        ],
    },
    {
        title: "Full stack Developer (working student)",
        company_name: "MSG Global Solutions",
        icon: msgglobal,
        iconBg: "#e1f1fd",
        date: "Feb 2022 - Dec 2023",
        points: [
            "Front-end design with Figma.",
            "Backend development of a RESTful API service with Java, Spring Boot and AWS.",
            "GitLab management.",
            "Requirement engineering.",
            "International team communication, agile development",
        ],
    },
    {
        title: "Software Engineer (working student)",
        company_name: "MMI Munich Media Intelligence GmbH",
        icon: MMI,
        iconBg: "#E0E0E0",
        date: "Oct 2017 - Mar 2019",
        points: [
            "Software development in the media industry with Java.",
            "Managing small projects in an international team.",
            "Contact with end-customers.",
            "Risk analysis and user stories, agile development.",
            "Software language mapping",
        ],
    },
    {
        title: "Software Engineer (Intern)",
        company_name: "MMI Munich Media Intelligence GmbH",
        icon: MMI,
        iconBg: "#E0E0E0    ",
        date: "Sep 2017 - Oct 2017",
        points: [
            "Learning about software development within a small-sized company",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/LethaMasahiro',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/viola-stumpf-460512182/',
    }
];

export const projects = [
    {
        iconUrl: drawing,
        theme: 'btn-back-red',
        name: 'Level Design Collection',
        description: 'Collected methods and tools for gamespace engineering on a live website.',
        link: 'https://github.com/LethaMasahiro/digital-garden-level-design',
    },
    {
        iconUrl: card,
        theme: 'btn-back-green',
        name: 'Card Sending Web Application',
        description: 'Developed a fully-functional web subscription service that offers users to send physical customisable and thoughtful cards to friends and relatives.',
        link: 'https://github.com/LethaMasahiro/collection/blob/main/cardme-prototype.zip',
    },
    {
        iconUrl: analytics,
        theme: 'btn-back-blue',
        name: 'SAP Learning Platform Analytics',
        description: 'Used SAP technologies and SAP HANA to analyze the learning behavior of employees on a learning platform.',
        link: 'https://github.com/LethaMasahiro/collection/blob/main/sapanalytics-main.zip',
    },
    {
        iconUrl: game,
        theme: 'btn-back-pink',
        name: 'Maze Walker Game',
        description: 'Implemented a shader-focused game in Unity, showcasing portals, rendered fog and snow, footprints and dissolve shaders.',
        link: 'https://github.com/LethaMasahiro/collection/blob/main/mazewalker-shader-project.zip',
    },
    {
        iconUrl: game,
        theme: 'btn-back-black',
        name: 'Button Smash Game with self-built controller',
        description: 'Collected the input of a self-built controller in a simple 1v1 button smash game on a 40-hour long game jam, focussing on simple mechanics and a fun experience for the players.',
        link: 'https://github.com/Nimaoth/DiscoverYourPowerLevel/tree/2159d0cf463ef4d56d3c807d056a2bd0f5eb5575',
    },
    {
        iconUrl: calendar,
        theme: 'btn-back-black',
        name: 'Absence Tracking App',
        description: 'Created a simple React Native App that tracks the attendance and absences of a non-profit dance group (work in progress)',
        link: 'https://github.com/Nimaoth/DiscoverYourPowerLevel/tree/2159d0cf463ef4d56d3c807d056a2bd0f5eb5575',
    },
];