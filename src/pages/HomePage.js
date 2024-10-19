import React, { useRef, useState } from 'react';
import { Container, Box, Typography, Button, Grid, TextField } from '@mui/material';
import emailjs from 'emailjs-com';
import { styled } from '@mui/system';
import backGroundImage from '../assets/books-background.jpg';

// Styled Hero Section with a Background Image and Overlay
const HeroSection = styled(Box)({
  backgroundImage: `url(${backGroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
  position: 'relative',
  minHeight: '100vh',
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

// Content Overlay to ensure text appears on top of the background
const ContentOverlay = styled(Container)({
  position: 'relative',
  zIndex: 2, // Ensures the content is above the overlay
  display: 'flex',
  alignItems: 'center',
});

// Styled Contact Form
const ContactForm = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: theme.spacing(4),
  borderRadius: '12px',
  boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)',
  maxWidth: '400px',
  width: '100%',
  textAlign: 'center',
}));

// Submit Button Styling
const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#1976d2',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#1565c0',
  },
}));

function HomePage() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm('service_ply40cd', 'template_n0qpds8', form.current, 'MpVQnpPTIwt0f4Ci_')
      .then(
        (result) => {
          alert('Your message has been sent successfully. We will contact you shortly.');
          e.target.reset(); // Reset form fields after submission
        },
        (error) => {
          alert('An error occurred. Please try again later.');
        }
      )
      .finally(() => {
        setLoading(false);
      });
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
                At C. DE CERFF & ASSOCIATES, we specialize in delivering personalized legal services in the areas of litigation,
                corporate law, family law, and conveyancing. Our experienced team is committed to upholding the highest
                standards of justice and trust for every client.
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
                      InputProps={{ style: { backgroundColor: '#fff' } }}
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
                      InputProps={{ style: { backgroundColor: '#fff' } }}
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
                      rows={4}
                      InputProps={{ style: { backgroundColor: '#fff' } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <SubmitButton
                      variant="contained"
                      size="large"
                      type="submit"
                      disabled={loading}
                      fullWidth
                    >
                      {loading ? 'Sending...' : 'Submit'}
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
