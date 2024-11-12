import { Add } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import React from 'react'

const UserManagment = () => {
return (
  <Box>
    <Typography variant="h6">User List</Typography>
    <Button variant="contained" startIcon={<Add />} sx={{ mb: 2 }}>
      Add User
    </Button>
    {/* Table or Grid with Users */}
    {/* Each row will have Edit and Delete buttons */}
  </Box>
);
}

export default UserManagment

