import {
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    starbucks,
    CRMApp,
    rentCar,
    symfony,
    net,
    Csharp,
    Dart,
    flutter,
    java,
    php,
    springboot,
    sqlServer
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
    // {
    //   title: "React Native Developer",
    //   icon: mobile,
    // },
    // {
    //   title: "Backend Developer",
    //   icon: backend,
    // },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
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
      name: "symfony",
      icon: symfony,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: ".Net Framework",
      icon: net,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Csharp",
      icon: Csharp,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "php",
      icon: php,
    },
    {
      name: "springboot",
      icon: springboot,
    },
    {
      name: "sqlServer",
      icon: sqlServer,
    },
  ];
  
  const experiences = [
    {
      title: "internship",
      company_name: "EDI Solutions",
      icon: starbucks,
      iconBg: "#383E56",
      date: "february 2023 - juin 2023",
      points: [
        "I have designed and developed a comprehensive web CRM application independently using the Symfony PHP framework. The application includes features such as client management, sales agent tracking, task management, reporting, and geolocation.",
      ],
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
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
      name: "CRM Application",
      description:
        "web application that offers diverse features such as actions and reports management. Moreover, it provides consultation functionality, empowering company managers to monitor the progress of their sales agents' tasks effectively.",
      tags: [
        {
          name: "symfony",
          color: "blue-text-gradient",
        },
        {
          name: "SQL Server",
          color: "green-text-gradient",
        },
        {
          name: "jQuery",
          color: "pink-text-gradient",
        },
        {
          name: "FullCalendar",
          color: "blue-text-gradient",
        },
        {
          name: "Chart.js",
          color: "green-text-gradient",
        },
        {
          name: "leaflet.js",
          color: "pink-text-gradient",
        },
      ],
      image: CRMApp,
      // source_code_link: "https://github.com/",
    },
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "phpMyAdmin",
          color: "green-text-gradient",
        },
        {
          name: "laragon",
          color: "pink-text-gradient",
        },
      ],
      image: rentCar,
      // source_code_link: "https://github.com/",
    },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };