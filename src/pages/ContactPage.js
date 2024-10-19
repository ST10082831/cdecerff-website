import React, { useRef, useState } from 'react';
import { Container, Typography, Grid, TextField, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import emailjs from 'emailjs-com';
import backgroundImage from '../assets/books-background.jpg';  // Ensure this path is correct

const HeroSection = styled(Box)({
  backgroundImage: `url(${backgroundImage})`, // Ensure this is correctly referencing your image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
  position: 'relative',
  minHeight: '40vh',
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
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay
    zIndex: 1,
  },
});

const ContentOverlay = styled(Container)({
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
});

const ContactForm = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: theme.spacing(4),
  borderRadius: '12px',
  boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)',
  maxWidth: '600px',
  margin: '0 auto',
  marginTop: theme.spacing(-8),
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#1976d2',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#1565c0',
  },
}));

function ContactPage() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm('service_ply40cd', 'template_n0qpds8', form.current, 'MpVQnpPTIwt0f4Ci_')
      .then(
        () => {
          alert('Your message has been sent successfully. We will contact you shortly.');
          e.target.reset();
        },
        () => {
          alert('An error occurred. Please try again later.');
        }
      )
      .finally(() => {
        setLoading(false);
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
    </div>
  );
}

export default ContactPage;

