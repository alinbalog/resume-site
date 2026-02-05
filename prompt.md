# Project Goal
Build a modern, creative, one‑page resume website.  
The design should be clean, elegant, and visually striking.  
You are free to use any packages or libraries you need (GSAP, Framer Motion, Lenis, etc.).

# Tech Stack
- Next.js
- React
- TailwindCSS
- TypeScript

Use port **4000** for the development server.

---

# Multi‑Version Requirement
Generate **five variations** of the resume website.  
Each version should be accessible at:

- `/1` (default)
- `/2`
- `/3`
- `/4`
- `/5`

Add a small debug selector to switch between versions.

Each version should explore a different interpretation of the **same unified style**, such as:
- Dark premium minimal
- Dark premium with neon accents
- Dark premium with geometric editorial touches
- Dark premium with soft gradients
- Dark premium brutalist

All versions must stay within the same overall aesthetic family.

---

# Desktop Layout Requirements

## Overall Structure
The page is a **two‑sections layout** on desktop:
- A **left section** (about 30% width)
- A **right section** (about 70% width)

Both sections contain cards.

---

## Left Section (Fixed Identity Card)

The left section is fixed and always visible.  
It contains **one single card** with:

- My photo as a **full background image**
- My name
- Short tagline
- Social links (GitHub, LinkedIn, Email)
- Download resume button

### Style:
Inspired by the Isak‑style dark premium design:
- Dark overlay on the photo
- High contrast
- Neon accent color used sparingly (green, cyan, purple — your choice)
- Clean, bold typography
- Subtle animations (hover, fade, micro‑motion)
- Should feel like a **premium identity panel**

---

## Right Section (Scrollable Cards)

The right section scrolls vertically and contains **multiple cards**, one for each resume section:

- About / Description  
- Professional Experience  
- Side Projects  
- Skills  
- Contact (optional)

### Behavior:
- The section itself stays in place; **cards scroll into view**
- Cards should feel like a **stacked deck**
- Smooth transitions between cards
- Scroll snapping or Framer Motion scroll transforms encouraged

### Style:
- Dark theme, high contrast
- Clean card layout with subtle borders or shadows
- Minimal geometric accents inspired by editorial design
- Strong typography hierarchy

---

# Mobile Layout
- Left identity card moves to the **top**
- Right‑section cards stack below
- Maintain the same dark‑premium aesthetic
- Keep everything readable and elegant

---

# Design Direction (Unified Style)

The design should combine the layout logic of a modern resume site with the artistic personality of high‑end editorial design.

Use the following references as inspiration:

### 1. Layout Inspiration (Charlie Foley‑style)
- Two‑section layout
- Fixed identity column on the left
- Scrollable content on the right
- Clean, modern, professional structure

### 2. Visual Style Inspiration (Alexander Isak dark premium)
- Dark theme with high contrast
- Neon or accent colors used sparingly
- Premium, agency‑level aesthetic
- Strong hero‑card energy
- Confident, bold typography

### 3. Editorial / Minimal Art Inspiration
- Minimal geometric shapes or accents
- Clean spacing and composition
- Slightly artistic layout touches
- Modern, minimal, tasteful

---

# Content Context (Resume Summary)

My name is **Alin Balog**.  
I am a **Full‑Stack Developer** with 2+ years of experience.

### Strengths
- Modernizing enterprise apps using **.NET** and **Angular**
- Strong understanding of **DDD**, **CQRS**, **Event Sourcing**
- Experience with **Azure Service Bus**, **MongoDB**, distributed systems
- Migrating legacy systems (AngularJS → Angular, TFS → Git)
- Building multi‑locale, multi‑language platforms
- Code quality, refactoring, mentoring

### Key Projects
**Customer Benefits Platform**
- Upgraded frontend to modern Angular
- Migrated backend to .NET 7
- Implemented rate limiting
- Added Power BI embedding
- Improved developer experience with AI tooling

**Warehouse Management System**
- Enterprise‑scale system using DDD, CQRS, Event Sourcing
- Contributed to Angular migration
- Supported TFS → Git migration
- Helped with complex business logic and refactoring

**BlooDoChallenge (Volunteer)**
- Helped migrate to Angular
- Built emergency blood request feature
- Improved admin dashboards

### Tech Stack
- Backend: .NET, EF, CQRS, Event Sourcing, DDD  
- Frontend: Angular, React, Next.js, TypeScript  
- Cloud: Azure, GitHub, CI/CD  
- Databases: SQL Server, MongoDB, Redis  
- Messaging: Azure Service Bus, RabbitMQ  

### Soft Skills
Problem solving, mentoring, code reviews, documentation, collaboration, AI‑assisted development.

---

# Creative Direction
- Clean, modern, minimal
- Slightly playful micro‑interactions
- Smooth motion, scroll‑snapping, or section transitions
- Strong typography
- High contrast, elegant spacing
- You have full freedom to choose animations, motion libraries, layout techniques, and visual effects.

Your goal is to create a **beautiful, unique, high‑end resume website**, with **five distinct design variations**.
