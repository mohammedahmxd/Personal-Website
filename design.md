# Design.md — Minecraft-Inspired Personal Website

## 1. Brand Direction

This website should feel like entering my personal world: a playful, memorable, Minecraft-inspired digital space that still feels professional enough for recruiters, founders, engineers, and collaborators.

The goal is not to copy Minecraft directly, but to borrow the feeling of a blocky sandbox world: pixel textures, earthy colors, inventory-style cards, subtle game UI patterns, and a strong sense of exploration.

The site should communicate:

- I build things.
- I think creatively.
- I am technical, ambitious, and hands-on.
- My projects are like different “worlds” or “builds” visitors can explore.

## 2. Core Theme

**Theme name:** `Personal World OS`

**Visual idea:**  
A portfolio website designed like a voxel-style world selection screen. The visitor starts at a hero “spawn point,” sees my name in a blocky pixel font, reads a short world description, then scrolls down to explore projects, experience, skills, and contact sections.

**Tone:**  
Creative, technical, bold, playful, but not childish.

**Keywords:**  
Voxel, pixel, sandbox, survival mode, creative mode, world map, inventory, crafting, blocks, portals, biomes, XP, achievements.

## 3. Hero Section

### Main Hero Layout

The top section should feel like the player has just loaded into my world.

Content structure:

```text
[Blocky Name / Logo]

Welcome to Ahmed's World

A personal world where I build AI systems, software products, and creative technical experiences.
Explore my projects, tools, experiments, and the systems I am crafting.

[Enter World] [View Projects]
```

### Name Treatment

My name should be the strongest visual element on the page.

Requirements:

- Use a pixel/block-style font for my name.
- Name should feel like a Minecraft-style title screen.
- Add a subtle 3D/block shadow effect.
- Keep it readable on both desktop and mobile.
- Avoid overusing the pixel font for body text.

Suggested fonts:

- `Press Start 2P` for the name and major headings.
- `Pixelify Sans` for secondary headings or labels.
- `Inter`, `IBM Plex Sans`, or `Space Grotesk` for readable body text.

Example CSS idea:

```css
.hero-name {
  font-family: "Press Start 2P", monospace;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--grass-light);
  text-shadow:
    4px 4px 0 var(--dirt-dark),
    8px 8px 0 rgba(0, 0, 0, 0.35);
}
```

## 4. Color Palette

The palette should be inspired by Minecraft biomes and blocks while still feeling clean and modern.

### Primary Colors

```css
:root {
  --grass-dark: #2f6b2f;
  --grass-main: #4caf3d;
  --grass-light: #8fd14f;

  --dirt-dark: #4b2e1f;
  --dirt-main: #7a4a2a;
  --dirt-light: #a66a3f;

  --stone-dark: #3a3a3a;
  --stone-main: #6b6b6b;
  --stone-light: #a7a7a7;

  --sky-main: #7ec8e3;
  --sky-light: #c9f2ff;

  --wood-dark: #5a351c;
  --wood-main: #9b5c2e;
  --wood-light: #c9894b;

  --diamond-main: #41d9d0;
  --diamond-light: #8ff7f0;

  --gold-main: #f2c94c;
  --redstone-main: #e53935;

  --bg-night: #101820;
  --bg-cave: #171717;
  --text-main: #f4f1de;
  --text-muted: #c9c3a5;
}
```

### Usage Rules

- Background should usually be dark, like night mode or cave mode.
- Use grass green for primary actions.
- Use dirt/wood tones for panels and borders.
- Use diamond cyan for highlights, links, hover states, and special project tags.
- Use gold for achievements, awards, featured projects, or important calls to action.
- Use redstone red sparingly for alerts, active indicators, or “currently building” labels.

### Suggested Section Themes

| Section | Theme |
|---|---|
| Hero | Night sky / overworld |
| About | Grass + dirt blocks |
| Projects | Inventory / world select |
| Skills | Crafting table / toolbelt |
| Experience | Quest log |
| Contact | Portal / end screen |

