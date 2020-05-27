$(document).ready(() => {
  console.log("Test")
  const socket = io();
  const textBox = document.getElementById("text");
  $('#chat').submit((event) => {
    event.preventDefault();

    socket.emit('message', textBox.val());
    textBox.value = "";
    return false;
  });

  socket.on('message', function(msg){
   // $('#send').append($('<li>').text(msg));
    $('#send').append($('<p>').text(msg));
  });
});