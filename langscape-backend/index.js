const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/signup', (req, res) => {
  // Signup logic here (save user data in the database)
  res.send('Signup successful');
});

app.post('/login', (req, res) => {
  // Login logic here
  res.send('Login successful');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
