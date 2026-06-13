# 🤖 AI Usage Declaration

This document transparently discloses how Artificial Intelligence tools were used during the development of the **GemStone Guide** project.

---

## AI Tools Used

| Tool | Purpose | Extent of Use |
|------|---------|---------------|
| **Gemini (Antigravity IDE)** | Code generation, project scaffolding, debugging | Primary development assistant |
| **Gemini Image Generation** | Gemstone product images | Generated 6 of 9 gemstone images |

---

## What AI Was Used For

### ✅ Code Generation
- **Backend**: Express server setup, Mongoose schema, API routes, recommendation controller logic
- **Frontend**: React components (GemstoneForm, GemstoneCard, ResultsSection), main App component
- **Styling**: Complete CSS design system with dark theme, glassmorphism, and animations
- **Database**: Seed data for all 9 Navaratna gemstones (names, planets, zodiacs, goals, price ranges, descriptions, benefits)

### ✅ Project Architecture
- Folder structure planning (MVC pattern for backend)
- Tech stack decisions (React + Vite, Express, MongoDB)
- API design (endpoints, request/response format)

### ✅ Recommendation Algorithm
- Scoring logic for matching gemstones to user input (zodiac, goal, budget weighting)
- Primary match vs. premium pick selection strategy

### ✅ Image Generation
- AI-generated photorealistic gemstone images for: **Ruby, Pearl, Red Coral, Emerald, Yellow Sapphire, Diamond**
- Remaining gemstones (Blue Sapphire, Hessonite, Cat's Eye) use CSS color gradient fallbacks

### ✅ Documentation
- README.md file with setup instructions, API docs, and project overview
- AI_USAGE.md (this file)

---

## What AI Was NOT Used For

| Area | Details |
|------|---------|
| **Project Concept** | The idea for a gemstone recommendation app was entirely human-conceived |
| **Design Decisions** | UI/UX preferences (dark theme, gold accents, gemstone aesthetic) were directed by the developer |
| **Feature Decisions** | Number of recommendations (2), budget input type (range slider), gemstone count (9 Navaratna) — all human decisions |
| **Database Setup** | MongoDB Atlas account creation, cluster configuration, and connection string were done manually |
| **Deployment** | Git repository setup, commits, and push to GitHub were done manually |
| **Gemstone Data Accuracy** | While AI generated the seed data structure, the Vedic astrology associations (zodiac-planet-gemstone mappings) are based on traditional Jyotish Shastra knowledge |

---

## AI Contribution Estimate

| Component | AI Contribution | Human Contribution |
|-----------|----------------|-------------------|
| Backend Code | ~90% | ~10% (review, .env config) |
| Frontend Code | ~90% | ~10% (review, adjustments) |
| CSS / Design | ~85% | ~15% (direction, preferences) |
| Gemstone Data | ~70% | ~30% (validation, domain knowledge) |
| Project Idea & Direction | ~0% | ~100% |
| DevOps (Git, DB setup) | ~0% | ~100% |
| **Overall** | **~60%** | **~40%** |

---

## Verification & Human Oversight

All AI-generated code was:
- ✅ Reviewed by the developer before committing
- ✅ Tested locally for functionality
- ✅ Debugged collaboratively (e.g., MongoDB connection issues were resolved through human-AI collaboration)
- ✅ Modified based on developer feedback and requirements

---

## Ethical Considerations

- **Transparency**: This document exists to openly declare AI usage
- **Accuracy**: Gemstone-zodiac associations are based on established Vedic astrology traditions and should not be taken as medical or scientific advice
- **Originality**: While AI assisted in code generation, the project concept, architecture decisions, and creative direction are original human contributions
- **Learning**: AI was used as a development accelerator, not a replacement for understanding the codebase

---

## Disclaimer

> The gemstone recommendations provided by this app are based on traditional Vedic astrology beliefs. They are for informational and entertainment purposes only. This app does not provide medical, financial, or professional advice. Always consult qualified professionals for important life decisions.

---

*Last updated: June 13, 2026*
