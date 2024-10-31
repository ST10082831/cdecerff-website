import React from 'react';
import { Container, Box, Typography, Grid, Button, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/system';
import { Link as RouterLink } from 'react-router-dom';
import { colors } from '../theme'; 
import { services } from '../services'; 
import teamImage from '../assets/books-background.jpg'; 

// Styled Hero Section with Background Image and Overlay
const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${teamImage})`, // Use background image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
  position: 'relative',
  minHeight: '70vh',
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
}));

// Content overlay for hero section
const ContentOverlay = styled(Container)({
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
});

// Button styling
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: colors.primary,
  color: '#fff',
  '&:hover': { backgroundColor: '#8a3f1e' },
  marginTop: theme.spacing(2),
}));

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection>
        <ContentOverlay maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            C. DE CERFF & ASSOCIATES
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            Professional Legal Services Since 1996
          </Typography>
          <Typography variant="body1" component="p" sx={{ mt: 2 }}>
            Committed to providing exceptional legal solutions with integrity and excellence.
          </Typography>
          <StyledButton variant="contained" size="large" component={RouterLink} to="/contact">
            Contact us
          </StyledButton>
        </ContentOverlay>
      </HeroSection>

      {/* Introduction Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" gutterBottom sx={{ color: colors.primary, fontWeight: 'bold' }}>
          Welcome to C. DE CERFF & ASSOCIATES
        </Typography>
        <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
          With over two decades of experience, our firm offers a comprehensive range of legal services tailored to meet the unique needs of our clients. Our dedicated team of attorneys specializes in litigation, corporate law, family law, and conveyancing. We are passionate about delivering personalized solutions with professionalism and care.
        </Typography>
      </Container>

      {/* Services Overview Section */}
      <Box sx={{ backgroundColor: '#f9f9f9', py: 8 }}>
        <Container>
          <Typography variant="h4" gutterBottom sx={{ color: colors.primary, fontWeight: 'bold' }}>
            Our Services
          </Typography>
          <Grid container spacing={4}>
            {services.slice(0, 3).map((service) => (
              <Grid item xs={12} md={4} key={service.slug}>
                <Card sx={{ height: '100%' }}>
                  <CardMedia component="img" height="140" image={service.image} alt={service.title} />
                  <CardContent>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {service.description}
                    </Typography>
                    <Button
                      variant="text"
                      component={RouterLink}
                      to={`/services/${service.slug}`}
                      sx={{ mt: 2, color: colors.primary }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <StyledButton variant="contained" component={RouterLink} to="/services">
              View All Services
            </StyledButton>
          </Box>
        </Container>
      </Box>

      {/* Call-to-Action Section */}
      <Box sx={{ backgroundColor: colors.primary, color: '#fff', py: 8 }}>
        <Container>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
            Ready to Discuss Your Legal Needs?
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            Contact us today to schedule a consultation with one of our experienced attorneys. We are here to provide the legal support you need.
          </Typography>
          <StyledButton variant="contained" component={RouterLink} to="/contact">
            Contact Us
          </StyledButton>
        </Container>
      </Box>
    </div>
  );
}

export default HomePage;



