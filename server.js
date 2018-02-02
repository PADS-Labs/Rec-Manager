const express = require('express');
const path = require('path');
const players = require('./routes/players');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();


// Serve static files
app.use(bodyParser.json());
app.use('/players', players);
app.use((err, req, res, next) => {
  res.json(err);
});
app.use('/', express.static(path.join(__dirname, '/dist/')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})
const server = app.listen(PORT, () =>
  console.log(`App listening on port ${PORT}...`)
);