const express = require("express");
const path = require("path");

const port = process.env.PORT || 3000;
const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('pages/index');
});

app.get('/index', (req, res) => {
  res.render('pages/index');
});

app.get('/chat', (req, res) => {
  res.render('pages/chat');
});


app.listen(port, () => {

  console.log(`Server is running on Port: ${port}`);

});