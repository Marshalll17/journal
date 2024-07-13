import React from 'react'
import { Typography } from '@mui/material'
import Task from './Task'

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  return (
    <>
      <Typography variant='h4' component='h2' gutterBottom sx={{ mt: 4 }}>
        Tasks
      </Typography>
      {tasks.map((task) => (
        <Task
          key={task._id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </>
  )
}

export default TaskList
