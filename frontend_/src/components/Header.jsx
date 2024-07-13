import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'

const Header = ({ logout }) => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Task Manager
        </Typography>
        <Button color='inherit' onClick={logout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
