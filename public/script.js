$(document).ready(() => {
  console.log("Test")
  const socket = io();
  var name = $('#user');
  $('#chat').submit((event) => {
    event.preventDefault();

    socket.emit('message', $('#text').val());
    return false;
  });

  socket.on('message', function(msg){
    var today = new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric"});
    $('#send').append(today + name).append($('<p>').text(msg));
  });
});