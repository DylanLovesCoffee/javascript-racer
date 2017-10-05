$(document).ready(function(){

  function rollDie() {
    return Math.floor((Math.random() * 6) + 1)
  }

  function movePlayer(playerId) {
    var playerTrack = document.getElementById(playerId);
    var position = playerTrack.getElementsByClassName('active');
    var newIndex = $(position).index() + rollDie();
    var finishLine = $(playerTrack).children().last().index()

    $(position).removeClass('active');

    if (newIndex > finishLine) {
      $(playerTrack.children[finishLine]).addClass('active');
    } else {
      $(playerTrack.children[newIndex]).addClass('active');
    }

    playerWin(playerId)
  }

  function playerWin(playerId) {
    var playerTrack = document.getElementById(playerId);
    var position = playerTrack.getElementsByClassName('active');
    var finishLine = $(playerTrack).children().last().index();

    if($(position).index() === finishLine){
      if(playerId === 'player1_track'){
        var winner = 'Player 1'
      } else if(playerId === 'player2_track'){
        var winner = 'Player 2'
      }
      alert('Winner winner, chicken dinner! Congratulations, ' + winner + '!')
      resetPositions()
    };
  }

  function resetPositions() {
    var position = document.getElementsByClassName('active');
    var tracks = $('.racer-table').find('tr')
    $(position).removeClass('active');

    for (var i = 0; i < tracks.length; i++) {
      $(tracks[i].children[0]).addClass('active')
    }
  }

  $(document).on('keyup', function(event){
    if(event.which === 81){
      movePlayer('player1_track');
    } else if(event.which === 80) {
      movePlayer('player2_track');
    };
  });

});
