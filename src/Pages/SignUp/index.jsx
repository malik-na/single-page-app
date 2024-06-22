import { Box, Button, Paper, Stack, TextField } from "@mui/material";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../../Components/firebase";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);

      toast.success("User registered successfully!", {
        position: "top-center",
      });
      if (user) {
        await setDoc(doc(db, "User", user.uid), {
          email: user.email,
          username: username,
          password: password,
        });
      }
    } catch (error) {
      console.log(error.message);
      toast.error("User registeration failed!", {
        position: "top-center",
      });
    }
  };
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
        <form onSubmit={handleRegister}>
          <Stack sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            <TextField
              id="email"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              className="username"
              label="Username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
            <TextField
              className="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary">
              Signup
            </Button>
          </Stack>
        </form>
        <p>
          Have an account? <Link to="/">Login</Link>
        </p>
      </Paper>
    </Box>
  );
};

export default Signup;
