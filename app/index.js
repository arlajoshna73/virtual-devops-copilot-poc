const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node.js running in Azure Web App! I am Joshna, this is sample for my demo !!!');
});

// Use Azure’s provided PORT (defaults to 80)
const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

module.exports = app;  // <-- ADD THIS
