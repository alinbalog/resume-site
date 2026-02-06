export const resumeData = {
  personal: {
    name: "Alin Balog",
    title: "Full-Stack Developer",
    tagline: "Design-minded Full‑Stack Developer — .NET, Angular, product & UI-focused",
    email: "alinbalog5@gmail.com",
    github: "https://github.com/alinbalog",
    linkedin: "https://linkedin.com/in/alinbalog",
    location: "Romania",
    yearsExperience: "2+",
    photo: "/photo.jpg",
  },
  
  about: {
    headline: "Crafting robust, scalable solutions for complex business challenges",
    description: `Full-Stack Developer with 2+ years of experience modernizing enterprise applications.
    I don't stop at Angular and .NET — I love design, implementation, and creating delightful user
    experiences. I specialize in transforming legacy systems into modern, maintainable architectures
    while paying close attention to UX, visual polish, and developer experience.

    My expertise spans DDD, CQRS, Event Sourcing, and distributed systems architecture. I'm passionate
    about clean code, thoughtful interfaces, and leveraging AI-assisted development tools to boost
    productivity and quality.`,
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
      description: "Led frontend modernization and backend upgrades for a multi-locale enterprise platform.",
      achievements: [
        "Upgraded frontend to modern Angular with improved architecture",
        "Migrated backend from legacy .NET to .NET 7",
        "Implemented rate limiting and API security enhancements",
        "Integrated Power BI embedding for analytics dashboards",
        "Enhanced developer experience with AI tooling integration",
      ],
      tech: [".NET 7", "Angular", "Azure", "Power BI", "MongoDB"],
    },
    {
      company: "Warehouse Management System",
      role: "Full-Stack Developer",
      period: "2021 - 2022",
      description: "Contributed to an enterprise-scale WMS built with DDD, CQRS, and Event Sourcing patterns.",
      achievements: [
        "Developed features using Domain-Driven Design principles",
        "Contributed to Angular migration from legacy codebase",
        "Supported TFS to Git migration for improved CI/CD",
        "Implemented complex business logic with event sourcing",
        "Mentored junior developers on architecture patterns",
      ],
      tech: ["DDD", "CQRS", "Event Sourcing", ".NET", "Angular"],
    },
    {
      company: "BlooDoChallenge",
      role: "Volunteer Developer",
      period: "2020 - 2021",
      description: "Helped modernize a blood donation platform connecting donors with those in need.",
      achievements: [
        "Migrated legacy AngularJS to modern Angular",
        "Built emergency blood request feature",
        "Improved admin dashboards for better monitoring",
        "Optimized database queries for better performance",
      ],
      tech: ["Angular", "TypeScript", ".NET", "SQL Server"],
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
