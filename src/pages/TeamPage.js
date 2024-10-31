import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia , Box} from '@mui/material';
import { styled } from '@mui/system';
import teamMembers from '../teamMembers.js'; 
import backgroundImage from '../assets/books-background.jpg'; 


const colors = {
  primary: '#0D47A1',
  accent: '#FFC107',
};

// Hero Section
const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#ffffff',
  position: 'relative',
  minHeight: '50vh',
  display: 'flex',
  alignItems: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
}));

const ContentOverlay = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
}));

function TeamPage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection>
        <ContentOverlay maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Meet Our Team
          </Typography>
          <Typography variant="h5" component="p">
            Experienced and Dedicated Professionals
          </Typography>
        </ContentOverlay>
      </HeroSection>

      {/* Team Members Section */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                }}
              >
                <CardMedia
                  component="img"
                  image={member.image}
                  alt={member.name}
                  sx={{ height: 200, width:200 }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ color: colors.primary }}>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {member.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {member.bio}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default TeamPage;

