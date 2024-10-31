import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';

// Hardcoded FAQ Data
const faqItems = [
  {
    question: "What services does C. DE CERFF & ASSOCIATES offer?",
    answer: "We offer a wide range of legal services including litigation, corporate law, family law, and conveyancing."
  },
  {
    question: "How can I schedule a consultation?",
    answer: "You can schedule a consultation by contacting us through the form on the homepage or calling our office directly."
  },
  {
    question: "Do you handle cases across South Africa?",
    answer: "Yes, we provide legal services to clients throughout South Africa."
  },
  {
    question: "What is the best way to get in touch with a lawyer?",
    answer: "For immediate assistance, please use our contact form, and we’ll connect you with the appropriate lawyer based on your case."
  },
];

// Styled Components for Consistent Design
const HeroSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#a04722',
  color: '#fff',
  position: 'relative',
  minHeight: '40vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const ContentOverlay = styled(Container)({
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
  padding: '20px',
  color: '#fff',
});

// Accordion styling
const StyledAccordion = styled(Accordion)(({ theme }) => ({
  margin: theme.spacing(2, 0),
  boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
  '&:before': { display: 'none' },
  '&.Mui-expanded': { margin: theme.spacing(2, 0) },
}));

function FAQPage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection>
        <ContentOverlay maxWidth="md">
          <Typography variant="h3" component="h1" gutterBottom>
            Frequently Asked Questions
          </Typography>
          <Typography variant="h6">
            Find answers to the most common questions about our legal services.
          </Typography>
        </ContentOverlay>
      </HeroSection>

      {/* FAQ Section */}
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: '#a04722', fontWeight: 'bold', mt: 2, mb: 4 }}
        >
          How Can We Help You?
        </Typography>
        
        {faqItems.map((faq, index) => (
          <StyledAccordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#a04722' }} />}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </StyledAccordion>
        ))}
      </Container>
    </div>
  );
}

export default FAQPage;



