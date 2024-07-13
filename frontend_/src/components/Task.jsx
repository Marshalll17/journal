import React from 'react'
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  IconButton,
} from '@mui/material'
import { Delete } from '@mui/icons-material'

const Task = ({ task, updateTask, deleteTask }) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant='h5' component='div'>
          {task.title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {task.description}
        </Typography>
        <Typography variant='body1'>Status: {task.status}</Typography>
      </CardContent>
      <CardActions>
        <Button size='small' onClick={() => updateTask(task._id, 'To Do')}>
          To Do
        </Button>
        <Button
          size='small'
          onClick={() => updateTask(task._id, 'In Progress')}
        >
          In Progress
        </Button>
        <Button size='small' onClick={() => updateTask(task._id, 'Done')}>
          Done
        </Button>
        <IconButton aria-label='delete' onClick={() => deleteTask(task._id)}>
          <Delete />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Task
