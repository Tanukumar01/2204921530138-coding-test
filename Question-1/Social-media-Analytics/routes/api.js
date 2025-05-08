const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

const BASE_URL = "http://20.244.56.144/evalution-service";

// Get top users with the most posts 
router.get('/users', async (req, res) => {
  try {
    const userRes = await axios.get(`${BASE_URL}/users`);
    const users = userRes.data.users;

    let userPostCounts = [];

    for (const [id, name] of Object.entries(users)) {
      const postRes = await axios.get(`${BASE_URL}/users/${id}/posts`);
      const posts = postRes.data.posts;
      const commentCount = posts.length; // Simulated as number of posts

      userPostCounts.push({ id, name, commentCount });
    }

    userPostCounts.sort((a, b) => b.commentCount - a.commentCount);

    res.json(userPostCounts.slice(0, 5)); // Top 5 users
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to fetch top users' });
  }
});

// Get posts: latest or most popular (simulated)
router.get('/posts', async (req, res) => {
  const type = req.query.type;

  if (!type || !['latest', 'popular'].includes(type)) {
    return res.status(400).json({ error: 'Query param "type" must be "latest" or "popular"' });
  }

  try {
    const userRes = await axios.get(`${BASE_URL}/users`);
    const users = userRes.data.users;

    let allPosts = [];

    for (const id of Object.keys(users)) {
      const postRes = await axios.get(`${BASE_URL}/users/${id}/posts`);
      allPosts.push(...postRes.data.posts);
    }

    if (type === 'latest') {
      allPosts.sort((a, b) => b.id - a.id);
      return res.json(allPosts.slice(0, 5));
    }

    if (type === 'popular') {
      const withComments = allPosts.map(post => ({
        ...post,
        comments: Math.floor(Math.random() * 100), // Simulated
      }));

      withComments.sort((a, b) => b.comments - a.comments);
      return res.json(withComments.slice(0, 5));
    }

  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

module.exports = router;
