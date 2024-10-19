import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';
import faqItems from '../faqdata';  // Ensure correct path to your FAQ data
import backgroundImage from '../assets/books-background.jpg';  // Add a background image for your FAQ page

// Styled Hero Section for the FAQ page
const HeroSection = styled(Box)({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
  position: 'relative',
  minHeight: '50vh',
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
    backgroundColor: 'rgba(0, 0, 0, 0.6)',  // Dark overlay for better readability
    zIndex: 1,
  },
});

// Content overlay ensures the text is visible over the background
const ContentOverlay = styled(Container)({
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
  color: '#fff',
});

const Section = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  textAlign: 'center',
}));

// Accordion styling for the FAQ items
const StyledAccordion = styled(Accordion)(({ theme }) => ({
  margin: theme.spacing(2, 0),
  borderRadius: '8px',
  boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
  '&:before': {
    display: 'none',
  },
  '&.Mui-expanded': {
    margin: theme.spacing(2, 0),
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: '#1e3d59',  // Primary color
  color: '#fff',
  padding: theme.spacing(2),
  borderRadius: '8px',
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  backgroundColor: '#f5f5f5',  // Light gray for contrast
  padding: theme.spacing(3),
  borderRadius: '8px',
  color: '#333',
}));

function FAQPage() {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <HeroSection>
        <ContentOverlay maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Frequently Asked Questions
          </Typography>
          <Typography variant="h5" component="p">
            Find answers to the most common questions about our legal services.
          </Typography>
        </ContentOverlay>
      </HeroSection>

      {/* FAQ Section */}
      <Section>
        <Typography variant="h4" gutterBottom sx={{ color: '#1e3d59', fontWeight: 'bold' }}>
          How Can We Help You?
        </Typography>
        {faqItems.map((faq, index) => (
          <StyledAccordion key={index}>
            <StyledAccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#ffc107' }} />}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{faq.question}</Typography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <Typography>{faq.answer}</Typography>
            </StyledAccordionDetails>
          </StyledAccordion>
        ))}
      </Section>
    </div>
  );
}

export default FAQPage;


