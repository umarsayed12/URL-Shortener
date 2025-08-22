Here’s a clean **README.md** tailored for your project **zyp.io** (URL shortener with authentication, analytics, and JWT-based login).

---

```markdown
# zyp.io 🚀

zyp.io is a simple and powerful **URL Shortener** with authentication, analytics, and JWT-based session management.  
Built using **Node.js, Express, MongoDB, and EJS**.

---

## ✨ Features

- 🔗 Shorten long URLs into shareable links
- 👤 User authentication (Signup/Login with JWT & cookies)
- 📊 Click analytics (track visits for each short URL)
- 🔒 Secure routes with JWT authentication middleware
- 🎨 Clean UI with EJS templates

---

## 📂 Project Structure
```

zyp.io/
│── controllers/ # Handles business logic
│ ├── url.js
│ └── user.js
│
│── middlewares/ # Auth middlewares
│ └── auth.js
│
│── models/ # Mongoose schemas
│ ├── url.js
│ └── user.js
│
│── routes/ # Express route definitions
│ ├── staticRoute.js
│ ├── url.js
│ └── user.js
│
│── service/ # Auth services (JWT, hashing)
│ └── auth.js
│
│── views/ # EJS templates
│ ├── analytics.ejs
│ ├── home.ejs
│ ├── login.ejs
│ └── signup.ejs
│
│── database.js # MongoDB connection
│── index.js # Entry point
│── .env # Environment variables
│── package.json

````

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/zyp.io.git
cd zyp.io
````

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run the project

```bash
npm start
```

By default, the server runs at:
👉 [http://localhost:5000](http://localhost:5000)

---

## 🚀 Deployment

You can deploy **zyp.io** on:

- [Render](https://render.com/)
- [Railway](https://railway.app/)
- [Heroku](https://www.heroku.com/) (if you still have access)
- Any VPS (AWS, DigitalOcean, etc.) using **PM2 + Nginx**

---

## 🔮 Future Enhancements

- Custom short URLs (vanity links)
- QR code generation for each shortened URL
- Role-based admin dashboard
- Expiration time for URLs

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Auth:** JWT + Cookies
- **Frontend:** EJS Templates, CSS
- **Deployment:** Render

---

## 🤝 Contributing

Pull requests are welcome! If you'd like to contribute, please fork the repo and submit a PR.

---

### 🌐 Project Name: **zyp.io**

A minimal, secure, and scalable URL shortener.

```

---
```
