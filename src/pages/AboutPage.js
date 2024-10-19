import React from 'react';
import { Container, Grid, Typography, Box, Divider, Button } from '@mui/material';
import { styled } from '@mui/system';
import backgroundImage from '../assets/books-background.jpg';  // Background image for hero section

// Defining color palette for consistent theme across the page
const colors = {
  primary: '#1e3d59',  // Darker blue shade for primary elements
  accent: '#ffc107',   // Yellow accent color for call-to-action buttons and highlights
};

// Styled component for the Hero Section - this will create a large banner at the top with a background image
const HeroSection = styled(Box)({
  backgroundImage: `url(${backgroundImage})`,  // Setting background image
  backgroundSize: 'cover',                     // Ensuring the image covers the whole section
  backgroundPosition: 'center',                // Centering the background image
  color: '#fff',                               // Text color for this section
  position: 'relative',                        // Relative positioning for overlay effect
  minHeight: '60vh',                           // Minimum height of the hero section (60% of the viewport height)
  display: 'flex',                             // Flexbox to vertically center content
  alignItems: 'center',                        // Aligning items vertically in the center
  '&::before': {                               // Adding a dark overlay to the background image for readability
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',     // Semi-transparent black overlay
    zIndex: 1,                                 // Ensuring the overlay is behind the content
  },
});

// ContentOverlay ensures the content inside the Hero Section is above the background and its overlay
const ContentOverlay = styled(Container)({
  position: 'relative',                        // Position relative to its parent to appear above the background
  zIndex: 2,                                   // Ensures it is above the overlay
  textAlign: 'center',                         // Center the text horizontally
});

// Section is a reusable component to ensure consistent spacing and padding across different page sections
const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),                // Padding around the section using theme spacing
}));

// TextBox is used to wrap textual content with a semi-transparent background for emphasis and readability
const TextBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.85)',  // Semi-transparent white background for contrast with the text
  padding: theme.spacing(4),                     // Adding padding inside the box for breathing space
  borderRadius: '12px',                          // Rounded corners for a modern, soft look
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',  // Subtle shadow for a raised card-like effect
  marginTop: theme.spacing(4),                   // Adding margin above the text box for spacing
}));

// Custom styled button for call-to-action with hover effect
const CallToActionButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),                   // Adding margin on top for spacing
  backgroundColor: colors.accent,                // Using the accent color defined earlier
  color: colors.primary,                         // Primary color for the text on the button
  fontWeight: 'bold',                            // Bold text to make the button stand out
  '&:hover': {                                   // Changing the background color slightly on hover
    backgroundColor: '#e0a800',
  },
}));

function AboutUsPage() {
  return (
    <div>
      {/* Hero Section: Large header area with a background image and title */}
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

      {/* Main Content Section: Introduction and information about the law firm */}
      <Section>
        <Container>
          <Grid container spacing={6}>
            {/* Left Column: Text-based content */}
            <Grid item xs={12} md={8}>
              <TextBox>
                {/* Description of the law firm */}
                <Typography variant="h6" gutterBottom sx={{ color: '#333', lineHeight: 1.6 }}>
                  Welcome to <strong>C. DE CERFF & ASSOCIATES</strong>, a dynamic and reputable law firm established in 1996 and based in Mitchell's Plain. We specialize in Litigation, Corporate Law, Family Law, and Conveyancing, providing personalized legal services to a wide array of clients.
                </Typography>

                {/* Philosophy Section: Core values of the law firm */}
                <Typography variant="h5" gutterBottom sx={{ color: colors.primary, fontWeight: 'bold' }}>
                  Our Philosophy
                </Typography>
                <Typography variant="body1" component="p" sx={{ color: '#555', mb: 2 }}>
                  At C. DE CERFF & ASSOCIATES, we believe in delivering top-tier legal solutions with a strong commitment to integrity, transparency, and excellence. Our philosophy is guided by these core values:
                </Typography>
                {/* List of core values */}
                <Typography variant="body1" component="ul" sx={{ pl: 2, color: colors.textSecondary }}>
                  <li><strong>Excellence in Service:</strong> We strive to provide high-quality legal advice and services tailored to the unique needs of each client.</li>
                  <li><strong>Integrity in Dealings:</strong> Honesty and transparency are the cornerstones of our practice. We maintain the highest ethical standards in all our dealings.</li>
                  <li><strong>Customer Satisfaction:</strong> Our clients are at the heart of everything we do. We listen, understand, and work diligently to meet their legal needs with precision and care.</li>
                  <li><strong>Efficiency in Processes:</strong> Time is valuable, and we respect that by delivering timely and effective legal solutions that help our clients achieve their goals swiftly.</li>
                  <li><strong>Client Confidentiality:</strong> We prioritize the privacy of our clients and ensure that all information is treated with the utmost confidentiality.</li>
                </Typography>

                <Divider sx={{ my: 3 }} /> {/* Horizontal divider for separating content sections */}

                {/* Mission Section */}
                <Typography variant="h5" gutterBottom sx={{ color: colors.primary, fontWeight: 'bold' }}>
                  Our Mission
                </Typography>
                <Typography variant="body1" component="p" sx={{ color: '#555', mb: 2 }}>
                  Our mission is to provide accessible and affordable legal services to all communities, particularly those in underprivileged areas. We believe in equal access to justice and are committed to delivering legal services that make a tangible difference in the lives of our clients.
                </Typography>

                <Divider sx={{ my: 3 }} />

                {/* Approach Section */}
                <Typography variant="h5" gutterBottom sx={{ color: colors.primary, fontWeight: 'bold' }}>
                  Our Approach
                </Typography>
                <Typography variant="body1" component="p" sx={{ color: '#555', mb: 2 }}>
                  We take a collaborative and client-centered approach to law. From the initial consultation through the resolution of each case, we work closely with our clients to ensure that their rights are protected and their legal needs are met.
                </Typography>
                <Typography variant="body1" component="p" sx={{ color: '#555', mb: 2 }}>
                  By combining extensive legal expertise with a deep understanding of our clients' goals, we strive to provide innovative legal solutions that yield successful outcomes.
                </Typography>
              </TextBox>
            </Grid>

            {/* Right Column: Image of the law firm or related imagery */}
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src={backgroundImage} // Reusing the same image, but it can be replaced with another relevant one
                alt="Law firm"
                sx={{
                  width: '100%',                           // Full width of the column
                  borderRadius: '12px',                    // Rounded corners for the image
                  boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',  // Shadow effect for the image
                }}
              />
            </Grid>
          </Grid>

          {/* Call to Action: Button that redirects users to the contact page */}
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




