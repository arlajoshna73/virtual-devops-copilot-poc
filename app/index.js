const express = require("express");
const app = express();

const port = process.env.PORT || 3000;  // Azure will inject PORT=80
app.get("/", (req, res) => res.send("Hello from Dockerized Node app!"));

app.listen(port, () => console.log(`App running on port ${port}`));
