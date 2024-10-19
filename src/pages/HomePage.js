import React, { useRef, useState } from 'react';
import { Container, Box, Typography, Button, Grid, TextField } from '@mui/material';
import emailjs from 'emailjs-com';
import { styled } from '@mui/system';
import backGroundImage from '../assets/books-background.jpg';  // Background image import

// Styled Hero Section with Background Image and Overlay
const HeroSection = styled(Box)({
  backgroundImage: `url(${backGroundImage})`,  // Set background image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
  position: 'relative',
  minHeight: '100vh',  // Full screen height
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&::before': {  // Dark overlay for better readability
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',  // Dark overlay
    zIndex: 1,
  },
});

// Content overlay for hero section
const ContentOverlay = styled(Container)({
  position: 'relative',
  zIndex: 2,  // Ensure content appears above overlay
  display: 'flex',
  alignItems: 'center',
});

// Styled Contact Form
const ContactForm = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',  // White form background
  padding: theme.spacing(4),
  borderRadius: '12px',  // Rounded corners
  boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)',  // Shadow effect for depth
  maxWidth: '400px',
  width: '100%',
  textAlign: 'center',  // Center-align form text
}));

// Button styling for form submission
const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#1976d2',  // Button color
  color: '#fff',
  '&:hover': { backgroundColor: '#1565c0' },  // Hover effect
}));

function HomePage() {
  const form = useRef();  // Form reference
  const [loading, setLoading] = useState(false);  // Loading state for form submission

  // Function to send email on form submission
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);  // Show loading

    emailjs
      .sendForm('service_ply40cd', 'template_n0qpds8', form.current, 'MpVQnpPTIwt0f4Ci_')
      .then(
        () => {
          alert('Your message has been sent successfully. We will contact you shortly.');
          e.target.reset();  // Reset form fields after submission
        },
        () => {
          alert('An error occurred. Please try again later.');
        }
      )
      .finally(() => setLoading(false));  // Hide loading
  };

  return (
    <div>
      {/* Hero Section with Background and Overlay */}
      <HeroSection>
        <ContentOverlay maxWidth="lg">
          <Grid container spacing={4}>
            {/* Left Side - Informational Text */}
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#fff' }}>
                Justice. Integrity. Trust.
              </Typography>
              <Typography variant="h5" component="p" gutterBottom sx={{ color: '#ddd' }}>
                Professional legal services since 1996.
              </Typography>
              <Typography variant="body1" component="p" sx={{ color: '#ccc', mt: 2 }}>
                At C. DE CERFF & ASSOCIATES, we specialize in personalized legal services in litigation, corporate law, family law, and conveyancing.
              </Typography>
            </Grid>

            {/* Right Side - Contact Form */}
            <Grid item xs={12} md={6}>
              <ContactForm component="form" ref={form} onSubmit={sendEmail}>
                <Typography variant="h6" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
                  Get a Free Consultation
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="name"
                      label="Your Name"
                      variant="outlined"
                      InputProps={{ style: { backgroundColor: '#fff' } }}  // Input styling
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="email"
                      label="Your Email"
                      type="email"
                      variant="outlined"
                      InputProps={{ style: { backgroundColor: '#fff' } }}  // Input styling
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="message"
                      label="Your Message"
                      variant="outlined"
                      multiline
                      rows={4}  // Multiline input for message
                      InputProps={{ style: { backgroundColor: '#fff' } }}  // Input styling
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <SubmitButton
                      variant="contained"
                      size="large"
                      type="submit"
                      disabled={loading}  // Disable button if loading
                      fullWidth
                    >
                      {loading ? 'Sending...' : 'Submit'}  {/*Button text changes based on loading state*/}
                    </SubmitButton>
                  </Grid>
                </Grid>
              </ContactForm>
            </Grid>
          </Grid>
        </ContentOverlay>
      </HeroSection>
    </div>
  );
}

export default HomePage;

