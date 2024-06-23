import { useContext } from "react";
import { BlogContext } from "../../context/BlogContext";
import { Box, Paper, Stack, Typography, IconButton } from "@mui/material";
import { Comment, Favorite, Share } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const BlogPost = () => {
  const { blogs, setBlogs, setBlogContent } = useContext(BlogContext);
  const handleLike = (blogId) => {
    const likedBlogs = blogs.map((blog) => {
      return blog.id === blogId ? { ...blog, isLiked: !blog.isLiked } : blog;
    });
    setBlogs(likedBlogs);
  };
  const navigate = useNavigate();
  const handleComment = (blog) => {
    setBlogContent(blog);
    navigate(`/app/blog-detail/${blog?.id}`);
  };
  const handleShare = () => {};

  return (
    <div>
      {blogs.map((blog, index) => {
        return (
          <Paper key={index} elevation={5} sx={{ margin: 5, padding: 4 }}>
            <Stack>
              <Typography variant="h4" color="initial">
                {blog?.title}
              </Typography>
              <Typography variant="text" color="initial">
                {blog?.description}
              </Typography>
              <div>
                <IconButton
                  aria-label="like-button"
                  onClick={() => handleLike(blog?.id)}
                >
                  <Favorite sx={{ color: blog.isLiked ? "red" : "grey" }} />
                </IconButton>
                <IconButton
                  aria-label="comment-button"
                  onClick={() => handleComment(blog)}
                >
                  <Comment />
                </IconButton>
                <IconButton aria-label="share-button" onClick={handleShare}>
                  <Share />
                </IconButton>
              </div>
            </Stack>
          </Paper>
        );
      })}
    </div>
  );
};

export default BlogPost;
