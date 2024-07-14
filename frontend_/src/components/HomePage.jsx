import React from 'react'
import { Container, Typography, Button, Box, Paper } from '@mui/material'
import { styled } from '@mui/system'

const BackgroundContainer = styled(Box)({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#f5f5f5',
})

const ContentPaper = styled(Paper)({
  padding: '40px',
  borderRadius: '20px',
  boxShadow: 'none',
  background: 'white',
  border: '1px solid #e0e0e0',
})

const Title = styled(Typography)({
  fontWeight: 900,
  color: '#333',
  marginBottom: '20px',
  fontSize: '3rem',
  letterSpacing: '-0.5px',
})

const Subtitle = styled(Typography)({
  color: '#666',
  marginBottom: '30px',
  lineHeight: 1.6,
})

const StyledButton = styled(Button)({
  background: '#333',
  color: 'white',
  padding: '12px 24px',
  borderRadius: '30px',
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: 600,
  '&:hover': {
    background: '#555',
  },
})

const Accent = styled('span')({
  color: '#4a90e2',
})

const HomePage = ({ onGetStarted }) => {
  return (
    <BackgroundContainer>
      <Container maxWidth='sm'>
        <ContentPaper elevation={0}>
          <Title variant='h1'>
            #TO-<Accent>DO's</Accent>
          </Title>
          <Subtitle variant='body1'>
            Simplify your life, one task at a time. Create, manage, and track
            your to-dos with ease and elegance.
          </Subtitle>
          <StyledButton onClick={onGetStarted}>Start Organizing</StyledButton>
        </ContentPaper>
      </Container>
    </BackgroundContainer>
  )
}

export default HomePage
