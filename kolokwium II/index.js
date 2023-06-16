const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');

const app = express();
const port = 3000;

mongoose
  .connect(
    'mongodb://mongo:27017/app',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

  const dataSchema = new mongoose.Schema({
    _id: String,
    userId: String,
    productId: String,
    quantity: Number
  });
  
  const Data = mongoose.model('Data', dataSchema);

  fs.readFile('data.json', 'utf8', (err, jsonString) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
  
    try {
      const data = JSON.parse(jsonString);

      Data.deleteMany({}, (err) => {
        if (err) throw err;
        console.log(`Data deleted`);
        });
  
      Data.insertMany(data.data)
        .then(res => {
          console.log("Documents inserted successfully");
        })
        .catch(err => {
          console.error('Error inserting documents', err);
        });
    } catch (err) {
      console.error('Error parsing JSON string', err);
    }
  });

app.get('/data', (req, res) => {
    Data.find()
        .then(products => res.json(products))
        .catch(err => res.status(404).json({ msg: 'No products found' }));
});

app.get('/health', (req, res) => {
    res.send('OK');
  });

app.delete('/data/:id', (req, res) => {
    const id = req.params.id;
    Data.deleteOne({ _id: id }, (err, res) => {
        if (err) throw err;
        console.log(`Data deleted`);
    });
});

app.listen(port, () => console.log(`Server running on port ${port}`));