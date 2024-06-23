import { Box, Stack, TextField, Typography, Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { BlogContext } from "../../context/BlogContext";

const Create = () => {
  const { blogs, setBlogs, blogContent, setBlogContent } =
    useContext(BlogContext);
  const handleInput = (e, key) => {
    setBlogContent({ ...blogContent, [key]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setBlogs([
      ...blogs,
      {
        ...blogContent,
        id: Date.now(),
        isLiked: false,
        comments: [],
      },
    ]);
    setBlogContent({ title: "", description: "" });
  };
  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "3rem",
        gap: 5,
        height: "100svh",
      }}
    >
      <Typography variant="h3" color="initial">
        What&apos;s on your mind?
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <TextField
            id="blog-title"
            label="Title"
            multiline
            minRows={2}
            value={blogContent?.title}
            onChange={(e) => handleInput(e, "title")}
          />
          <TextField
            id="blog-description"
            label="Content"
            multiline
            minRows={5}
            value={blogContent?.description}
            onChange={(e) => handleInput(e, "description")}
          />
          <Button type="submit" variant="contained" color="primary">
            Post
          </Button>
        </Stack>
      </form>
      {blogs.map((blog, index) => {
        return <div key={index}>{blog.title}</div>;
      })}
    </Box>
  );
};

export default Create;
