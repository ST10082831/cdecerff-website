import React from 'react';
import { Container, Typography, Box, Grid, Divider } from '@mui/material';
import { styled } from '@mui/system';
import teamImage from '../assets/books-background.jpg'; 
import { colors } from '../theme'; 

// Styled components
const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${teamImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#ffffff',
  position: 'relative',
  minHeight: '50vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&::before': {
    content: '""',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
}));

const ContentOverlay = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
  padding: theme.spacing(4),
}));

function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection>
        <ContentOverlay>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            About Us
          </Typography>
        </ContentOverlay>
      </HeroSection>

      {/* Main Content */}
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: colors.primary, fontWeight: 'bold', mt: 2 }}
        >
          Our Firm
        </Typography>
        <Divider sx={{ mb: 4 }} />

        <Typography variant="body1" paragraph sx={{ mt: 2, lineHeight: 1.8 }}>
          Established in 1996, <strong>C. DE CERFF & ASSOCIATES</strong> has been providing
          exceptional legal services to individuals, families, and businesses across South Africa.
          With over two decades of experience, our firm prides itself on delivering personalized
          solutions tailored to the unique needs of each client.
        </Typography>

        <Typography variant="body1" paragraph sx={{ mt: 2, lineHeight: 1.8 }}>
          Our team of dedicated attorneys specializes in various areas of law, including litigation,
          corporate law, family law, and conveyancing. We are committed to upholding the highest
          standards of integrity, professionalism, and excellence in all that we do.
        </Typography>

        <Typography variant="body1" paragraph sx={{ mt: 2, lineHeight: 1.8 }}>
          At C. DE CERFF & ASSOCIATES, we believe in making a positive impact not only through our
          legal work but also by contributing to the advancement of our society. As part of our
          commitment to social responsibility, we actively support South Africa's{' '}
          <strong>Broad-Based Black Economic Empowerment (B-BBEE)</strong> initiatives. We are
          dedicated to promoting equality and transformation within the legal profession and the
          broader business community.
        </Typography>

        <Typography variant="body1" paragraph sx={{ mt: 2, lineHeight: 1.8 }}>
          Our firm embraces diversity and inclusivity, striving to create opportunities for
          previously disadvantaged individuals. By aligning with B-BBEE principles, we aim to
          contribute to sustainable economic growth and social development in South Africa.
        </Typography>

        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: colors.primary, fontWeight: 'bold', mt: 6 }}
        >
          Our Mission & Vision
        </Typography>
        <Divider sx={{ mb: 4 }} />

        <Typography variant="body1" paragraph sx={{ mt: 2, lineHeight: 1.8 }}>
          <strong>Our Mission:</strong> To provide accessible and affordable legal services,
          delivering exceptional results through dedication, innovation, and a client-centric
          approach.
        </Typography>

        <Typography variant="body1" paragraph sx={{ mt: 2, lineHeight: 1.8 }}>
          <strong>Our Vision:</strong> To be a leading law firm recognized for excellence,
          integrity, and commitment to social responsibility, making a meaningful difference in the
          lives of our clients and the community.
        </Typography>
      </Container>
    </div>
  );
}

export default AboutPage;







