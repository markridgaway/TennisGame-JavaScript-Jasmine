// https://cyber-dojo.org/kata/edit/cv7yrH
// Steps to write TennisGame.js


#1
'use strict';

function TennisGame () {
  this.score = function () {
    return "Love - Love";
  };
}

module.exports = TennisGame;
-------------------------------------------------------------------------

#2
'use strict';

function TennisGame () {
  
  this.serverPoints = 0;
  
  this.score = function () {
    var scoretext = "";
    
    if (this.serverPoints === 0) {
      scoretext = "Love - Love";
    }
    if (this.serverPoints === 1) {
      scoretext = "15 - Love";
    }
    
    return scoretext;
  };
}

module.exports = TennisGame;

-------------------------------------------------------------------------
#3
'use strict';

function TennisGame () {
  
  var serverPoints = 0;
  //var receiverPoints = 0;
  
  this.score = function () {
    var scoretext = "";
    
    if (serverPoints === 0) {
      scoretext = "Love - Love";
    }
    if (serverPoints === 1) {
      scoretext = "15 - Love";
    }
    
    return scoretext;
  };
  
  this.serverScoresPoint = function () {
    serverPoints += 1;
  };
}

module.exports = TennisGame;

-------------------------------------------------------------------------
#4
'use strict';

function TennisGame () {
  
  var pointsText = [ 'Love', '15', '30', '40' ];
  var serverPoints = 0;
  var receiverPoints = 0;
  
  this.score = function () {
    return pointsText[serverPoints] + ' - ' + pointsText[receiverPoints];
  };
  
  this.serverScoresPoint = function () {
    serverPoints += 1;
  };
  
  this.receiverScoresPoint = function () {
    receiverPoints += 1;
  };
}

module.exports = TennisGame;


-------------------------------------------------------------------------
#5
'use strict';

function TennisGame () {
  
  var pointsText = [ 'Love', '15', '30', '40' ];
  var serverPoints = 0;
  var receiverPoints = 0;
  
  this.score = function () {
    return pointsText[serverPoints] + ' - ' + pointsText[receiverPoints];
  };
  
  this.serverScoresPoint = function () {
    serverPoints += 1;
  };
  
  this.receiverScoresPoint = function () {
    receiverPoints += 1;
  };
}

module.exports = TennisGame;


-------------------------------------------------------------------------
#6
'use strict';

function TennisGame () {
  
  var pointsText = [ 'Love', '15', '30', '40' ];
  var serverPoints = 0;
  var receiverPoints = 0;
  
  this.score = function () {
    return pointsText[serverPoints] + ' - ' + pointsText[receiverPoints];
  };
  
  this.serverScoresPoint = function () {
    serverPoints += 1;
  };
  
  this.receiverScoresPoint = function () {
    receiverPoints += 1;
  };
}

module.exports = TennisGame;

-------------------------------------------------------------------------
#7
'use strict';

function TennisGame () {
  
  var pointsText = [ 'Love', '15', '30', '40' ];
  var serverPoints = 0;
  var receiverPoints = 0;
  
  this.score = function () {
    if ((serverPoints < 3) && (receiverPoints < 3)) {
      return pointsText[serverPoints] + ' - ' + pointsText[receiverPoints];
    }
    
    if (serverPoints === receiverPoints) {
      return 'Deuce';
    }
     
    return 'ARE YOU KIDDING ME!';
  };
  
  this.serverScoresPoint = function () {
    serverPoints += 1;
  };
  
  this.receiverScoresPoint = function () {
    receiverPoints += 1;
  };
}

module.exports = TennisGame;

-------------------------------------------------------------------------
#8
'use strict';

function TennisGame () {
  
  var pointsText = [ 'Love', '15', '30', '40' ];
  var serverPoints = 0;
  var receiverPoints = 0;
  
  this.score = function () {
    if ((serverPoints < 3) && (receiverPoints < 3)) {
      return pointsText[serverPoints] + ' - ' + pointsText[receiverPoints];
    }
    
    if (serverPoints === receiverPoints) {
      return 'Deuce';
    }

    if (((3 < serverPoints) || (3 < receiverPoints)) &&
        (1 < Math.abs(serverPoints - receiverPoints))) {
      if (receiverPoints < serverPoints) {
        return 'Game Server';
      }
      else {
        return 'Game Receiver';
      }
    }

    return 'ARE YOU KIDDING ME!';
  };
  
  this.serverScoresPoint = function () {
    serverPoints += 1;
  };
  
  this.receiverScoresPoint = function () {
    receiverPoints += 1;
  };
}

module.exports = TennisGame;

-------------------------------------------------------------------------
#9
 no change
 
-------------------------------------------------------------------------
#10
 