## 5. Typography

### Font Hierarchy

```css
--font-display: "Press Start 2P", monospace;
--font-pixel: "Pixelify Sans", system-ui;
--font-body: "Inter", system-ui, sans-serif;
```

### Usage

- `Press Start 2P`: only for name, major title text, small UI labels.
- `Pixelify Sans`: section headings, buttons, badges.
- `Inter` or similar: paragraphs, project descriptions, experience text.

### Important Rule

Do not make the entire site pixel font. Pixel fonts are memorable but hard to read in large amounts. Use them as an accent.

## 6. Layout System

### Page Structure

```text
1. Hero / Spawn Point
2. About My World
3. Featured Builds / Projects
4. Skills Inventory
5. Experience Quest Log
6. Achievements
7. Contact Portal
```

### Max Width

```css
.container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;
}
```

### Grid

Use a responsive grid for project cards:

```css
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}
```

## 7. Visual Style

### Pixelated / Blocky Feel

Use:

- Square corners or slightly rounded corners.
- Chunky borders.
- Pixel-style shadows.
- Block textures as subtle backgrounds.
- Inventory-slot style cards.
- Hover effects that feel like selecting an item in a game menu.

Avoid:

- Overly realistic textures.
- Too many animations.
- Making the site look like a children’s game.
- Copying official Minecraft assets directly.

### Border Style

```css
.block-border {
  border: 4px solid var(--stone-dark);
  box-shadow:
    6px 6px 0 rgba(0, 0, 0, 0.35),
    inset 0 0 0 2px rgba(255, 255, 255, 0.08);
}
```

### Card Style

Project and skill cards should feel like inventory slots or build blocks.

```css
.card {
  background: linear-gradient(
    180deg,
    rgba(122, 74, 42, 0.95),
    rgba(75, 46, 31, 0.95)
  );
  border: 4px solid var(--dirt-dark);
  box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.35);
  padding: 24px;
}
```

## 8. Hero Background

The hero should have a layered voxel world feeling.

Possible background elements:

- Pixelated night sky.
- Small square stars.
- Blocky hills or terrain along the bottom.
- Subtle floating blocks.
- A small animated cursor/crosshair.
- Low-opacity grid or pixel pattern.

Do not make the background too busy. The name and intro text must stay readable.

### Hero Background CSS Idea

```css
.hero {
  min-height: 100vh;
  background:
    radial-gradient(circle at 20% 20%, rgba(65, 217, 208, 0.15), transparent 25%),
    linear-gradient(180deg, #101820 0%, #172c24 60%, #2f6b2f 100%);
  position: relative;
  overflow: hidden;
}
```

## 9. Section Copy Direction

### About Section

Section title:

```text
About My World
```

Description direction:

```text
This is the world where I build software, experiment with AI, design systems, and turn ideas into products. Every project is a different build: some are polished, some are still under construction, but each one taught me something important.
```

### Projects Section

Section title:

```text
Featured Builds
```

Each project card should include:

- Project name
- Short description
- Tech stack
- Status badge
- Links
- “Biome” or category

Example card labels:

```text
Biome: AI Systems
Status: Currently Building
Stack: Next.js · FastAPI · Supabase · Python
```

Possible status badges:

- `Currently Building`
- `Shipped`
- `Prototype`
- `Hackathon Build`
- `Research Build`
- `Open Source`

### Skills Section

Section title:

```text
Skills Inventory
```

Display skills like inventory items.

Categories:

- Languages
- Frontend
- Backend
- AI / ML
- Cloud / DevOps
- Databases
- Tools

Example:

```text
[Python] [JavaScript] [TypeScript] [React] [Next.js] [FastAPI] [Supabase] [Azure] [Docker]
```

### Experience Section

Section title:

```text
Quest Log
```

