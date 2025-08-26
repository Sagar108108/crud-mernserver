const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('MongoDB Connected'))
.catch(err => console.log(err));


app.use('/api/items', require('./routes/items'));

const PORT = process.env.PORT || 5000;

app.listen(process.env.PORT, ()=>{
  console.log(`Server running on port http://localhost:${process.env.PORT}`)
});

