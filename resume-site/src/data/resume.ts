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

  Outside of work I follow programming trends such as AI, security, and best practices, you might also find me tinkering with small pet projects.`,
    highlights: [
      "Modernizing enterprise apps with .NET & Angular",
      "Domain-Driven Design & CQRS patterns",
      "Distributed systems with Azure Service Bus",
      "Legacy migration specialist (AngularJS → Angular)",
      "AI-enhanced development workflows",
    ],
  },
  
  experience: [
    {
      company: "Customer Benefits Platform",
      role: "Full-Stack Developer",
      period: "2022 - Present",
      description: "Front-end and back-end modernization for a multi‑locale Customer Benefits Platform.",
      achievements: [
        "Modernized the frontend architecture with Angular and migrated backend services to .NET 7",
        "Implemented a rate limiter and reliability improvements to stabilize high‑traffic flows",
        "Embedded Power BI dashboards and improved analytics UX for stakeholders",
        "Authored GitHub Copilot guidelines and developer tooling patterns to improve AI‑assisted coding",
        "Collaborated on code reviews, mentoring, and cross‑functional feature design",
      ],
      tech: ["Angular", ".NET 7", "MongoDB", "SQL", "RabbitMQ", "Redis", "Power BI"],
    },
    {
      company: "Warehouse Management System",
      role: "Full-Stack Developer",
      period: "2021 - 2022",
      description: "Enterprise WMS built with DDD, CQRS and Event Sourcing to model complex warehouse workflows.",
      achievements: [
        "Implemented domain-driven features and event‑sourced flows for inventory, inbound/outbound and trip tracking",
        "Led Angular migration efforts from legacy code and supported VCS transition to Git",
        "Mentored teammates on architectural patterns and testing strategies",
      ],
      tech: ["DDD", "CQRS", "Event Sourcing", "Azure Service Bus", "SQL Server", "Entity Framework", "Angular"],
    },
    {
      company: "BlooDoChallenge",
      role: "Volunteer Developer",
      period: "2020 - 2021",
      description: "Contributed to a national blood‑donation platform focused on donor registration, campaigns, and emergency requests.",
      achievements: [
        "Led parts of the Angular migration and improved admin dashboards",
        "Built an emergency blood request feature to streamline urgent needs",
        "Mentored junior contributors and improved monitoring and performance",
      ],
      tech: [".NET", "Angular", "Azure Functions", "MSSQL", "Git"],
    },
  ],
  
  projects: [
    {
      name: "Enterprise Migration Toolkit",
      description: "Internal tooling for automating legacy code migrations",
      tech: ["Node.js", "TypeScript", "AST Parsing"],
      link: "#",
    },
    {
      name: "Event Sourcing Library",
      description: "Lightweight event sourcing implementation for .NET projects",
      tech: [".NET", "MongoDB", "Azure Service Bus"],
      link: "#",
    },
    {
      name: "Developer Productivity Suite",
      description: "VS Code extensions and CLI tools for common development tasks",
      tech: ["TypeScript", "VS Code API"],
      link: "#",
    },
  ],
  
  skills: {
    backend: [
      { name: ".NET / C#", level: 90 },
      { name: "Entity Framework", level: 85 },
      { name: "CQRS / Event Sourcing", level: 80 },
      { name: "Domain-Driven Design", level: 80 },
    ],
    frontend: [
      { name: "Angular", level: 90 },
      { name: "React / Next.js", level: 75 },
      { name: "TypeScript", level: 85 },
      { name: "TailwindCSS", level: 80 },
    ],
    cloud: [
      { name: "Azure (Service Bus, Functions)", level: 80 },
      { name: "SQL Server / MongoDB", level: 85 },
      { name: "Redis", level: 70 },
      { name: "CI/CD (GitHub Actions)", level: 75 },
    ],
    soft: [
      "Problem Solving",
      "Code Reviews",
      "Mentoring",
      "Documentation",
      "AI-Assisted Development",
      "Team Collaboration",
    ],
  },
};

export type ResumeData = typeof resumeData;