Each experience should look like a quest entry.

Example structure:

```text
Quest: Junior Systems Administrator
Location: Ontario Ministry
Objective: Build internal tools, support cloud systems, automate workflows, and improve infrastructure visibility.
Rewards: C#, Azure DevOps, Power BI, Linux, automation, production systems experience.
```

### Contact Section

Section title:

```text
Enter the Portal
```

Description:

```text
Want to collaborate, talk software, or explore something I am building? Send a message and step into the portal.
```

Buttons:

- `Email Me`
- `LinkedIn`
- `GitHub`
- `Resume`

## 10. Components

### Buttons

Buttons should look like game menu options.

Primary button:

```css
.btn-primary {
  background: var(--grass-main);
  border: 4px solid var(--grass-dark);
  color: #0f1a0f;
  font-family: var(--font-pixel);
  font-weight: 700;
  padding: 14px 20px;
  box-shadow: 4px 4px 0 var(--dirt-dark);
  cursor: pointer;
}

.btn-primary:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 var(--dirt-dark);
  background: var(--grass-light);
}
```

Secondary button:

```css
.btn-secondary {
  background: var(--stone-main);
  border: 4px solid var(--stone-dark);
  color: var(--text-main);
  font-family: var(--font-pixel);
  padding: 14px 20px;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.4);
}
```

### Badges

