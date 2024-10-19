import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';
import faqItems from '../faqdata';  // Importing FAQ data
import backgroundImage from '../assets/books-background.jpg';  // Background image import

// Hero Section with background image
const HeroSection = styled(Box)({
  backgroundImage: `url(${backgroundImage})`,  // Setting background image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
  position: 'relative',
  minHeight: '50vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&::before': {
    content: '""',  // Dark overlay for better text visibility
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',  // Transparent black overlay
    zIndex: 1,
  },
});

// Content overlay for hero section
const ContentOverlay = styled(Container)({
  position: 'relative',
  zIndex: 2,  // Ensure text appears above the overlay
  textAlign: 'center',
  color: '#fff',
});

// Section styling for the FAQ content
const Section = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 0),  // Padding for spacing
  textAlign: 'center',
}));

// Styling for Accordion (FAQ item)
const StyledAccordion = styled(Accordion)(({ theme }) => ({
  margin: theme.spacing(2, 0),  // Spacing between accordions
  borderRadius: '8px',  // Rounded corners
  boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',  // Slight shadow for depth
  '&:before': { display: 'none' },
  '&.Mui-expanded': { margin: theme.spacing(2, 0) },
}));

// Accordion summary style (collapsed state)
const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: '#1e3d59',  // Primary color
  color: '#fff',
  padding: theme.spacing(2),
  borderRadius: '8px',
}));

// Accordion details style (expanded state)
const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  backgroundColor: '#f5f5f5',  // Light gray background
  padding: theme.spacing(3),  // Spacing within details section
  borderRadius: '8px',
  color: '#333',  // Dark text color
}));

function FAQPage() {
  return (
    <div>
      {/* Hero Section */}
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



