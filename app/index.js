const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node.js running in Azure Web App! I am Joshna, this is sample for my demo !!!');
});

// Use Azure’s provided PORT or 3000 for local/testing
const port = process.env.PORT || 3000;

// Start server only if not in test environment
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`App running on port ${port}`);
  });
}

module.exports = app;
