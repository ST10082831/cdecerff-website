import React, { useRef, useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  Paper,
} from '@mui/material';
import { styled } from '@mui/system';
import emailjs from 'emailjs-com';
import { colors } from '../theme'; 

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: colors.primary,
  color: '#fff',
  '&:hover': { backgroundColor: '#8a3f1e' },
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
      .finally(() => setLoading(false));
  };

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: colors.primary }}>
        Contact Us
      </Typography>
      <Grid container spacing={4}>
        {/* Contact Details */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4, backgroundColor: '#f9f9f9' }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              Get in Touch
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Phone:</strong> 021 397 3076
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Address:</strong>
              <br />
              1 Koffiepeer St, Eastridge
              <br />
              Mitchell's Plain,
              <br />
              South Africa
            </Typography>
            <Typography variant="body1" paragraph>
              Our office hours are Monday to Friday, 9:00 AM to 5:00 PM.
            </Typography>
         
          </Paper>
        </Grid>
        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              Send Us a Message
            </Typography>
            <form ref={form} onSubmit={sendEmail}>
              <Grid container spacing={2}>
                {/* Name Field */}
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="name"
                    label="Your Name"
                    variant="outlined"
                  />
                </Grid>
                {/* Cellphone Number Field */}
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="cellphone"
                    label="Your Cellphone Number"
                    type="tel"
                    variant="outlined"
                  />
                </Grid>
                {/* Email Field */}
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="email"
                    label="Your Email"
                    type="email"
                    variant="outlined"
                  />
                </Grid>
                {/* Message Field */}
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="message"
                    label="Your Message"
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                </Grid>
                {/* Submit Button */}
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
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ContactPage;
