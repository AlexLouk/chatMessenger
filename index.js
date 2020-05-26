const express = require("express");
const app = express();
const path = require("path");
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = process.env.PORT || 3000;

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

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('message', function(msg){
    console.log('message: ' + msg);
    io.emit('message', msg);
  });
});


http.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});