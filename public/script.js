$(document).ready(() => {
  console.log("Test")
  const socket = io();
  $('#chat').submit((event) => {
    event.preventDefault();

    socket.emit('message', $('#text').val());
    return false;
  });

  socket.on('message', function(msg){
   // $('#send').append($('<li>').text(msg));
    $('#send').append($('<p>').text(msg));
  });
});