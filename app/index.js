const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node.js running in Azure Web App! I am Joshna, this is sample for my demo !!!');
});

const port = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`App running on port ${port}`);
  });
}

module.exports = app;
