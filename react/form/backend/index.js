const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3010;
// Connect to MongoDB
mongoose.connect('mongodb+srv://kumaran:cUaelQDwiWCkReJW@cluster1.mcfsfzz.mongodb.net/persondetails')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB: ', error);
});
// Define MongoDB schema and model
const personSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  website:String,
  contact:String,
  number:String,
  another:String,
  notes:String,
  type:String,
  category:String,
  commission:Number,
  date:Date,
  logo:String,
  criticalAccount:Array,
  payment:String,
});
const Person = mongoose.model('Person', personSchema);
// Middleware
app.use(cors());
app.use(bodyParser.json());
// Routes
app.get('/api/persons', async (req, res) => {
  try {
    const persons = await Person.find();
    res.json(persons);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.post('/api/persons', async (req, res) => {
  try {
    const newPerson = new Person(req.body);
    const savedPerson = await newPerson.save();
    res.json(savedPerson);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.put('/api/persons/:id', async (req, res) => {
  try {
    const updatedPerson = await Person.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedPerson);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.delete('/api/persons/:id', async (req, res) => {
  try {
    await Person.findByIdAndDelete(req.params.id);
    res.json({ message: 'Person deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});