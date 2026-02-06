export const resumeData = {
  personal: {
    name: "Alin Balog",
    title: "Full Stack Developer",
    tagline: "Design minded, Full Stack Developer, .NET, Angular, product focused",
    email: "alinbalog5@gmail.com",
    github: "https://github.com/alinbalog",
    linkedin: "https://linkedin.com/in/alinbalog",
    location: "Romania",
    yearsExperience: "3+",
    photo: "/photo.jpg",
  },
    
  about: {
    headline: "Building resilient, scalable software that makes complex systems feel simple",
    description: `Hello there 👋 I'm Alin, a Romania based Full‑Stack Developer with 3+ years of experience building full‑stack applications.

  Curiosity drives my work: I enjoy experimenting with new tools, learning and applying pragmatic patterns to solve real product problems.

  Outside of work I follow programming trends such as AI, security, and best practices, you might also find me tinkering with small pet projects.`
  },
  
  experience: [
    {
      company: "Qubiz",
      period: "Apr 2023 - Present",
      location: "Oradea, Romania - Hybrid",
      projects: [
        {
          name: "Customer Benefits Platform",
          role: "Full Stack Developer",
          period: "Apr 2023 - Present",
          description: "Multi language, multi locale benefits platform with both user facing and admin interfaces.",
          achievements: [
            "Modernized the frontend architecture with Angular and migrated backend services to .NET 7",
            "Implemented a rate limiter and reliability improvements to stabilize high traffic flows",
            "Embedded Power BI dashboards and improved analytics UX for stakeholders",
            "Authored GitHub Copilot guidelines and developer tooling patterns to improve AI assisted coding",
          ],
          tech: ["Angular", ".NET 7", "MongoDB", "SQL", "Power BI", "RabbitMQ", "Redis", "GitHub Copilot"],
        },
        {
          name: "Warehouse Management System",
          role: "Full Stack Developer",
          period: "Apr 2023 - Present",
          description: "Enterprise WMS implementing inventory, inbound/outbound, trips, and warehouse management workflows using DDD and Event Sourcing.",
          achievements: [
            "Implemented domain driven features and event sourced flows for complex warehouse logic",
            "Supported Angular migration efforts and VCS transition to Git",
            "Mentored teammates on architectural patterns and testing strategies",
          ],
          tech: ["DDD", "CQRS", "Event Sourcing", "Azure Service Bus", "SQL Server", "Entity Framework", "Angular"],
        },
      ],
    },
    {
      company: "BlooDoChallenge",
      period: "2022 - 2025",
      location: "Oradea, Romania - Remote",
      projects: [
        {
          name: "BlooDoChallenge",
          role: "Volunteer Developer",
          period: "2022 - 2025",
          description: "Contributed to a national blood donation platform focused on donor registration, campaigns, and emergency requests.",
          achievements: [
            "Led parts of the Angular migration and improved admin dashboards",
            "Built an emergency blood request feature to streamline urgent needs",
            "Mentored junior contributors and improved monitoring and performance",
          ],
          tech: [".NET", "Angular", "Azure Functions", "MSSQL", "Git"],
        },
      ],
    },
    {
      company: "HCL Technologies",
      period: "Aug 2022 - Apr 2023",
      location: "Iași, Romania - Remote",
      projects: [
        {
          name: "Data Engineer Internship",
          role: "Developer Intern",
          period: "Aug 2022 - Oct 2022",
          description: "3 month internship focused on data engineering and cloud tooling.",
          achievements: ["Built ETL flows and data validation using Azure Data Factory and Databricks"],
          tech: ["Azure Data Factory", "Databricks", "PySpark", "SQL"],
        },
        {
          name: "Internal Projects",
          role: "Developer",
          period: "Nov 2022 - Apr 2023",
          description: "Continued work on internal data and cloud projects after the internship concluded.",
          achievements: ["Automated data transformations and supported Power BI visualizations"],
          tech: ["Python", "PySpark", "Power BI", "Azure"],
        },
      ],
    }
  ],
  
  skills: {
    backendAndArchitecture: [
      ".NET / C#",
      "Entity Framework (Code First)",
      "CQRS & Event Sourcing",
      "Domain-Driven Design (DDD)",
      "iDesign Methodology",
      "Event-Driven Architecture",
      "API Design & RESTful Services",
    ],
    frontend: [
      "Angular (Modern)",
      "AngularJS (Legacy)",
      "HTML/CSS",
      "TypeScript / JavaScript",
      "React",
      "Next.js",
    ],
    dataAndInfra: [
      "SQL Server",
      "MongoDB",
      "Azure Table Storage",
      "Redis (Caching)",
      "Azure Service Bus",
      "RabbitMQ",
      "Microsoft Azure",
      "Git",
      "CI/CD Practices",
    ],
    soft: [
      "Problem Solving & Analytical Thinking",
      "Cross-functional Collaboration",
      "Agile / Scrum Methodologies",
      "Code Review & Mentoring",
      "Documentation & Technical Writing",
      "Requirement Analysis",
      "Optimist and open with AI collaboration",
    ],
  },
};

export type ResumeData = typeof resumeData;
