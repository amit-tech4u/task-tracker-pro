import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none', marginRight: 10 }}>Home</Link>
        <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About</Link>
      </Typography>
      <Box>
        <ThemeToggle />
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;