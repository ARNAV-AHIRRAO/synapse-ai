# 🧠 SynapseAI – AI Employee Copilot

SynapseAI is an AI-powered employee productivity assistant that combines task management with intelligent workday planning.

Instead of simply storing tasks, SynapseAI uses Google's Gemini AI to generate an optimized daily schedule based on the user's workload, priorities, and deadlines.

---

## 🚀 Problem Statement

Employees often struggle with:

- Managing multiple tasks simultaneously
- Prioritizing important work
- Planning an efficient workday
- Balancing meetings with focused work
- Reducing decision fatigue

Traditional task managers only store tasks—they don't help employees decide what to do next.

SynapseAI solves this problem using Artificial Intelligence.

---

## 💡 Solution

SynapseAI acts as an intelligent workplace assistant by allowing users to:

- Create and manage daily tasks
- Assign task priorities
- Track completed and pending work
- View productivity statistics
- Generate an AI-powered work schedule using Google Gemini

Instead of manually organizing the day, employees simply describe their workload and receive an optimized plan within seconds.

---

## ✨ Features

### 📋 Smart Task Management

- Create tasks
- Delete tasks
- Mark tasks as completed
- Priority levels (High, Medium, Low)

---

### 🤖 AI Employee Copilot

Generate an optimized workday plan using natural language.

Example prompt:

Plan my workday.

Tasks:
- Finish proposal
- Reply to emails
- Client meeting at 3 PM
- Review pull requests

---

### 📊 Dashboard

- Productivity Score
- Total Tasks
- Pending Tasks
- Completed Tasks
- Recent Tasks

---

## 🛠 Tech Stack

### Frontend

- React.js
- Vite
- Axios
- CSS

### Backend

- FastAPI
- SQLAlchemy
- SQLite
- Python

### AI

- Google Gemini API

### Deployment

Frontend:
- Vercel

Backend:
- Railway

---

## 🏗 Project Structure

synapse-ai/

├── backend/

│ ├── app/

│ ├── routes/

│ ├── models/

│ ├── database.py

│ └── main.py

│

├── client/

│ ├── src/

│ ├── components/

│ ├── pages/

│ └── services/

│

└── README.md

---

## ⚙ Installation

### Clone Repository

```bash
git clone https://github.com/ARNAV-AHIRRAO/synapse-ai.git

cd synapse-ai
```

Backend

```bash
cd backend

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Frontend

```bash
cd client

npm install

npm run dev
```

---

## 🌐 Live Demo

Frontend

https://synapse-ai-mauve.vercel.app

Backend API

synapse-ai-production-f9ef.up.railway.app

---

## 🔮 Future Scope

- User Authentication
- Calendar Integration
- Email Integration
- Team Collaboration
- Smart Notifications
- AI Task Prioritization
- Voice Assistant
- Mobile Application
- Analytics Dashboard

---

## 👨‍💻 Team

Team Name: **Team Pheonix**

Hackathon:
**TakeOver'26**

---

## 📄 License

This project was developed for the TakeOver'26 Hackathon.
