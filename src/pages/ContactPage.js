import React, { useRef, useState } from 'react';
import { Container, Typography, Grid, TextField, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import emailjs from 'emailjs-com';
import backgroundImage from '../assets/books-background.jpg';  // Background image import

// Hero Section with background image
const HeroSection = styled(Box)({
  backgroundImage: `url(${backgroundImage})`,  // Apply background image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
  position: 'relative',
  minHeight: '40vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&::before': {
    content: '""',  // Dark overlay on image for better readability
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',  // Overlay for darkening the background
    zIndex: 1,
  },
});

// Content overlay to ensure text is readable over the background
const ContentOverlay = styled(Container)({
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
});

// Styling for the contact form
const ContactForm = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',  // White background for the form
  padding: theme.spacing(4),
  borderRadius: '12px',  // Rounded corners
  boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)',  // Slight shadow for depth
  maxWidth: '600px',
  margin: '0 auto',  // Center the form
  marginTop: theme.spacing(-8),
}));

// Button styling
const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#1976d2',  // Button color
  color: '#fff',  // White text
  '&:hover': {
    backgroundColor: '#1565c0',  // Darken button on hover
  },
}));

function ContactPage() {
  const form = useRef();  // Ref for the form
  const [loading, setLoading] = useState(false);  // Loading state

  // Function to handle form submission
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);  // Set loading state

    emailjs
      .sendForm('service_ply40cd', 'template_n0qpds8', form.current, 'MpVQnpPTIwt0f4Ci_')
      .then(
        () => {
          alert('Your message has been sent successfully.');  // Success message
          e.target.reset();  // Reset form fields
        },
        () => {
          alert('An error occurred. Please try again later.');  // Error message
        }
      )
      .finally(() => {
        setLoading(false);  // End loading state
      });
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection>
        <ContentOverlay maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Contact Us
          </Typography>
          <Typography variant="h5" component="p">
            We're here to help you with any legal inquiries.
          </Typography>
        </ContentOverlay>
      </HeroSection>

      {/* Contact Form */}
      <ContactForm component="form" ref={form} onSubmit={sendEmail}>
        <Typography variant="h6" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
          Send Us a Message
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="name"
              label="Your Name"
              variant="outlined"
              InputProps={{ style: { backgroundColor: '#fff' } }}  // Input field styling
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
              InputProps={{ style: { backgroundColor: '#fff' } }}  // Input field styling
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
              InputProps={{ style: { backgroundColor: '#fff' } }}  // Input field styling
            />
          </Grid>
          <Grid item xs={12}>
            <SubmitButton
              variant="contained"
              size="large"
              type="submit"
              disabled={loading}  // Disable button if form is loading
              fullWidth
            >
              {loading ? 'Sending...' : 'Submit'}
            </SubmitButton>
          </Grid>
        </Grid>
      </ContactForm>
    </div>
  );
}

export default ContactPage;