Badges should feel like small item labels.

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border: 2px solid var(--stone-dark);
  background: var(--bg-cave);
  color: var(--diamond-light);
  font-family: var(--font-pixel);
  font-size: 0.8rem;
}
```

### Project Cards

Project cards should have a “world selection” feel.

Hover interaction:

- Slight lift.
- Border changes to diamond.
- Card shadow increases.
- Optional small pixel sparkle or highlight.

```css
.project-card:hover {
  transform: translateY(-6px);
  border-color: var(--diamond-main);
  box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.45);
}
```

## 11. Microinteractions

Use small, satisfying interactions:

- Button hover should feel like selecting a game menu item.
- Project card hover should feel like highlighting a world.
- Section headings can have a tiny blinking cursor.
- XP bar can show scroll progress.
- Skills can appear like inventory items being collected.
- Contact button can use a portal glow effect.

Avoid heavy animations that make the site slower or distracting.

## 12. Optional Fun Features

These are optional but would make the site stand out.

### XP Scroll Bar

A thin XP bar at the top of the page that fills as the user scrolls.

Label idea:

```text
XP Progress
```

### World Save Cards

Each project can be styled like a Minecraft world save slot.

```text
World Name: AI Resume Analyzer
Mode: Creative
Last Played: 2026
Status: Shipped
```

### Achievement Popups

Small achievements can appear when sections enter view.

Examples:

```text
Achievement Unlocked: Viewed Featured Builds
Achievement Unlocked: Opened Skills Inventory
Achievement Unlocked: Entered Contact Portal
```

Use these sparingly.

### Day/Night Toggle

A theme toggle that switches between:

- Day Mode: bright overworld
- Night Mode: cave/night aesthetic

Default should be Night Mode because it looks more premium.

## 13. Accessibility

The site must stay readable and usable.

Requirements:

- Body text should not use tiny pixel fonts.
- Maintain strong color contrast.
- Buttons must be keyboard accessible.
- Hover effects must also work with focus states.
- Animations should respect `prefers-reduced-motion`.
- Do not rely only on color to communicate status.
- Avoid fast flashing animations.

Example:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

## 14. Responsive Design

### Desktop

- Hero name can be large and cinematic.
- Projects display in 2–3 columns.
- Skills can use inventory-grid layout.
- Background details can be more visible.

### Tablet

- Reduce hero name size.
- Keep project cards in 2 columns.
- Reduce decorative background elements.

### Mobile

- One-column layout.
- Hero text should be centered.
- Name should wrap cleanly.
- Buttons stack vertically.
- Pixel shadows should be smaller to avoid clutter.

Example:

```css
@media (max-width: 640px) {
  .hero-name {
    font-size: 2rem;
    text-shadow:
      3px 3px 0 var(--dirt-dark),
      5px 5px 0 rgba(0, 0, 0, 0.35);
  }

  .hero-actions {
    flex-direction: column;
    width: 100%;
  }

  .hero-actions a,
  .hero-actions button {
    width: 100%;
  }
}
```

## 15. Content Style Guide

Use Minecraft-inspired language, but keep it controlled.

Good:

- `Featured Builds`
- `Skills Inventory`
- `Quest Log`
- `Enter the Portal`
- `Currently Building`
- `World Description`
- `Achievements`

Avoid overdoing phrases like:

- Creeper references
- Pickaxe jokes everywhere
- Excessive gaming slang
- Anything that makes the brand feel unserious

The writing should sound like a technical builder with personality.

## 16. Visual Inspiration Rules

Inspired by:

- Minecraft title screen
- Minecraft inventory UI
- Voxel terrain
- Pixel art interfaces
- Retro game menus
- Developer portfolio websites

Do not directly use:

- Official Minecraft logo
- Official Minecraft textures
- Official Minecraft characters
- Mojang/Microsoft assets
- Exact Minecraft UI screenshots

Create original blocky assets instead.

## 17. Example CSS Tokens

```css
:root {
  /* Backgrounds */
  --background-primary: #101820;
  --background-secondary: #171717;
  --background-card: #4b2e1f;

  /* Text */
  --text-primary: #f4f1de;
  --text-secondary: #c9c3a5;
  --text-dark: #0f1a0f;

  /* Brand */
  --brand-primary: #4caf3d;
  --brand-secondary: #41d9d0;
  --brand-accent: #f2c94c;
  --brand-danger: #e53935;

  /* Blocks */
  --block-grass: #4caf3d;
  --block-dirt: #7a4a2a;
  --block-stone: #6b6b6b;
  --block-wood: #9b5c2e;

  /* Borders */
  --border-dark: #242424;
  --border-light: rgba(255, 255, 255, 0.12);

  /* Shadows */
  --shadow-block: 6px 6px 0 rgba(0, 0, 0, 0.35);
  --shadow-block-hover: 8px 8px 0 rgba(0, 0, 0, 0.45);

  /* Fonts */
  --font-display: "Press Start 2P", monospace;
  --font-pixel: "Pixelify Sans", system-ui;
  --font-body: "Inter", system-ui, sans-serif;
}
```

## 18. Page Wireframe

```text
--------------------------------------------------
| XP Progress Bar                                |
--------------------------------------------------

[Hero / Spawn Point]
- Blocky name
- Welcome to Ahmed's World
- Short personal world description
- Enter World button
- View Projects button
- Pixel terrain background

[About My World]
- Short paragraph about who I am and what I build
- 2–3 highlight blocks

[Featured Builds]
- Project card
- Project card
- Project card
- Project card

[Skills Inventory]
- Inventory-style skill grid

[Quest Log]
- Experience entries
- Education entry
- Community / events entry

[Achievements]
- Hackathons
- Work milestones
- Shipped projects
- Leadership

[Enter the Portal]
- Contact text
- Email / LinkedIn / GitHub / Resume buttons
```

## 19. Design Priorities

Priority order:

1. Strong first impression.
2. Readability.
3. Memorable Minecraft-inspired identity.
4. Fast performance.
5. Responsive mobile design.
6. Clear project storytelling.
7. Professional enough for recruiters and founders.

## 20. Final Direction

This website should feel like a personal digital world. The Minecraft-inspired style should make it memorable, but the content should still prove that I am serious about software, AI, and building useful systems.

The final impression should be:

```text
This person builds like an engineer, thinks like a creator, and presents themselves differently from everyone else.
```
