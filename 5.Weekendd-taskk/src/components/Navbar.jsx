import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Navbar({ openLoginModal }) {
    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = (open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setOpenDrawer(open);
    };
  
    const handleLoginClick = () => {
        setOpenDrawer(false);
        openLoginModal();
      };
    
      return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed">
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)} 
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ flexGrow: 1 }} />
              <Button color="inherit" sx={{ display: 'block' }} onClick={handleLoginClick}>
                Login
              </Button>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="temporary"
            anchor="left"
            open={openDrawer}
            onClose={toggleDrawer(false)} 
          >
            <Box sx={{ p: 2 }}>
              <Button color="inherit" sx={{ mb: 2, display: 'block' }} onClick={handleLoginClick}>
                Login
              </Button>
              <Button color="inherit" sx={{ display: 'block' }}>Register</Button>
            </Box>
          </Drawer>
        </Box>
      );
    }
    
    export default Navbar;
