import React, { useEffect, useState } from 'react';
import { getTrendingPosts } from '../api/api';
import PostCard from './PostCard';
import { Box } from '@mui/material';

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getTrendingPosts().then((res) => setPosts(res.data));
  }, []);

  return (
    <Box p={2}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Box>
  );
};
export default TrendingPosts;