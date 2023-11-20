import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const LoginModal = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://655a610a6981238d054d6fcd.mockapi.io/register', {
        email,
        password,
      });

      if (response.status === 200) {
        console.log('Login successful!');
        handleClose();
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Login
          </Typography>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            sx={{ mb: 2, mt: 2, width: '100%' }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            sx={{ mb: 2, width: '100%' }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <input id='rememberMe' type='checkbox' />
            <label htmlFor='rememberMe'>Remember me</label>
          </div>
          <Button variant="contained" sx={{ mt: 2 }} onClick={handleLogin}>
            Login
          </Button>
          <Typography sx={{ mt: 2 }}>
            Don't have an account? <a href="#register">Register</a>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default LoginModal;
