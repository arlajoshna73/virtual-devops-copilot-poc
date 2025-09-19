const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node.js running in Azure Web App!');
});

// Use Azure’s provided PORT (defaults to 80)
const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
