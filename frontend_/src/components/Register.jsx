import React from 'react'
import { TextField, Button, Box } from '@mui/material'

const Register = ({ email, setEmail, password, setPassword, onSubmit }) => {
  return (
    <Box component='form' onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        margin='normal'
        required
        fullWidth
        id='email'
        label='Email Address'
        name='email'
        autoComplete='email'
        autoFocus
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        margin='normal'
        required
        fullWidth
        name='password'
        label='Password'
        type='password'
        id='password'
        autoComplete='new-password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
        Sign Up
      </Button>
    </Box>
  )
}

export default Register
