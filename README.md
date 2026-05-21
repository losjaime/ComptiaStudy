# CompTIA A+ Study Site

A personal study tool for the CompTIA A+ certification exams — Core 1 (220-1201) and Core 2 (220-1202).

Built with plain HTML, CSS, and JavaScript. No frameworks, no build tools, no server required. Just open `index.html` in a browser.

---

## Features

- **Flashcards** — 223 cards across both exams with spaced repetition (Again / Hard / Good / Easy). Cards are scheduled based on how well you know them.
- **Practice Quiz** — 80 multiple choice questions with explanations and per-domain score breakdown.
- **Reference Sheets** — Quick tables for ports, Wi-Fi standards, USB speeds, RAID levels, OSI model, Windows commands, file systems, security protocols, and more.
- **Acronym Glossary** — ~90 CompTIA A+ acronyms, searchable and sorted A–Z.
- **Exam Readiness Score** — Domain-weighted score (0–100%) based on your flashcard progress.
- **Daily Streak** — Tracks how many days in a row you've studied.
- **All progress saved locally** — Uses `localStorage`, nothing is sent anywhere.

---

## Exams Covered

| Exam | Code | Pass Score | Time |
|------|------|------------|------|
| Core 1 | 220-1201 | 675 / 900 | 90 min |
| Core 2 | 220-1202 | 700 / 900 | 90 min |

> Content targets the current V15 versions. The old 220-1101 / 220-1102 exams retired September 2025.

---

## How to Run

1. Clone or download the repo
2. Open `index.html` in any modern browser
3. No install, no server, no dependencies

---

## File Structure

```
comptia-study/
├── index.html          # Dashboard
├── flashcards.html     # Flashcard study
├── quiz.html           # Practice quiz
├── reference.html      # Reference sheets
├── glossary.html       # Acronym glossary
├── style.css           # All styles
├── app.js              # Shared logic (localStorage, streak, stats)
├── flashcards.js       # Flashcard engine
├── quiz.js             # Quiz engine
├── reference-data.js   # Reference sheet content
├── glossary-data.js    # Acronym data
└── data/
    ├── core1.js        # Core 1 flashcard content
    ├── core2.js        # Core 2 flashcard content
    ├── quiz-core1.js   # Core 1 quiz questions
    └── quiz-core2.js   # Core 2 quiz questions
```

---

## Tech Stack

- HTML5
- CSS3 (custom properties, flexbox, grid, card flip animation)
- Vanilla JavaScript (ES6+)
- `localStorage` for persistence

---

## License

MIT
