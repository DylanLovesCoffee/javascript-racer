$(document).ready(function(){

  function rollDie(){
    return Math.floor((Math.random() * 6) + 1)
  }

  function movePlayer(player){
    var playerTrack = document.getElementById(player);
    var position = playerTrack.getElementsByClassName('active');

    var newIndex = $(position).index() + rollDie();
    $(position).removeClass('active');
    $(playerTrack.children[newIndex]).addClass('active')
  }

});
