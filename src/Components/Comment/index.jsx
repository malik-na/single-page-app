import { useContext, useState } from "react";
import { BlogContext } from "../../context/BlogContext";
import { Box, Stack, TextField, Button, Paper } from "@mui/material";

const Comment = () => {
  const { blogContent, setBlogContent } = useContext(BlogContext);
  const [commentInput, setCommentInput] = useState("");
  console.log("comment blog content", blogContent);

  const handleInput = (e) => {
    setCommentInput(e.target.value);
  };

  const newCommentId = Date.now();

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setBlogContent({
      ...blogContent,
      comments: [
        ...blogContent.comments,
        {
          commentId: Date.now(),
          comment: commentInput,
          commentReplies: [],
        },
      ],
    });
    setCommentInput("");
  };

  const handleReplyToggle = () => {};

  return (
    <Box
      sx={{
        margin: 10,
      }}
    >
      <form onSubmit={handleCommentSubmit}>
        <Stack sx={{ display: "flex", gap: 5 }}>
          <TextField
            id="comment"
            label="Comment"
            multiline
            minRows={5}
            fullWidth
            value={commentInput}
            // value={comment.mainComment}
            onChange={(e) => handleInput(e)}
          />
          <Button variant="contained" color="primary" type="submit">
            Post Comment
          </Button>
        </Stack>
      </form>
      {blogContent?.comments?.map((c, index) => (
        <Paper elevation={5} key={index} sx={{ margin: 5, padding: 3 }}>
          {c?.comment}
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleReplyToggle(c?.id)}
          >
            Reply
          </Button>
        </Paper>
      ))}
    </Box>
  );
};

export default Comment;
