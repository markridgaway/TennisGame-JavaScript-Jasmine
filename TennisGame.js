// https://cyber-dojo.org/kata/edit/cv7yrH
// TennisGame.js

'use strict';

function TennisGame () {
  
  var pointsText = [ 'Love', '15', '30', '40' ];
  var serverPoints = 0;
  var receiverPoints = 0;
  
  this.score = function () {
  
    if ((serverPoints < 3) && (receiverPoints < 3) ||   // Before any score of 40
        (serverPoints === 3) && (receiverPoints < 3) || // Server with score of 40 before Deuce
        (serverPoints < 3) && (receiverPoints === 3))   // Receiver with score of 40 before Deuce
    {
      return pointsText[serverPoints] + ' - ' + pointsText[receiverPoints];
    }  
    
    if (serverPoints === receiverPoints) {
      return 'Deuce';
    }

    if (((3 < serverPoints) || (3 < receiverPoints)) &&
        (1 < Math.abs(serverPoints - receiverPoints)))
    {
      if (receiverPoints < serverPoints) {
        return 'Game Server';
      }
      else {
        return 'Game Receiver';
      }
    }

    if ((3 <= serverPoints) && (3 <= receiverPoints)) {
      if (receiverPoints < serverPoints) {
        return 'Advantage Server';
      }
      else {
        return 'Advantage Receiver';
      }
    }
    
    return 'YOU CAN NOT BE SERIOUS!';  // Thank you, John McEnroe!
  };
  
  this.ServerPoints = function () {
    return serverPoints;
  };
  
  this.ReceiverPoints = function () {
    return receiverPoints;
  };
  
  this.serverScoresPoint = function () {
    serverPoints += 1;
  };
  
  this.receiverScoresPoint = function () {
    receiverPoints += 1;
  };
}

module.exports = TennisGame;