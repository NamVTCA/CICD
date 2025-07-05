// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 9999;

app.get('/', (req, res) => {
  res.send('Hello CI/CD 👋');
});
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

