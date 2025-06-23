const express = require('express');
const cors = require('cors');
const posts = require('./data/posts');

const app = express();
const PORT = process.env.PORT || 3000;

// CORS configuration - More permissive for deployment
const corsOptions = {
  origin: [
    'https://social-api-peach.vercel.app',
    'https://social-api-sm1s.onrender.com',
    'http://localhost:3000',
    'http://localhost:5500',
    'http://127.0.0.1:5500',
    'http://localhost:8080'
  ],
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
};

// Middleware
app.use(cors(corsOptions));

// Additional CORS headers for all responses
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://social-api-peach.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/img', express.static('public/img'));

// In-memory data storage (simulating database)
let feedIndex = 0;
let currentPosts = [...posts];

// Helper function to get next post based on algorithm
function getNextPost() {
  // Simulate following users (for demo, we'll follow first 5 users)
  const followingUsers = ['Alice Johnson', 'Sarah Chen', 'Cooking Master', 'Book Lover', 'Fitness Enthusiast'];
  
  // Get posts from followed users
  const followedPosts = currentPosts.filter(post => followingUsers.includes(post.personage));
  
  // Get trending, urgent, and unpopular posts
  const trendingPosts = currentPosts.filter(post => post.type === 'trending');
  const urgentPosts = currentPosts.filter(post => post.urgent === true);
  const unpopularPosts = currentPosts.filter(post => post.type === 'unpopular');
  
  // Algorithm: Mix followed posts with trending/urgent/unpopular posts
  let nextPost;
  
  if (feedIndex % 3 === 0 && trendingPosts.length > 0) {
    // Every 3rd post is trending
    const randomIndex = Math.floor(Math.random() * trendingPosts.length);
    nextPost = trendingPosts[randomIndex];
  } else if (feedIndex % 5 === 0 && urgentPosts.length > 0) {
    // Every 5th post is urgent
    const randomIndex = Math.floor(Math.random() * urgentPosts.length);
    nextPost = urgentPosts[randomIndex];
  } else if (feedIndex % 7 === 0 && unpopularPosts.length > 0) {
    // Every 7th post is unpopular
    const randomIndex = Math.floor(Math.random() * unpopularPosts.length);
    nextPost = unpopularPosts[randomIndex];
  } else if (followedPosts.length > 0) {
    // Otherwise, show posts from followed users
    const randomIndex = Math.floor(Math.random() * followedPosts.length);
    nextPost = followedPosts[randomIndex];
  } else {
    // Fallback to any random post
    const randomIndex = Math.floor(Math.random() * currentPosts.length);
    nextPost = currentPosts[randomIndex];
  }
  
  feedIndex++;
  return nextPost;
}

// Routes

// GET /feed - Return one post at a time
app.get('/feed', (req, res) => {
  try {
    const post = getNextPost();
    res.json({
      success: true,
      data: post,
      message: 'Post retrieved successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving post',
      error: error.message
    });
  }
});

// POST /like/:postId - Increment likes
app.post('/like/:postId', (req, res) => {
  try {
    const postId = parseInt(req.params.postId);
    const post = currentPosts.find(p => p.id === postId);
    
    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }
    
    post.likes += 1;
    
    res.json({
      success: true,
      data: {
        postId: post.id,
        likes: post.likes
      },
      message: 'Post liked successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error liking post',
      error: error.message
    });
  }
});

// POST /comment/:postId - Add comment
app.post('/comment/:postId', (req, res) => {
  try {
    const postId = parseInt(req.params.postId);
    const { user, text } = req.body;
    
    if (!user || !text) {
      return res.status(400).json({
        success: false,
        message: 'User and text are required'
      });
    }
    
    const post = currentPosts.find(p => p.id === postId);
    
    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }
    
    const newComment = {
      id: Date.now(), // Simple ID generation
      user: user,
      text: text,
      timestamp: new Date().toISOString()
    };
    
    post.comments.push(newComment);
    
    res.json({
      success: true,
      data: newComment,
      message: 'Comment added successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error adding comment',
      error: error.message
    });
  }
});

// GET /posts - Get all posts (for debugging/testing)
app.get('/posts', (req, res) => {
  try {
    res.json({
      success: true,
      data: currentPosts,
      count: currentPosts.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving posts',
      error: error.message
    });
  }
});

// GET /posts/:id - Get specific post
app.get('/posts/:id', (req, res) => {
  try {
    const postId = parseInt(req.params.id);
    const post = currentPosts.find(p => p.id === postId);
    
    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }
    
    res.json({
      success: true,
      data: post
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving post',
      error: error.message
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'Social Media Feed API is running',
    timestamp: new Date().toISOString(),
    totalPosts: currentPosts.length
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: err.message
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Social Media Feed API running on port ${PORT}`);
  console.log(`📱 Feed endpoint: http://localhost:${PORT}/feed`);
  console.log(`❤️  Like endpoint: http://localhost:${PORT}/like/:postId`);
  console.log(`💬 Comment endpoint: http://localhost:${PORT}/comment/:postId`);
  console.log(`🏥 Health check: http://localhost:${PORT}/health`);
  console.log(`\n💡 The feed will show a new post every 15 seconds when called!`);
});

module.exports = app; 