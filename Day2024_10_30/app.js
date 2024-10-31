
const express = require('express');
const app = express();
const todoRouter = require('./src/routers/todos');
const port = 3000;

app.use(express.json()); 
app.use('/todos',todoRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
  

