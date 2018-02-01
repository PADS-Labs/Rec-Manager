const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();
const server = app.listen(PORT, () =>
  console.log(`App listening on port ${PORT}...`)
);

// Serve static files
app.use('/', express.static(path.join(__dirname, '/dist/')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})
