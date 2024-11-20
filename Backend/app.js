import express from 'express';
import mongoose from 'mongoose';
import User from './models/user.js';

const app = express();
const PORT = 5000;

app.use(express.json());

mongoose
  .connect('mongodb://localhost:27017/testdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

app.post('/create-user', async (req, res) => {
  try {
    const { name, email, password, phoneNumber } = req.body;
    const newUser = new User({ name, email, password, phoneNumber });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
