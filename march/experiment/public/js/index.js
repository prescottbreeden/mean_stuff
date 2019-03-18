$(document).ready(function() {
  buildDom();
});

function newMessage() {
  $.post('/message', () => {
    // so logic stuff
  })
}