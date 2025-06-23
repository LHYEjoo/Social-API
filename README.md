# Social Media Feed API

A Node.js + Express API for a social media feed where users can view, like, and comment on posts.

---

## 🚀 Features

- **Feed System:** Shows a new post every 15 seconds via `GET /feed`
- **Smart Algorithm:** Mixes posts from followed users with trending, urgent, and unpopular posts
- **Like Functionality:** Users can like posts
- **Comment System:** Users can add comments to posts
- **In-Memory Data:** Easy to extend to MongoDB
- **Dummy Data:** Handwritten posts in `data/posts.js`

---

## 📦 Project Structure

```
Social-API/
├── server.js          # Main server with all endpoints
├── data/
│   └── posts.js       # Dummy data (easy to edit)
├── package.json       # Dependencies and scripts
└── README.md          # This documentation
```

---

## 📖 Table of Contents

- [Features](#-features)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Endpoints](#-api-endpoints)
- [Feed Algorithm](#-feed-algorithm)
- [Customizing Dummy Data](#-customizing-dummy-data)
- [Contributing](#-contributing)
- [License](#-license)
- [FAQ / Troubleshooting](#faq--troubleshooting)
- [Changelog](#changelog)

---

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Start the server
npm start

# For development (with nodemon)
npm run dev
```

---

## 🚦 Usage

After starting the server, the API will be available at your configured port (default: 3000).

You can also use the included `index.html` as a test client, or connect your own frontend.

---

## 📡 API Endpoints

### `GET /feed`
Returns one post at a time (based on the algorithm).

### `POST /like/:postId`
Increase the number of likes for a post.

### `POST /comment/:postId`
Add a comment to a post.

### `GET /posts`
Returns all posts (for debugging).

### `GET /posts/:id`
Returns a specific post.

### `GET /health`
Health check endpoint.

**Example usage:**
```bash
curl https://social-api-sm1s.onrender.com/feed
curl -X POST https://social-api-sm1s.onrender.com/like/1
curl -X POST https://social-api-sm1s.onrender.com/comment/1 -H "Content-Type: application/json" -d '{"user": "John Doe", "text": "Great post!"}'
curl https://social-api-sm1s.onrender.com/posts
curl https://social-api-sm1s.onrender.com/posts/1
curl https://social-api-sm1s.onrender.com/health
```

---

## 🧠 Feed Algorithm

- **Every 3rd post:** Trending post
- **Every 5th post:** Urgent post
- **Every 7th post:** Unpopular post
- **Other posts:** From followed users

Followed users (demo):
- Alice Johnson
- Sarah Chen
- Cooking Master
- Book Lover
- Fitness Enthusiast

---

## 📝 Customizing Dummy Data

You can easily edit the posts by modifying `data/posts.js`:

```js
const posts = [
  {
    id: 1,
    personage: "Your Name",
    content: "Your message here!",
    image: "https://your-image-url.com",
    video: null,
    likes: 0,
    comments: [],
    urgent: false,
    timestamp: "2024-01-15T09:45:00Z",
    type: "normal"
  }
  // Add more posts...
];
```

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

## 📝 License

This project is licensed under the ISC License.

---

## ❓ FAQ / Troubleshooting

- **Q:** I get a 404 for `/favicon.ico`  
  **A:** This is normal if you haven't added a favicon. You can ignore this warning.

- **Q:** The frontend tries to connect to `localhost:3000`  
  **A:** Make sure you have updated the `API_BASE` in `index.html` to your deployed backend URL and hard-refresh your browser.

- **Q:** How do I deploy this project?  
  **A:** You can deploy the backend to Render, Vercel, or any Node.js hosting provider. The frontend (`index.html`) can be deployed to Vercel or Netlify as a static site.

---