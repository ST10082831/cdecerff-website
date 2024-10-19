import React from 'react';
import { Container, Typography, Grid, Box, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/system';
import services from '../services';  // Assume services data is imported
import backgroundImage from '../assets/books-background.jpg';  // Importing background image

// Styled Hero Section with background image
const HeroSection = styled(Box)({
  backgroundImage: `url(${backgroundImage})`,  // Set background image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
  position: 'relative',
  minHeight: '50vh',  // Minimum height of 50% viewport height
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&::before': {  // Dark overlay to improve text readability
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',  // Dark transparent overlay
    zIndex: 1,
  },
});

// Content overlay to ensure text is above the background
const ContentOverlay = styled(Container)({
  position: 'relative',
  zIndex: 2,  // Ensures content appears above overlay
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
      <Container sx={{ py: 8 }}>  {/* Padding around services section */}
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: '100%',  // Full height cards
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',  // Shadow for depth
                }}
              >
                <CardMedia
                  component="img"
                  image={service.image}  // Service image
                  alt={service.title}
                  sx={{ height: 200 }}  // Image height
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {service.title}  {/* Service title */}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}  {/* Service description */}
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

