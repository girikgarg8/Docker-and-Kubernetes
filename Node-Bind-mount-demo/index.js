const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.get("/home", (req, res) => {
  return res.json({ message: "Homecoming" });
});

app.get("/local", (req, res) => {
    return res.json({ message: "Hello, this is a change made on the host machine" });
});

app.get("/container",(req, res) =>{
    return res.json({message : "Hello, this is a change made in the Docker container" });
});

app.listen(process.env.PORT, () => {
  console.log(`Started the server at PORT: ${process.env.PORT}`);
});
