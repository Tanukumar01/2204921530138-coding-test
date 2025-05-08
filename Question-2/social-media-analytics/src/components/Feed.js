import React, { useEffect, useState } from 'react';
import { getFeedPosts } from '../api/api';
import PostCard from './PostCard';
import { Box } from '@mui/material';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = () => {
      getFeedPosts().then((res) => setPosts(res.data));
    };
    fetchPosts();
    const interval = setInterval(fetchPosts, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box p={2}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Box>
  );
};

export default Feed;