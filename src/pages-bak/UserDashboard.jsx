import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context-bak/UserContext";
import { getUserInfo } from "../service-bak/UserService";

const UserDashboard = () => {
  const { updateUser, getUserById, deleteUser } = useContext(UserContext);

  const getUserId = JSON.parse(localStorage.getItem("user"));

  const id = getUserId.decodedUser.nameid;

  const [userData, setUserData] = useState({});
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    address: "",
    age: "",
  });

  const fetchUserDataByID = async (id) => {
    const getUserDetail = await getUserInfo(id);
    setUserData(getUserDetail);
    setFormData({
      userName: getUserDetail.userName,
      email: getUserDetail.email,
      password: "", // Password should be handled securely
      address: getUserDetail.address,
      age: getUserDetail.age,
    });
  };

  const fetchUpdatedUser = async () => {
    const res = await updateUser(id, formData);
    console.log(res);
  };

  useEffect(() => {
    fetchUserDataByID(id);
  }, [id]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    await fetchUpdatedUser();

    fetchUserDataByID(id);
    handleClose();
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 15 }}>
      <Box my={4} textAlign="center">
        <Avatar
          sx={{ bgcolor: "primary.main", width: 80, height: 80, mx: "auto" }}
        >
          <AccountCircleIcon sx={{ fontSize: 40 }} />
        </Avatar>
        <Typography variant="h4" component="h1" gutterBottom>
          {userData.userName
            ? `Welcome" : ${userData.userName}`
            : "User Dashboard"}
        </Typography>
      </Box>

      <Card variant="outlined" sx={{ my: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            User Details
          </Typography>

          <Box mt={2}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <strong>Username:</strong> {userData.userName}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <strong>User ID:</strong> {userData.userId}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <strong>Email:</strong> {userData.email}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <strong>Address:</strong> {userData.address}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <strong>Age:</strong> {userData.age}
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Button variant="contained" onClick={handleOpen}>
            Edit Profile
          </Button>
        </CardContent>
      </Card>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Profile</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              margin="dense"
              name="userName"
              label="Username"
              type="text"
              fullWidth
              value={formData.userName}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="email"
              label="Email"
              type="email"
              fullWidth
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="password"
              label="Password"
              type="password"
              fullWidth
              value={formData.password}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="address"
              label="Address"
              type="text"
              fullWidth
              value={formData.address}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="age"
              label="Age"
              type="number"
              fullWidth
              value={formData.age}
              onChange={handleChange}
            />
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Save
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default UserDashboard;
