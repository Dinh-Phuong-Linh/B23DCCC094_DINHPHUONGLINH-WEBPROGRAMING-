
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const todoRoutes = require('./src/routes/todoRoutes');
const port = 3001;

app.use(bodyParser.json());
app.use(express.json()); 
app.use('/todos',todoRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });


