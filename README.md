# 💎 GemStone Guide — Gemstone Recommendation App

A full-stack web application that recommends the perfect gemstone based on **Vedic Astrology**. Users enter their name, zodiac sign, life goal, and budget — and the app returns personalized gemstone recommendations.

![Tech Stack](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

---

## ✨ Features

- 🔮 **Personalized Recommendations** — Get gemstone suggestions based on your zodiac sign, goals, and budget
- 💎 **9 Navaratna Gemstones** — Complete data for all 9 sacred Vedic gemstones
- 🎯 **Smart Matching** — Scoring algorithm considers zodiac compatibility, goal alignment, and budget fit
- 🏆 **Dual Recommendations** — Receive a *Best Match* (within budget) and a *Premium Pick* (upgrade option)
- 🌙 **Beautiful Dark UI** — Modern glassmorphism design with gold & purple accents
- 📱 **Fully Responsive** — Works seamlessly on desktop, tablet, and mobile

---

## 🧱 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React, Vite, Axios |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose ODM) |
| **Styling** | Vanilla CSS (Glassmorphism, Animations) |

---

## 📁 Project Structure

```
gemstone-recommendation/
│
├── backend/
│   ├── controllers/
│   │   └── gemstoneController.js   # Recommendation logic & API handlers
│   ├── models/
│   │   └── Gemstone.js             # Mongoose schema
│   ├── routes/
│   │   └── gemstoneRoutes.js       # API route definitions
│   ├── seed/
│   │   ├── seedData.js             # 9 Navaratna gemstones data
│   │   └── seed.js                 # Database seeding script
│   ├── server.js                   # Express server entry point
│   ├── .env                        # Environment variables
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   └── gemstones/              # Gemstone images
│   ├── src/
│   │   ├── components/
│   │   │   ├── GemstoneForm.jsx    # User input form
│   │   │   ├── GemstoneCard.jsx    # Gemstone display card
│   │   │   └── ResultsSection.jsx  # Results layout
│   │   ├── App.jsx                 # Main app component
│   │   ├── main.jsx                # React entry point
│   │   └── index.css               # Complete design system
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **MongoDB** (local or [MongoDB Atlas](https://www.mongodb.com/atlas) account)
- **npm** (comes with Node.js)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/gemstone-recommendation.git
cd gemstone-recommendation
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string_here
```

> 💡 Replace `your_mongodb_connection_string_here` with your MongoDB URI.  
> Example: `mongodb+srv://username:password@cluster.mongodb.net/gemstone-app`

### 3. Seed the Database

```bash
npm run seed
```

You should see:
```
✅ Connected to MongoDB
💎 Seeded 9 gemstones successfully!
```

### 4. Start the Backend Server

```bash
npm run dev
```

Server will run on `http://localhost:5000`

### 5. Setup & Start Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on `http://localhost:5173`

---

## 🔌 API Endpoints

| Method | Endpoint | Description | Body |
|--------|----------|-------------|------|
| `GET` | `/api/gemstones` | Get all gemstones | — |
| `POST` | `/api/recommend` | Get recommendations | `{ name, zodiac, goal, budget }` |

### Example Request

```bash
curl -X POST http://localhost:5000/api/recommend \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Rahul",
    "zodiac": "Leo",
    "goal": "career",
    "budget": 30000
  }'
```

### Example Response

```json
{
  "success": true,
  "data": {
    "userName": "Rahul",
    "primaryMatch": {
      "name": "Ruby",
      "hindiName": "Manik",
      "planet": "Sun (Surya)",
      "zodiacs": ["Leo", "Aries"],
      "goals": ["career", "wealth", "health", "wisdom"],
      "priceRange": { "min": 5000, "max": 50000 },
      "color": "#E0115F",
      "description": "Ruby, the king of gemstones...",
      "benefits": "Enhances self-confidence..."
    },
    "premiumPick": { ... }
  }
}
```

---

## 💎 Gemstones Database

The app includes data for the **9 Navaratna** (sacred Vedic gemstones):

| # | Gemstone | Hindi Name | Planet | Associated Zodiacs | Price Range (₹) |
|---|----------|-----------|--------|-------------------|-----------------|
| 1 | Ruby | Manik | Sun | Leo, Aries | 5K – 50K |
| 2 | Pearl | Moti | Moon | Cancer | 2K – 25K |
| 3 | Red Coral | Moonga | Mars | Aries, Scorpio | 3K – 30K |
| 4 | Emerald | Panna | Mercury | Gemini, Virgo | 8K – 80K |
| 5 | Yellow Sapphire | Pukhraj | Jupiter | Sagittarius, Pisces | 10K – 1L |
| 6 | Diamond | Heera | Venus | Taurus, Libra | 25K – 5L |
| 7 | Blue Sapphire | Neelam | Saturn | Capricorn, Aquarius | 15K – 2L |
| 8 | Hessonite | Gomed | Rahu | Aquarius, Gemini | 3K – 25K |
| 9 | Cat's Eye | Lehsunia | Ketu | Scorpio, Pisces | 4K – 35K |

---

## 🧠 How the Recommendation Works

Each gemstone is scored based on the user's input:

| Factor | Points | Logic |
|--------|--------|-------|
| **Zodiac Match** | +10 | User's zodiac is in gemstone's associated zodiacs |
| **Goal Match** | +5 to +1 | Higher score if the goal is a primary benefit of the gemstone |
| **Budget Fit** | +3 | Gemstone's minimum price is within user's budget |
| **Full Budget Fit** | +2 | Gemstone's maximum price is also within budget |

**Result:**
- **✨ Best Match** → Highest scoring gemstone within the user's budget
- **💎 Premium Pick** → Second highest scoring gemstone (upgrade/alternative option)

---

## 🎨 UI Design

- **Theme**: Dark mode with gold (#D4AF37) and purple (#9B5DE5) accents
- **Style**: Glassmorphism cards with backdrop blur
- **Font**: [Outfit](https://fonts.google.com/specimen/Outfit) (Google Fonts)
- **Animations**: Floating background orbs, fade-in transitions, hover effects
- **Responsive**: Mobile-first design with CSS Grid

---

## 📜 Available Scripts

### Backend (`/backend`)

| Script | Command | Description |
|--------|---------|-------------|
| Dev Server | `npm run dev` | Start with nodemon (auto-reload) |
| Production | `npm start` | Start without auto-reload |
| Seed DB | `npm run seed` | Populate database with gemstone data |

### Frontend (`/frontend`)

| Script | Command | Description |
|--------|---------|-------------|
| Dev Server | `npm run dev` | Start Vite dev server |
| Build | `npm run build` | Create production build |
| Preview | `npm run preview` | Preview production build |

## 🚀 Future Improvements

### Phase 1 — Enhanced Features
- [ ] 🔐 **User Authentication** — Sign up / Login with JWT so users can save their recommendations
- [ ] 📜 **Recommendation History** — Store past recommendations per user
- [ ] 🖼️ **Gemstone Gallery** — Browse all 9 gemstones with detailed individual pages
- [ ] 🌐 **Multi-language Support** — Hindi and English toggle
- [ ] 📊 **Admin Dashboard** — Add, edit, or delete gemstones from a dashboard UI

### Phase 2 — Smarter Recommendations
- [ ] 🤖 **AI-Powered Matching** — Integrate an LLM (Gemini/OpenAI) for more personalized, conversational recommendations
- [ ] 📅 **Birth Date Analysis** — Use exact birth date + time for more accurate Kundli-based suggestions
- [ ] 🔄 **Combination Stones** — Suggest gemstone combinations (e.g., Ruby + Yellow Sapphire)
- [ ] ⚠️ **Incompatibility Warnings** — Alert users about gemstones that conflict with their zodiac
- [ ] 📈 **Confidence Score** — Show a percentage match score for each recommendation

### Phase 3 — E-Commerce & Monetization
- [ ] 🛒 **Buy Gemstones** — Integrate with gemstone sellers / affiliate links
- [ ] 💳 **Payment Gateway** — Razorpay / Stripe integration for direct purchases
- [ ] 🏪 **Vendor Listings** — Partner with certified gemstone dealers
- [ ] ⭐ **Reviews & Ratings** — Let users rate their gemstone experience

### Phase 4 — Technical Improvements
- [ ] 🧪 **Unit & Integration Tests** — Jest for backend, React Testing Library for frontend
- [ ] 🐳 **Docker Setup** — Containerize backend + frontend for easy deployment
- [ ] ☁️ **Deploy to Cloud** — Vercel (frontend) + Render/Railway (backend)
- [ ] 📱 **PWA Support** — Make it installable as a mobile app
- [ ] ⚡ **Caching** — Redis caching for frequent zodiac-goal queries
- [ ] 📧 **Email Recommendations** — Send results to user's email with Nodemailer

### Phase 5 — Content & Engagement
- [ ] 📝 **Blog Section** — Articles about gemstones, astrology, and their significance
- [ ] 💬 **Live Chat / Consultation** — Connect users with astrology experts
- [ ] 📲 **Share Results** — Share gemstone recommendations on social media
- [ ] 🔔 **Push Notifications** — Notify users about gemstone-related auspicious days

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 🤖 AI Usage

This project was built with AI assistance. See [AI_USAGE.md](AI_USAGE.md) for a full transparency report on how AI tools were used during development.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ and 💎</p>

