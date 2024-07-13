import React from 'react'
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'

const TaskForm = ({
  title,
  setTitle,
  description,
  setDescription,
  status,
  setStatus,
  createTask,
}) => {
  return (
    <Box component='form' noValidate sx={{ mt: 1 }}>
      <TextField
        margin='normal'
        required
        fullWidth
        id='title'
        label='Title'
        name='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        margin='normal'
        required
        fullWidth
        id='description'
        label='Description'
        name='description'
        multiline
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <FormControl fullWidth margin='normal'>
        <InputLabel id='status-label'>Status</InputLabel>
        <Select
          labelId='status-label'
          id='status'
          value={status}
          label='Status'
          onChange={(e) => setStatus(e.target.value)}
        >
          <MenuItem value='To Do'>To Do</MenuItem>
          <MenuItem value='In Progress'>In Progress</MenuItem>
          <MenuItem value='Done'>Done</MenuItem>
        </Select>
      </FormControl>
      <Button
        fullWidth
        variant='contained'
        sx={{ mt: 3, mb: 2 }}
        onClick={createTask}
      >
        Create Task
      </Button>
    </Box>
  )
}

export default TaskForm
