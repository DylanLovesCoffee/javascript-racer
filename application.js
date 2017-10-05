$(document).ready(function(){

  function rollDie(){
    return Math.floor((Math.random() * 6) + 1)
  }

  function movePlayer(player){
    var playerTrack = document.getElementById(player);
    var position = playerTrack.getElementsByClassName('active');
    var newIndex = $(position).index() + rollDie();
    var finishLine = $(playerTrack).children().last().index()

    $(position).removeClass('active');

    if (newIndex > finishLine) {
      $(playerTrack.children[finishLine]).addClass('active');
    } else {
      $(playerTrack.children[newIndex]).addClass('active');
    }

    playerWin(player)
  }

  function playerWin(player){
    var playerTrack = document.getElementById(player);
    var position = playerTrack.getElementsByClassName('active');
    var finishLine = $(playerTrack).children().last().index();

    if($(position).index() === finishLine){
      if(player === 'player1_track'){
        var winner = 'Player 1'
      } else if(player === 'player2_track'){
        var winner = 'Player 2'
      }
      alert('Winner winner, chicken dinner! Congratulations, ' + winner + '!')
    };
  }

  $(document).on('keyup', function(event){
    if(event.which === 81){
      movePlayer('player1_track');
    } else if(event.which === 80) {
      movePlayer('player2_track');
    };
  });

});
