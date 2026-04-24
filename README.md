📝 MERN Notes App

A simple full-stack CRUD application built with the MERN stack (MongoDB, Express, React, Node.js) that lets users create, read, update, and delete notes.
Built to demonstrate how frontend (React) interacts with a backend REST API (Express + MongoDB).

🚀 Features

✍️ Create new notes with title & content

📖 View all notes fetched from MongoDB

🛠️ Edit and update existing notes

🗑️ Delete notes instantly

⚡ Fully connected React frontend + Node.js backend

🌐 REST API built with Express and tested via Postman

🧰 Tech Stack
Layer	Technology
Frontend	  ---- React.js
Backend	    ---- Node.js, Express.js
Database	  ---- MongoDB, Mongoose
API Testing ---- Postman
Tools	      ---- Nodemon, Axios, dotenv
📁 Project Structure
mern-notes-app/
│
├── backend/
│   ├── config/
│   │   └── db.js            # MongoDB connection
│   ├── models/
│   │   └── Note.js          # Note schema
│   ├── server.js            # Express server + routes
│   └── .env                 # Environment variables
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── NoteList.js
│   │   │   └── NoteItem.js
│   │   └── App.js
│   └── package.json
│
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/<your-username>/mern-notes-app.git
cd mern-notes-app

2️⃣ Setup Backend
cd backend
npm install


Create a .env file inside the backend/ folder:

MONGO_URI=mongodb://127.0.0.1:27017/notesDB
PORT=5000


Run the backend:

npm run dev

3️⃣ Setup Frontend
cd ../frontend
npm install
npm start


Your React app will run at 👉 http://localhost:3000

and backend API runs at 👉 http://localhost:5000/api/notes

🧪 API Endpoints
Method	Endpoint	Description
GET	/api/notes	Get all notes
POST	/api/notes	Create a new note
PUT	/api/notes/:id	Update an existing note
DELETE	/api/notes/:id	Delete a note
🖼️ Screenshots (optional)

You can later add screenshots here, like:

<img width="1835" height="735" alt="Screenshot 2025-11-06 113413" src="https://github.com/user-attachments/assets/83f6a17f-8a53-4f77-996b-b1efe3a2ed39" />
<img width="1877" height="817" alt="Screenshot 2025-11-06 113541" src="https://github.com/user-attachments/assets/9d7fdd9d-97a6-4050-892f-75d72d7f822d" />
<img width="1326" height="298" alt="Screenshot 2025-11-06 113550" src="https://github.com/user-attachments/assets/fe7a2b00-2d3c-4494-be14-66e321b5b6fc" />
<img width="679" height="299" alt="Screenshot 2025-11-06 113601" src="https://github.com/user-attachments/assets/d91edc8b-2889-43e4-980a-2e340ebbba10" />




💡 Future Enhancements

Add user authentication (JWT + bcrypt)

Add search and filter features

Deploy frontend (Vercel) and backend (Render)

Dark mode UI with Tailwind

🧑‍💻 Author

SanjayHash
📧 uvsanjay31@gmail.com
