# 차원 Chaone Labs
### Independent R&D Studio

> "We build tools for researchers and educators — because someone has to."

---

## What We Do

Chaone Labs is an independent R&D studio working at the intersection of language, data, and technology. We build research tools, learning apps, and data pipelines — for ourselves, for collaborators, and occasionally for hire. Most of our work starts as something we needed and couldn't find. Some of it stays open source. Some of it turns into something more.

Run by Larry Grullon-Polanco (lead engineer) with research direction from Jihye Kim (research director).

---

## The Lab

### Open Source Tools
Free to use, modify, and build on:
- **LLM Temperature & Consistency** — Replication package on how temperature affects LLM annotation reliability
- **AutoAnki** — Turn PDFs into ready-to-import Anki vocabulary decks with TTS audio
- **Scholar Keyword Scraper** — Multi-database literature sweep with deduplication and relevance scoring
- **CC-NEWS Corpus Pipeline** — Reproducible pipeline for targeted corpus building from Common Crawl
- **LLM-Assisted Thyroid Cancer Pathology Abstraction** — Zero-shot structured data extraction from clinical pathology reports (Moffitt Cancer Center)

All open tools are MIT licensed and available on GitHub.

### Projects
- **Korean Learning Platform** — Curriculum-aligned LLM-assisted Korean practice app
- **ITA Interactional Competence Trainer** — Training tool for international teaching assistants
- **MALL for Lifelong Learning** — Interactive research companion site
- **TapedChinese** — Deterministic content validation for language learning
- Dissertation showcase websites, conference companion apps, bespoke research pipelines

---

## Collaborate

We take on a small number of collaborations each year at the intersection of language, data, and technology. Areas of work:

1. **Research Tools** — Analysis pipelines, data cleaning, methodology sandboxes
2. **Educational Software** — Curriculum-aligned learning apps, vocabulary tools, assessments
3. **Interactive Websites** — Conference companion apps, research visualization, interactive white papers
4. **Consulting & Workshops** — AI integration, data strategy, responsible AI guidance

**Contact**: larrygrpolanco@gmail.com

---

## The Team

**Larry Grullon-Polanco, M.A.** — Cofounder & Lead Engineer
Applied linguist and full-stack engineer. M.A. in Applied Linguistics from USF, Fulbright ETA to Taiwan, researcher at Moffitt Cancer Center on LLM-based clinical text abstraction. Builds at the intersection of discourse analysis, data science, and software.

**Jihye Kim, Ph.D.** — Cofounder & Research Director
Applied linguist specializing in second language acquisition, Korean language pedagogy, and sociolinguistics. Brings pedagogical grounding and research rigor to the lab's education work, and connects the lab to the applied linguistics research community.

---

## Tech Stack

- **Frontend**: SvelteKit + Tailwind CSS
- **Backend**: Python (FastAPI, LLM orchestration)
- **Data**: PostgreSQL, portable JSON formats
- **Deployment**: Vercel

---

## Repository Structure

```
/src
  /lib
    /components   # Nav, Hero, ContactModal
    /data         # projects.ts, tools.ts
    /content/blog # Markdown blog posts
    /stores       # Modal state
  /routes
    /             # Home
    /lab          # Lab — projects & open source tools
    /collaborate  # Collaborate (formerly services)
    /writing      # Writing (formerly blog)
    /about        # The team
    /blog/[slug]  # Individual post pages
    /lab/[slug]   # Individual project/tool detail pages
```

---

## License & Philosophy

- **Open Tools**: MIT License
- **Client Work**: Proprietary (as negotiated)
- **Content/Research**: Creative Commons CC-BY

We're early-stage and intentionally small. That's not a limitation — it's the point.

---

**Last updated**: 2026-04-09
