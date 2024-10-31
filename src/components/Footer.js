// src/components/Footer.js
import React from 'react';
import { Container, Typography, Box, Grid, Link as MuiLink } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#333333',
  color: '#FFFFFF',
  padding: theme.spacing(6, 0),
  marginTop: theme.spacing(8),
}));

const FooterLink = styled(MuiLink)(({ theme }) => ({
  color: '#FFFFFF',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
    color: '#a04722', // Accent color on hover
  },
}));

function Footer() {
  return (
    <FooterContainer component="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" paragraph>
              C. DE CERFF & ASSOCIATES is a dynamic and reputable law firm established in 1996. We specialize in providing personalized legal services.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <FooterLink component={Link} to="/">
                Home
              </FooterLink>
              <FooterLink component={Link} to="/about">
                About Us
              </FooterLink>
              <FooterLink component={Link} to="/services">
                Services
              </FooterLink>
              <FooterLink component={Link} to="/ourlawyers">
                Our Lawyers
              </FooterLink>
              <FooterLink component={Link} to="/contact">
                Contact
              </FooterLink>
            </Box>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              1 Koffiepeer St, Eastridge <br />
              Mitchell's Plain, <br />
              South Africa
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Phone: 021 397 3076 <br />
              Email: carol@cdecerffattorneys.co.za
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} C. DE CERFF & ASSOCIATES. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
