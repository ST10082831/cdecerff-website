import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import { styled } from '@mui/system';
import teamMembers from '../teamMembers';
import backgroundImage from '../assets/books-background.jpg'; // Use an appropriate background image

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
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 1,
  },
});

const ContentOverlay = styled(Container)({
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
});

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

      {/* Team Members */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
                }}
              >
                <CardMedia
                  component="img"
                  image={member.image}
                  alt={member.name}
                  sx={{ height: 300 }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {member.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {member.specialty}
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

