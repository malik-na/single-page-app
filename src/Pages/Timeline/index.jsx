import { useContext } from "react";
import { BlogContext } from "../../context/BlogContext";
import { Box, Paper, Stack, Typography } from "@mui/material";

const Timeline = () => {
  const { blogs } = useContext(BlogContext);
  return (
    <Box>
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
            </Stack>
          </Paper>
        );
      })}
    </Box>
  );
};

export default Timeline;
