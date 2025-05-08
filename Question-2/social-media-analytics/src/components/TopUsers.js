import React, { useEffect, useState } from 'react';
import { getTopUsers } from '../api/api';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';

const TopUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getTopUsers().then((res) => setUsers(res.data));
  }, []);

  return (
    <Box p={2}>
      {users.map((user, index) => (
        <Card key={index} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Avatar src={`https://i.pravatar.cc/150?img=${index + 1}`} />
            <Typography variant="h6">{user.name}</Typography>
            <Typography color="text.secondary">Posts: {user.postCount}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default TopUsers;