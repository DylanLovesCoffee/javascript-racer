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

  function playerWin(player){
    var playerTrack = document.getElementById(player);
    var position = playerTrack.getElementsByClassName('active');
    if($(position).index() >= (playerTrack.children.length)-6){
      if(player == 'player1_strip'){
        var winner = 'Player 1'
      } else if(player == 'player2_strip'){
        var winner = 'Player 2'
      }
      alert('Winner winner, chicken dinner! Congratulations, ' + winner + '!')
    };
  }

  $(document).on('keyup', function(event){
    if(event.which === 81){
      movePlayer('player1_strip');
      playerWin('player1_strip')
    } else if(event.which === 80) {
      movePlayer('player2_strip');
      playerWin('player2_strip')
    };
  });

});
