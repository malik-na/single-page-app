import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { auth, db } from "../../Components/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);

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
        </Paper>
      ) : (
        <p>Loading...</p>
      )}
    </Box>
  );
};

export default Profile;
