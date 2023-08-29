import { useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";

const UserProfile: React.FC = () => {
  const [isLogOutClicked, setIsLogOutClicked] = useState<boolean>(false);

  const logOutHandler = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("accToken");
    localStorage.removeItem("refreshToken");

    setIsLogOutClicked(true);
    window.location.href = "/login";
  };

  return (
    <>
      {!isLogOutClicked ? (
        <Card sx={{ mb: 1 }}>
          <CardContent>
            <Typography></Typography>
            <Typography></Typography>
          </CardContent>
          <CardActions>
            <Button onClick={logOutHandler}>Logout</Button>
          </CardActions>
        </Card>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default UserProfile;
