import { Box, Paper, Stack, TextField, Button } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../Components/firebase";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("success");
      navigate("/app/timeline");
      toast.success("User Logged in successfully!", {
        position: "top-center",
      });
    } catch (error) {
      console.log("failed");

      toast.error("User Login failed!", {
        position: "top-center",
      });
    }
  }
  return (
    <Box
      sx={{
        display: "flex",
        height: "60svh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper sx={{ padding: 10 }} elevation={5}>
        <form onSubmit={handleSubmit}>
          <Stack sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            <TextField
              className="email"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              className="password"
              label="Password"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" color="primary" type="submit">
              Login
            </Button>
          </Stack>
        </form>
        <p>
          Not registered? <Link to="signup">Signup</Link>
        </p>
      </Paper>
    </Box>
  );
};

export default Login;
