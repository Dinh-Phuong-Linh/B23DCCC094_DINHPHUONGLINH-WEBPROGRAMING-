const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const todoRoutes = require("./src/routes/todoRoutes");
const port = 3001;
const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000" }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(express.json());
app.use("/", todoRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
