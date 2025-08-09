---
title: Building My Portfolio and Why I Chose Svelte + Python
date: 2025-07-30
slug: building-my-portfolio
topic: Personal
author: Mike Smith
---

I'm going to be explaining why I made certain choices when building my web portfolio. The main reason I'm making this portfolio is because I've been in the programming space for about two years, and I really enjoy creating small projects. For me, it’s like crafting a beautiful base in a survival game — except this one can live forever.

---

## Why I’m Writing This

I’ve spent a lot of time researching different languages and stacks that all produce **the exact same result**: a simple personal portfolio. But the approach you take reveals how you think, what you value, and what you know.

This post is for beginners — just like me. I’ll explain what I chose, why I chose it, and what I learned along the way.

---

## What I Wanted

My goals were simple:

- **Modularity**  
- **Efficiency**  
- **Simplicity**  
- **Appeal to developers, not designers**

---

## Language & Framework Philosophy

A lot of people think one tool is “better” than another. But in most cases, they’re just different flavors. Sure, some technologies are better suited for certain jobs — JavaScript for frontend, Python for data, C for embedded, etc. But here’s what matters most:

> **Use what you like, what you understand, and what makes development easier for you.**

Yes, you can build this entire portfolio in C. But would that be a good use of your time?

---

## How I Evaluate Tools (Ikigai Diagram)

Instead of asking what’s “best,” I ask:

1. **What am I experienced with?**  
2. **What is this tool used for?**  
3. **What do I want to build?**  
4. **What are its limitations?**

---

## Framework Comparisons

- **Vanilla HTML/CSS/JS**  
  Basic and fast. But responsive design is hard without frameworks or tooling.

- **React**  
  Popular and powerful. But the learning curve is steep, and I don’t like separating logic and styles across files.

- **Svelte (My Pick)**  
  Svelte feels like everything in one file: HTML, logic, styles. Easy to learn, clean syntax, great for beginners. The downside? Fewer libraries. But that’s also an opportunity to **build your own**.

---

## Backend Decisions

I’ve built this portfolio **four times**, including with React. Now I’m using:

- **Svelte** (Frontend)
- **Bun** (Dev server)
- **FastAPI** (Backend, Python)
- **Vercel** (Deploying for now, but switching to self-hosted later)

---

## Designing the Layout

I thought about doing wild UI stuff — like making it look like a Linux desktop or turning it into a little RPG. But I realized each unique element adds complexity. Just designing a fancy button might take 3 hours. So instead, I chose a clean, minimal layout focused on clarity.

---

## Site Structure

I have just **three pages**:

1. **Home** – Introduction, recent blogs, and projects
2. **Blog** – Filterable blog posts (you’re reading one now!)
3. **Projects** – A collection of demos, articles, and filters

That’s it. Everything you need. Nothing more.

---

## Making It Modular

Modularity is key.

- Blog card? Reusable.
- Project card? Reusable.
- Layout logic? Shared between pages.

The less I have to rewrite, the more time I save. My layout file loads header, navbar, and dynamic sections for projects/blogs based on the page.

---

## Development Workflow

1. Built the core components  
2. Used them on all pages  
3. Added filters with topics for blogs/projects  
4. Styled things carefully with Svelte’s scoped CSS  
5. Hooked up a FastAPI backend  
6. Moved JSON data into API responses  
7. Switched to Bun for faster builds  

---

## What’s Left?

Now that it works, I’m adding some fun stuff:

- A **404 game**, like Chrome’s Dino, but cooler  
- A **self-hosted version**  
- More detailed blog posts with interactive elements  
- Possibly a dark-mode toggle or animations  

---

## Final Thoughts

Your portfolio doesn’t have to be revolutionary. But it should be **modular**, **clear**, and **fun to build**. I learned a ton building mine, and I hope sharing this helps someone else think more critically about the stack they use.

Thanks for reading!

