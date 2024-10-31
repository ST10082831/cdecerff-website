import React from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { Container, Typography, Box, Divider } from '@mui/material';
import { styled } from '@mui/system';
import ReactMarkdown from 'react-markdown';
import { services } from '../services';
import { colors } from '../theme';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Styled components
const HeroSection = styled(Box)(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#ffffff',
  position: 'relative',
  minHeight: '50vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&::before': {
    content: '""',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
}));

const ContentOverlay = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
  padding: theme.spacing(4),
}));

const MarkdownContainer = styled(Box)(({ theme }) => ({
  '& h1': {
    ...theme.typography.h4,
    marginTop: theme.spacing(4),
  },
  '& h2': {
    ...theme.typography.h5,
    marginTop: theme.spacing(3),
  },
  '& h3': {
    ...theme.typography.h6,
    marginTop: theme.spacing(2),
  },
  '& p': {
    ...theme.typography.body1,
    marginTop: theme.spacing(2),
    lineHeight: 1.8,
  },
  '& ul': {
    marginLeft: theme.spacing(4),
  },
  '& li': {
    ...theme.typography.body1,
    marginTop: theme.spacing(1),
    display: 'flex',
    alignItems: 'flex-start',
  },
  '& li > svg': {
    marginRight: theme.spacing(1),
    marginTop: '4px',
    color: colors.primary,
  },
}));

function ServiceDetailsPage() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" color="error">
          Service Not Found
        </Typography>
      </Container>
    );
  }

  return (
    <div>
      {/* Hero Section with Service Image */}
      <HeroSection
        sx={{
          backgroundImage: `url(${service.image})`,
        }}
      >
        <ContentOverlay>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 'bold' }}
          >
            {service.title}
          </Typography>
        </ContentOverlay>
      </HeroSection>

      <Container sx={{ py: 8 }}>
        {/* Back Link */}
        <Typography
          component={RouterLink}
          to="/services"
          sx={{ textDecoration: 'none', color: colors.primary, mb: 2 }}
        >
          &larr; Back to Services
        </Typography>

        {/* Service Title */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: colors.primary, fontWeight: 'bold', mt: 2 }}
        >
          {service.title}
        </Typography>

        <Divider sx={{ mb: 4 }} />

        {/* Styled Markdown Content */}
        <MarkdownContainer>
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => (
                <Typography variant="h4" sx={{ mt: 4 }} {...props} />
              ),
              h2: ({ node, ...props }) => (
                <Typography variant="h5" sx={{ mt: 3 }} {...props} />
              ),
              h3: ({ node, ...props }) => (
                <Typography variant="h6" sx={{ mt: 2 }} {...props} />
              ),
              p: ({ node, ...props }) => (
                <Typography variant="body1" sx={{ mt: 2 }} {...props} />
              ),
              ul: ({ node, ...props }) => (
                <Box component="ul" sx={{ ml: 4 }} {...props} />
              ),
              li: ({ node, ...props }) => (
                <Box component="li" sx={{ mt: 1 }}>
                  <CheckCircleIcon sx={{ mr: 1, mt: '4px' }} />
                  <Typography variant="body1" component="span" {...props} />
                </Box>
              ),
              img: ({ node, ...props }) => (
                <Box sx={{ my: 4 }}>
                  <img
                    src={props.src}
                    alt={props.alt}
                    style={{ maxWidth: '100%', borderRadius: '8px' }}
                  />
                </Box>
              ),
              blockquote: ({ node, ...props }) => (
                <Box
                  component="blockquote"
                  sx={{
                    borderLeft: `4px solid ${colors.primary}`,
                    paddingLeft: 2,
                    marginY: 2,
                    color: 'text.secondary',
                    fontStyle: 'italic',
                  }}
                  {...props}
                />
              ),
              hr: ({ node, ...props }) => (
                <Divider sx={{ my: 4 }} {...props} />
              ),
            }}
          >
            {service.detailedDescription}
          </ReactMarkdown>
        </MarkdownContainer>
      </Container>
    </div>
  );
}

export default ServiceDetailsPage;