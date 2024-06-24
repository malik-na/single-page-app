import { Box, Stack, TextField, Typography, Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { BlogContext } from "../../context/BlogContext";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../Components/firebase";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const { blogs, setBlogs, blogContent, setBlogContent } =
    useContext(BlogContext);

  const handleInput = (e, key) => {
    setBlogContent({ ...blogContent, [key]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogId = Date.now().toString();
    const updatedBlogs = [
      ...blogs,
      {
        ...blogContent,
        id: blogId,
        isLiked: false,
        comments: [],
      },
    ];
    setBlogs(updatedBlogs);
    const user = auth.currentUser;
    await setDoc(doc(db, "Blogs", blogId), {
      id: blogId,
      title: blogContent.title,
      description: blogContent.description,
      isLiked: false,
      comments: [],
      userId: user.uid,
    });
    setBlogContent({ title: "", description: "" });
    navigate("/app/timeline");
  };

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
