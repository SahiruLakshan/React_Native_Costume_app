const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const productRouter = require("./Routes/product");
const port = 3000;

dotenv.config();
mongoose
  .connect(process.env.URL)
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({limit:'10mb',extended:true}));

app.use('/',productRouter);

app.listen(process.env.PORT || port, ()=>console.log(`App listening on port ${port}!`));