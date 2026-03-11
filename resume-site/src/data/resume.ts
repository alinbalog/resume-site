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
            "Modernized the frontend architecture with Angular and migrated backend services to .NET 7; embedded Power BI dashboards to improve analytics UX",
            "Implemented rate limiting and other reliability improvements to stabilize high-traffic flows",
            "Built a comprehensive CMS to send templated messages to Microsoft Teams (multi-template, multi-locale)",
            "Promote AI adoption and developer experience: authored GitHub Copilot guidelines, held internal talks, and maintain developer resources (agents.md, tips & tooling)",
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

  projects: [
    {
      slug: "sms-scheduler",
      name: "SMS Scheduler",
      repo: "https://github.com/alinbalog/orar-automat-template",
      status: "Completed",
      description: "Automated daily SMS sender that posts tomorrow's classes via Twilio.",
      stack: ["Node.js", "Luxon", "Twilio", "GitHub Actions", "JSON config"],
      story: "Built after a hackathon — I had unused Twilio credit and, while hanging out with my brother, decided to finally use it. I prototyped a lightweight JS app that runs from a GitHub Actions cron job. This was intentionally a learning experiment: I explored how Actions cron schedules and self-tests work, learned to handle GitHub Secrets safely, and implemented a simple Twilio delivery flow. The project helped turn curiosity into practical automation and informed future improvements (external schedule sources, monitoring, templating).",
      caseStudy: {
        purpose: "Send students a concise SMS with the next day's schedule using a simple, cron-driven runner.",
        lessonsLearned: [
          "How GitHub Actions cron works and how to self-test scheduled runs",
          "Handling GitHub Secrets safely in workflows",
          "Integrating Twilio for reliable SMS delivery",
          "Designing a small, testable resolver for parity/overrides and timezone handling"
        ],
        thingsInside: ["src/resolver.js (schedule logic)", "src/index.js (runner + Twilio)", "config/*.json + validator", "compact SMS formatting helpers"],
        futureIdeas: [
          "Serve schedule from an external API instead of committing JSON",
          "Improve templating and localization for messages",
          "Add retries/backoff, monitoring and delivery metrics"
        ]
      }
    },
    {
      slug: "resume-site",
      name: "Resume Site",
      repo: "https://github.com/alinbalog/resume-site",
      status: "Live",
      description: "Personal resume/portfolio built as a single-page Next.js app — an experiment in motion using Framer Motion and Lenis.",
      stack: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Lenis"],
      story: "I always wanted to experiment with Framer Motion and Lenis, so I used my own resume as the perfect playground. Instead of building a static portfolio, I leaned into motion, transitions and layout rhythm to make the site feel intentional and alive. It became both a personal brand piece and a practical exercise in visual design, interaction design and frontend polish.",
      caseStudy: {
        purpose: "Design a polished, motion-driven resume that highlights experience and craftsmanship.",
        lessonsLearned: [
          "How to design and manage a lightweight design system",
          "Balancing expressive motion with accessibility and performance",
          "Structuring reusable components for content and layout"
        ],
        thingsInside: ["src/components (Experience, Skills, Contact)", "data/resume.ts", "prompt.md (design notes)"],
        futureIdeas: ["CMS for editing resume data", "Small admin UI to toggle design variants", "Dedicated story/project pages powered by slugs"]
      }
    },
    {
      slug: "sakosha",
      name: "Sakosha — Shared Grocery",
      repo: "https://github.com/alinbalog/sakosha-app",
      status: "WIP",
      description: "Work-in-progress mobile-first app for collaborative grocery lists (hubs/events).",
      stack: ["Next.js", "TypeScript", "Tailwind", ".NET (EF Core)", "PostgreSQL", "Docker"],
      story: "Sakosha is my current deeper product/building exercise: a shared grocery app centered around collaborative spaces, invite flows and clear role-based actions. I wanted something bigger than a UI experiment — something that forced me to think about product boundaries, architecture, auth, data modelling and deployability from the beginning. It is still in progress, but that is part of the value: it shows how I think when a project is still evolving, not only when it is already polished.",
      caseStudy: {
        purpose: "Collaborative grocery planning with invite links, roles and list lifecycle (WIP).",
        lessonsLearned: [
          "Documenting architecture early helps keep scope aligned",
          "Scaffolding FE + BE with Docker and local dev scripts improves iteration speed",
          "WIP: core domain model (spaces/lists/items) and RBAC"
        ],
        thingsInside: ["docs/ARCHITECTURE.md", "docs/PROGRESS.md", "scripts/dev.ps1", "src/web + src/api scaffolds"],
        futureIdeas: ["Complete auth and invite flows", "Finish core CRUD and lifecycle features", "Polish mobile UX and ship an MVP"]
      }
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
