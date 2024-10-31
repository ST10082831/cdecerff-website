import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.png';

const HeaderContainer = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#a04722', // Existing primary color
  boxShadow: 'none',
  position: 'sticky',
}));

const Logo = styled('img')(({ theme }) => ({
  height: '50px',
  [theme.breakpoints.down('sm')]: {
    height: '40px',
  },
}));

const NavLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: '#FFFFFF',
  fontWeight: 'bold',
  marginLeft: theme.spacing(2),
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  color: '#FFFFFF',
  marginLeft: 'auto',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

function Header() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <HeaderContainer>
        <Toolbar>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo src={logo} alt="C. DE CERFF & ASSOCIATES" />
          </Link>

          {/* Desktop Navigation */}
          <NavLinks>
            <NavButton component={Link} to="/">
              Home
            </NavButton>
            <NavButton component={Link} to="/about">
              About Us
            </NavButton>
            <NavButton component={Link} to="/services">
              Services
            </NavButton>
            <NavButton component={Link} to="/ourlawyers">
              Our Lawyers
            </NavButton>
            <NavButton component={Link} to="/faq">
              FAQ
            </NavButton>
            <NavButton component={Link} to="/contact">
              Contact
            </NavButton>
          </NavLinks>

          {/* Mobile Menu Button */}
          <MobileMenuButton edge="end" onClick={handleDrawerToggle}>
            <MenuIcon />
          </MobileMenuButton>
        </Toolbar>
      </HeaderContainer>

      {/* Mobile Navigation Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
          <List>
            <ListItem button component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/about">
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem button component={Link} to="/services">
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem button component={Link} to="/ourlawyers">
              <ListItemText primary="Our Lawyers" />
            </ListItem>
            <ListItem button component={Link} to="/faq">
              <ListItemText primary="FAQ" />
            </ListItem>
            <ListItem button component={Link} to="/contact">
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Header;
