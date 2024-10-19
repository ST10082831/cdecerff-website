import React from 'react';
import { Container, Grid, Typography, Box, Divider, Button } from '@mui/material';
import { styled } from '@mui/system';
import backgroundImage from '../assets/books-background.jpg';  // Importing background image

// Defining color palette
const colors = {
  primary: '#1e3d59',  // Dark blue
  accent: '#ffc107',   // Yellow accent
};

// Hero section with background image
const HeroSection = styled(Box)({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
  position: 'relative',
  minHeight: '60vh',
  display: 'flex',
  alignItems: 'center',
  '&::before': {  // Dark overlay on the image
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

// Content inside hero section
const ContentOverlay = styled(Container)({
  position: 'relative',
  zIndex: 2,  // Make sure content is above the overlay
  textAlign: 'center',  // Center-align text
});

// Reusable section style
const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),  // Padding for spacing
}));

// Box around text content with some transparency
const TextBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.85)',  // White background with transparency
  padding: theme.spacing(4),  // Padding inside the box
  borderRadius: '12px',  // Rounded corners
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',  // Shadow effect for depth
  marginTop: theme.spacing(4),  // Spacing above the box
}));

// Button styling
const CallToActionButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  backgroundColor: colors.accent,  // Yellow button
  color: colors.primary,  // Dark blue text
  fontWeight: 'bold',
  '&:hover': {  // Hover effect
    backgroundColor: '#e0a800',
  },
}));

function AboutUsPage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection>
        <ContentOverlay maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            About Us
          </Typography>
          <Typography variant="h5" component="p">
            Committed to Excellence Since 1996
          </Typography>
        </ContentOverlay>
      </HeroSection>

      {/* Main Content */}
      <Section>
        <Container>
          <Grid container spacing={6}>
            {/* Left Column: Text Content */}
            <Grid item xs={12} md={8}>
              <TextBox>
                <Typography variant="h6" gutterBottom sx={{ color: '#333', lineHeight: 1.6 }}>
                  Welcome to <strong>C. DE CERFF & ASSOCIATES</strong>, a law firm established in 1996. We specialize in Litigation, Corporate Law, Family Law, and Conveyancing.
                </Typography>

                {/* Philosophy Section */}
                <Typography variant="h5" gutterBottom sx={{ color: colors.primary, fontWeight: 'bold' }}>
                  Our Philosophy
                </Typography>
                <Typography variant="body1" component="p" sx={{ color: '#555', mb: 2 }}>
                  At C. DE CERFF & ASSOCIATES, we believe in providing excellent legal solutions with a focus on integrity and transparency. Our core values include:
                </Typography>
                <Typography variant="body1" component="ul" sx={{ pl: 2, color: colors.textSecondary }}>
                  <li><strong>Excellence in Service:</strong> High-quality legal services.</li>
                  <li><strong>Integrity in Dealings:</strong> Honesty and transparency in all actions.</li>
                  <li><strong>Customer Satisfaction:</strong> Prioritizing client needs.</li>
                  <li><strong>Efficiency in Processes:</strong> Timely legal solutions.</li>
                  <li><strong>Client Confidentiality:</strong> Ensuring privacy for all clients.</li>
                </Typography>

                <Divider sx={{ my: 3 }} />

                {/* Mission Section */}
                <Typography variant="h5" gutterBottom sx={{ color: colors.primary, fontWeight: 'bold' }}>
                  Our Mission
                </Typography>
                <Typography variant="body1" component="p" sx={{ color: '#555', mb: 2 }}>
                  To provide accessible and affordable legal services, especially for underprivileged communities.
                </Typography>

                <Divider sx={{ my: 3 }} />

                {/* Approach Section */}
                <Typography variant="h5" gutterBottom sx={{ color: colors.primary, fontWeight: 'bold' }}>
                  Our Approach
                </Typography>
                <Typography variant="body1" component="p" sx={{ color: '#555', mb: 2 }}>
                  We collaborate with clients to ensure their legal needs are met while protecting their rights.
                </Typography>
              </TextBox>
            </Grid>

            {/* Right Column: Image */}
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src={backgroundImage}  // Image of the firm
                alt="Law firm"
                sx={{
                  width: '100%',
                  borderRadius: '12px',  // Rounded corners for image
                  boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',  // Shadow effect
                }}
              />
            </Grid>
          </Grid>

          {/* Call to Action Button */}
          <Box textAlign="center" sx={{ mt: 8 }}>
            <CallToActionButton variant="contained" size="large" href="/contact">
              Contact Us
            </CallToActionButton>
          </Box>
        </Container>
      </Section>
    </div>
  );
}

export default AboutUsPage;





