import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import { styled } from '@mui/system';
import teamMembers from '../teamMembers';  // Import team members data
import backgroundImage from '../assets/books-background.jpg';  // Background image import

// Styled Hero Section with Background Image
const HeroSection = styled(Box)({
  backgroundImage: `url(${backgroundImage})`,  // Set background image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
  position: 'relative',
  minHeight: '50vh',  // Set the height of the section
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&::before': {  // Dark overlay for text visibility
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',  // Semi-transparent overlay
    zIndex: 1,
  },
});

// Content overlay to ensure text appears above the background
const ContentOverlay = styled(Container)({
  position: 'relative',
  zIndex: 2,  // Ensures content is on top of the overlay
  textAlign: 'center',  // Center-align the text
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

      {/* Team Members Section */}
      <Container sx={{ py: 8 }}>  {/* Padding around the team members section */}
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: '100%',  // Make each card take up full height
                  display: 'flex',
                  flexDirection: 'column',  // Stack content vertically
                  boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',  // Add shadow for depth
                }}
              >
                <CardMedia
                  component="img"
                  image={member.image}  // Team member's image
                  alt={member.name}
                  sx={{ height: 300 }}  // Set image height
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {member.name}  {/* Team member's name */}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {member.title}  {/* Team member's title */}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {member.specialty}  {/* Team member's specialty */}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {member.bio}  {/* Team member's bio */}
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

