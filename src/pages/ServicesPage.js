import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia , Box} from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import services from '../services'; 
import backgroundImage from '../assets/books-background.jpg';
import { CardActionArea } from '@mui/material';
const colors = {
  primary: '#a04722',
  accent: '#FFC107',
};

// Hero Section
const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#ffffff',
  position: 'relative',
  minHeight: '50vh',
  display: 'flex',
  alignItems: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
}));

const ContentOverlay = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
}));

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
                  boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                }}
              >
                <CardActionArea component={Link} to={`/services/${service.slug}`}>
                  <CardMedia
                    component="img"
                    image={service.image}
                    alt={service.title}
                    sx={{ height: 200 }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: colors.primary }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.shortDescription}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default ServicesPage;

