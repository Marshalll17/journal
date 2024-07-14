require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB', err))

// User model
const User = mongoose.model('User', {
  email: String,
  password: String,
})

// Task model
const Task = mongoose.model('Task', {
  title: String,
  description: String,
  status: String,
  userId: mongoose.Schema.Types.ObjectId,
})

// Register
app.post('/register', async (req, res) => {
  const { email, password } = req.body
  const hashedPassword = await bcrypt.hash(password, 10)
  const user = new User({ email, password: hashedPassword })
  await user.save()
  res.status(201).send('User registered')
})

// Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)
    res.json({ token })
  } else {
    res.status(400).send('Invalid credentials')
  }
})

// Middleware to verify JWT
const auth = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '')
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.userId = decoded.userId
    next()
  } catch (e) {
    res.status(401).send('Please authenticate')
  }
}

// Create task
app.post('/tasks', auth, async (req, res) => {
  const task = new Task({ ...req.body, userId: req.userId })
  await task.save()
  res.status(201).json(task)
})

// Get tasks
app.get('/tasks', auth, async (req, res) => {
  const tasks = await Task.find({ userId: req.userId })
  res.json(tasks)
})

// Update task
app.patch('/tasks/:id', auth, async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, userId: req.userId },
    req.body,
    { new: true }
  )
  res.json(task)
})

// Delete task
app.delete('/tasks/:id', auth, async (req, res) => {
  await Task.findOneAndDelete({ _id: req.params.id, userId: req.userId })
  res.send('Task deleted')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
