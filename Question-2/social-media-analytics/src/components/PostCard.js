import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';

const PostCard = ({ post }) => (
  <Card sx={{ marginBottom: 2 }}>
    <CardContent>
      <Box display="flex" alignItems="center" gap={2}>
        <Avatar src={`https://source.unsplash.com/random/50x50?sig=${post.id}`} />
        <Box>
          <Typography variant="body1">{post.content}</Typography>
          <Typography variant="caption">Comments: {post.comments.length}</Typography>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

export default PostCard;