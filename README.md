# 🌐 URL Shortener Backend

This project is a backend service that converts long URLs or website domains into short, shareable links. When a user clicks the short URL, they are automatically redirected to the original long URL.

---

## 🚀 Features

- 🔗 Automatically generates short URLs using `nanoid`
- 🧠 Stores all URLs in MongoDB for persistence
- 🔁 Redirects users to the original URL upon access
- 🌍 Simple frontend with HTML, CSS, and JavaScript
- 🔐 Environment variables managed securely via `.env`

---

## 🛠️ Tech Stack Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- nanoid
- dotenv
- HTML, CSS, JavaScript

---

## 📦 Local Setup Instructions

Follow these steps to run the project locally on your machine:

```bash
# Step 1: Clone the repository
git clone https://github.com/Ayushpal2001/url-shortener-backend.git

# Step 2: Go into the project folder
cd url-shortener-backend

# Step 3: Install dependencies
npm install

# Step 4: Create a .env file and add the following:
PORT=3000
MONGO_URI=mongodb://localhost:27017/urlshortener
BASE_URL=http://localhost:3000

# Step 5: Start the server
npm start
```

Server will start on: `http://localhost:3000`

---

## 📁 Project Structure

```
url-shortener-backend/
│
├── config/            # MongoDB connection
├── controllers/       # URL logic and handlers
├── models/            # Mongoose schema
├── routes/            # API routes
├── public/            # Static HTML/CSS/JS
├── .gitignore
├── .env               # (Not committed to GitHub)
├── package.json
└── server.js
```

---

## 🧑 Author

**Ayush Pal**  
🔗 GitHub: [https://github.com/Ayushpal2001](https://github.com/Ayushpal2001)

---

## 📃 License

This project is licensed under the MIT License.