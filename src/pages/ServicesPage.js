// src/pages/ServicesPage.js
import React from 'react';
import { Container, Typography, Grid, Box, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/system';
import services from '../services'; // Assume you have a services data file
import backgroundImage from '../assets/books-background.jpg'; // Use an appropriate background image

const HeroSection = styled(Box)({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
  position: 'relative',
  minHeight: '50vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 1,
  },
});

const ContentOverlay = styled(Container)({
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
});

function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection>
        <ContentOverlay maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Our Services
          </Typography>
          <Typography variant="h5" component="p">
            Comprehensive Legal Solutions
          </Typography>
        </ContentOverlay>
      </HeroSection>

      {/* Services Section */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
                }}
              >
                <CardMedia
                  component="img"
                  image={service.image}
                  alt={service.title}
                  sx={{ height: 200 }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default ServicesPage;
