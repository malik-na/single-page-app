import React, { useEffect, useState } from "react";
import { auth, db } from "../../Components/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Timeline = () => {
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = doc(db, "User", user?.uid);
      console.log(user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("user is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLogOut = async () => {
    try {
      await auth.signOut();
      console.log("User logged out successfully!");
      navigate("/");
    } catch (error) {
      console.log(error.message);
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
      {userDetails ? (
        <Paper sx={{ padding: 10 }} elevation={5}>
          <Typography variant="h3" color="initial">
            Welcome!
          </Typography>
          <div>
            <p>Email: {userDetails.email}</p>
          </div>
          <Button variant="contained" color="primary" onClick={handleLogOut}>
            Logout
          </Button>
        </Paper>
      ) : (
        <p>Loading...</p>
      )}
    </Box>
  );
};

export default Timeline;
