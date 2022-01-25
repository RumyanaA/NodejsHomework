const express = require('express');
const app = express();
const port = 3001;

const routes = require('./Routes/Routes');
app.use('/', routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
