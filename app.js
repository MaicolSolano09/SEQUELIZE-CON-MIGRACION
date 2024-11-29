const express=require('express')
const dotenv = require("dotenv");
const blocksRoutes=require("./routes/blocksRoutes")

require("dotenv").config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use('/api',blocksRoutes);

app.listen(port, () => {
    console.log(`El sevidor esta corriendo en el http://localhost: ${port}`);
  });