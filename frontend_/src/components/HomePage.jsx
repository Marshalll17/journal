import React from 'react'
import { Container, Typography, Button } from '@mui/material'

const HomePage = ({ onGetStarted }) => {
  return (
    <Container
      component='main'
      maxWidth='xs'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundImage: 'url(/path-to-your-image.jpg)', // Use a proper path to your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
      }}
    >
      <Typography
        variant='h2'
        component='h1'
        gutterBottom
        sx={{ color: 'gold', fontWeight: 'bold' }}
      >
        Journal
      </Typography>
      <Typography variant='h5' paragraph sx={{ color: 'white', mb: 4 }}>
        Welcome to the Journal App. Manage your tasks efficiently and
        effectively. Create, update, and delete tasks with ease.
      </Typography>
      <Button
        variant='contained'
        color='primary'
        onClick={onGetStarted}
        sx={{ px: 4, py: 2, fontSize: '1.2rem' }}
      >
        Get Started
      </Button>
    </Container>
  )
}

export default HomePage
