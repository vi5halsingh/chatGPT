Veda-Ai: Intelligent Chat Application
<p align="center">
<img src="./frontend/public/logo.svg" alt="Veda-Ai Banner"/>
</p>

<p align="center">
<strong>A modern, intelligent chat application powered by Google's Gemini and a persistent memory vector database.</strong>
<br /><br />
<!-- <img src="https://www.google.com/search?q=https://img.shields.io/badge/license-MIT-blue.svg" alt="License"> -->
<img src="https://www.google.com/search?q=https://img.shields.io/badge/React-20232A%3Fstyle%3Dfor-the-badge%26logo%3Dreact%26logoColor%3D61DAFB" alt="React">
<img src="https://www.google.com/search?q=https://img.shields.io/badge/Node.js-339933%3Fstyle%3Dfor-the-badge%26logo%3Dnodedotjs%26logoColor%3Dwhite" alt="Node.js">
<img src="https://www.google.com/search?q=https://img.shields.io/badge/MongoDB-4EA94B%3Fstyle%3Dfor-the-badge%26logo%3Dmongodb%26logoColor%3Dwhite" alt="MongoDB">
</p>

Veda-Ai is a full-stack, real-time chat application designed to provide intelligent, context-aware conversations. It leverages Google's Gemini for natural language processing and Pinecone's vector database to give the AI long-term memory, allowing for more coherent and meaningful interactions over time.

Screenshots
Veda auth Interface 
<img src="https://ik.imagekit.io/vi5hal/Veda/veda%20auth.png?updatedAt=1756537496077" alt="auth Interface"/>

Chat Interface 
<img src="https://ik.imagekit.io/vi5hal/Veda/veda%20formated.png?updatedAt=1756537496117" alt="Chat Interface"/>

Dashboard Interface 
<img src="https://ik.imagekit.io/vi5hal/Veda/veda%20chatscreen.png?updatedAt=1756537495937" alt="dashboard Interface"/>


✨ Features
Real-Time Chat Interface: Smooth, responsive conversations powered by Socket.IO.

AI-Powered Responses: Integrated with Google's Gemini for intelligent, human-like answers.

Persistent Memory: Uses Pinecone vector database to remember context from past conversations.

Markdown & Code Rendering: Beautifully formats AI responses, including syntax-highlighted code blocks.

User Authentication: Secure registration, login, and session management using JWT cookies.

Light & Dark Mode: A user-selectable theme toggle for personalized comfort.

Daily Message Limit: A built-in rate limit of 30 messages per user every 24 hours to ensure fair usage.

Full Chat Management: Users can create, rename, and delete their conversations.

🛠️ Tech Stack
Frontend

Backend

React & Vite

Node.js & Express

Tailwind CSS

Socket.IO for real-time communication

Socket.IO Client

MongoDB with Mongoose

React Markdown

Google Gemini API for AI generation

React Syntax Highlighter

Pinecone for vector storage and memory

Axios

JSON Web Token (JWT) for authentication

🚀 Getting Started
Follow these instructions to get a copy of the project up and running on your local machine.

Prerequisites
Node.js (v18.x or later)

MongoDB instance (local or Atlas)

API keys for Google Gemini and Pinecone.

Installation
Clone the repository:

git clone [https://github.com/vi5halsingh/Veda-Ai.git](https://github.com/vi5halsingh/Veda-Ai.git)
cd Veda-Ai
# Install dependencies
Setup the Backend:

cd backend
npm install

Create a .env file in the backend directory by copying .env.example and fill in your credentials.

# backend/.env
MONGO_URI="your_mongodb_connection_string"
JWT_SECRET="your_strong_jwt_secret"
GEMINI_API_KEY="your_google_gemini_api_key"
PINECONE_API_KEY="your_pinecone_api_key"

Setup the Frontend:

cd ../frontend
npm install

Run the Application:

Start the backend server (from the backend directory):

npm start 
# Or use nodemon for development
# nodemon server.js

Start the frontend development server (from the frontend directory):

npm run dev

The application should now be running at http://localhost:5173.

📜 License
This project is licensed under the MIT License - see the LICENSE.md file for details.

This README was generated with assistance from an AI.