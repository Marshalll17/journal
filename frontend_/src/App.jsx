import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Box } from '@mui/material'
import AuthForm from './components/AuthForm'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import HomePage from './components/HomePage'

function App() {
  const [mode, setMode] = useState('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('To Do')
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [view, setView] = useState('home')

  useEffect(() => {
    if (token) {
      fetchTasks()
    }
  }, [token])

  const register = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:3000/register', { email, password })
      alert('Registered successfully. Please log in.')
      setMode('login')
      setEmail('')
      setPassword('')
    } catch (error) {
      alert('Registration failed')
    }
  }

  const login = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:3000/login', {
        email,
        password,
      })
      setToken(res.data.token)
      localStorage.setItem('token', res.data.token)
      setView('tasks')
    } catch (error) {
      alert('Login failed')
    }
  }

  const toggleMode = (e) => {
    e.preventDefault()
    setMode(mode === 'login' ? 'signup' : 'login')
    setEmail('')
    setPassword('')
  }

  const logout = () => {
    setToken(null)
    localStorage.removeItem('token')
    setTasks([])
    setView('home')
  }

  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:3000/tasks', {
      headers: { Authorization: `Bearer ${token}` },
    })
    setTasks(res.data)
  }

  const createTask = async () => {
    await axios.post(
      'http://localhost:3000/tasks',
      { title, description, status },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    fetchTasks()
    setTitle('')
    setDescription('')
    setStatus('To Do')
  }

  const updateTask = async (id, newStatus) => {
    await axios.patch(
      `http://localhost:3000/tasks/${id}`,
      { status: newStatus },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    fetchTasks()
  }

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    fetchTasks()
  }

  const goToHome = () => {
    setView('home')
  }

  const goToAuth = () => {
    setView('auth')
  }

  if (!token) {
    return view === 'home' ? (
      <HomePage onGetStarted={goToAuth} />
    ) : (
      <Container component='main' maxWidth='xs'>
        <AuthForm
          mode={mode}
          toggleMode={toggleMode}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          onSubmit={mode === 'login' ? login : register}
          goToHome={goToHome}
        />
      </Container>
    )
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header logout={logout} />
      <Container maxWidth='md' sx={{ mt: 4 }}>
        <TaskForm
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          status={status}
          setStatus={setStatus}
          createTask={createTask}
        />
        <TaskList
          tasks={tasks}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      </Container>
    </Box>
  )
}

export default App
