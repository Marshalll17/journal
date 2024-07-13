import React from 'react'
import { Button, TextField, Box, Typography } from '@mui/material'

const AuthForm = ({
  mode,
  toggleMode,
  email,
  setEmail,
  password,
  setPassword,
  onSubmit,
  goToHome, // Add this prop
}) => {
  return (
    <Box
      component='form'
      onSubmit={onSubmit}
      sx={{
        mt: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant='h5'>
        {mode === 'login' ? 'Login' : 'Sign Up'}
      </Typography>
      <TextField
        margin='normal'
        required
        fullWidth
        label='Email'
        type='email'
        autoComplete='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        margin='normal'
        required
        fullWidth
        label='Password'
        type='password'
        autoComplete='current-password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
        {mode === 'login' ? 'Login' : 'Sign Up'}
      </Button>
      <Button
        onClick={toggleMode}
        fullWidth
        variant='text'
        sx={{ mt: 1, mb: 1 }}
      >
        {mode === 'login'
          ? "Don't have an account? Sign Up"
          : 'Already have an account? Login'}
      </Button>
      <Button onClick={goToHome} fullWidth variant='text' sx={{ mt: 1, mb: 1 }}>
        Take Me Home
      </Button>
    </Box>
  )
}

export default AuthForm
