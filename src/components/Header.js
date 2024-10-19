import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import logo from '../assets/logo.png';  // Path to your logo

// Styled Box for the logo
const LogoContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

// Styled Button for consistent styling
const NavButton = styled(Button)(({ theme }) => ({
  color: '#fff', // White text
  marginRight: theme.spacing(2),
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Subtle hover effect
  },
}));

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1e3d59' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo on the left */}
        <LogoContainer>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Box
              component="img"
              src={logo}
              alt="Law Firm Logo"
              sx={{
                width: { xs: '150px', sm: '200px', md: '250px' }, // Responsive logo size
                height: 'auto',
                cursor: 'pointer',
              }}
            />
          </Link>
        </LogoContainer>

        {/* Navigation buttons on the right */}
        <Box>
          <NavButton component={Link} to="/">
            Home
          </NavButton>
          <NavButton component={Link} to="/about">
            About Us
          </NavButton>
          <NavButton component={Link} to="/services">
            Services
          </NavButton>
          <NavButton component={Link} to="/faq">
            FAQ
          </NavButton>
          <NavButton component={Link} to="/contact">
            Contact Us
          </NavButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
