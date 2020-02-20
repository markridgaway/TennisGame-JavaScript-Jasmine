// https://cyber-dojo.org/kata/edit/cv7yrH
// Steps to write TennisGame-spec.js


#1
'use strict';

const TennisGame = require('./TennisGame.js');

var tennisgame = new TennisGame();

describe('TennisGame ', () => {
  it('handles Love - Love score', () => {
    expect(tennisgame.score()).toEqual("Love - Love");
  });
});
-------------------------------------------------------------------------

#2
'use strict';

const TennisGame = require('./TennisGame.js');

describe('TennisGame ', () => {
  var tennisgame;
  
  beforeEach( () => {
    tennisgame = new TennisGame();
  });
  
  it('handles Love - Love score', () => {
    expect(tennisgame.score()).toEqual("Love - Love");
  });
  
  it('handles 15 - Love score', () => {
    tennisgame.serverPoints += 1;
    expect(tennisgame.score()).toEqual("15 - Love");
  });
  
});

-------------------------------------------------------------------------
#3
'use strict';

const TennisGame = require('./TennisGame.js');

describe('TennisGame ', () => {
  var tennisgame;
  
  beforeEach( () => {
    tennisgame = new TennisGame();
  });
  
  it('handles Love - Love score', () => {
    expect(tennisgame.score()).toEqual("Love - Love");
  });
  
  it('handles 15 - Love score', () => {
    tennisgame.serverScoresPoint();
    expect(tennisgame.score()).toEqual("15 - Love");
  });
  
  it('Server can score a point', () => {
    var originalServerPoints = tennisgame.ServerPoints();
    tennisgame.serverScoresPoint();
    expect(tennisgame.ServerPoints()).toEqual(originalServerPoints + 1);
  });
    
});

-------------------------------------------------------------------------
#4
'use strict';

const TennisGame = require('./TennisGame.js');

describe('TennisGame ', () => {
  var tennisgame;
  
  beforeEach( () => {
    tennisgame = new TennisGame();
  });
  
  it('handles Love - Love score', () => {
    expect(tennisgame.score()).toEqual('Love - Love');
  });
  
  it('handles 15 - Love score', () => {
    tennisgame.serverScoresPoint();
    expect(tennisgame.score()).toEqual('15 - Love');
  });
  
  it('Server can score a point', () => {
    var originalServerPoints = tennisgame.ServerPoints();
    tennisgame.serverScoresPoint();
    expect(tennisgame.ServerPoints()).toEqual(originalServerPoints + 1);
  });
    
  it('handles Love - 15 score', () => {
    tennisgame.receiverScoresPoint();
    expect(tennisgame.score()).toEqual('Love - 15');
  });
  
});


-------------------------------------------------------------------------
#5
'use strict';

const TennisGame = require('./TennisGame.js');

describe('TennisGame ', () => {
  var tennisgame;
  
  beforeEach( () => {
    tennisgame = new TennisGame();
  });
  
  it('handles Love - Love score', () => {
    expect(tennisgame.score()).toEqual('Love - Love');
  });
  
  it('handles 15 - Love score', () => {
    tennisgame.serverScoresPoint();
    expect(tennisgame.score()).toEqual('15 - Love');
  });
  
  it('handles Love - 15 score', () => {
    tennisgame.receiverScoresPoint();
    expect(tennisgame.score()).toEqual('Love - 15');
  });
  
  it('handles 15 - 15 score', () => {
    tennisgame.serverScoresPoint();
    tennisgame.receiverScoresPoint();
    expect(tennisgame.score()).toEqual('15 - 15');
  });
  
});

-------------------------------------------------------------------------
#6
'use strict';

const TennisGame = require('./TennisGame.js');

describe('TennisGame ', () => {
  var tennisgame;
  
  beforeEach( () => {
    tennisgame = new TennisGame();
  });
  
  it('handles Love - Love score', () => {
    expect(tennisgame.score()).toEqual('Love - Love');
  });
  
  it('handles 15 - Love score', () => {
    tennisgame.serverScoresPoint();
    expect(tennisgame.score()).toEqual('15 - Love');
  });
  
  it('handles Love - 15 score', () => {
    tennisgame.receiverScoresPoint();
    expect(tennisgame.score()).toEqual('Love - 15');
  });
  
  it('handles 15 - 15 score', () => {
    tennisgame.serverScoresPoint();
    tennisgame.receiverScoresPoint();
    expect(tennisgame.score()).toEqual('15 - 15');
  });
  
  it('handles 30 - 30 score', () => {
    tennisgame.serverScoresPoint();
    tennisgame.serverScoresPoint();
    tennisgame.receiverScoresPoint();
    tennisgame.receiverScoresPoint();
    expect(tennisgame.score()).toEqual('30 - 30');
  });
    
});

-------------------------------------------------------------------------
#7
'use strict';

const TennisGame = require('./TennisGame.js');

describe('TennisGame ', () => {
  var tennisgame;
  
  beforeEach( () => {
    tennisgame = new TennisGame();
  });
  
  it('handles Love - Love score', () => {
    expect(tennisgame.score()).toEqual('Love - Love');
  });
  
  it('handles 15 - Love score', () => {
    tennisgame.serverScoresPoint();
    expect(tennisgame.score()).toEqual('15 - Love');
  });
  
  it('handles Love - 15 score', () => {
    tennisgame.receiverScoresPoint();
    expect(tennisgame.score()).toEqual('Love - 15');
  });
  
  it('handles 15 - 15 score', () => {
    tennisgame.serverScoresPoint();
    tennisgame.receiverScoresPoint();
    expect(tennisgame.score()).toEqual('15 - 15');
  });
  
  it('handles 30 - 30 score', () => {
    tennisgame.serverScoresPoint();
    tennisgame.serverScoresPoint();
    tennisgame.receiverScoresPoint();
    tennisgame.receiverScoresPoint();
    expect(tennisgame.score()).toEqual('30 - 30');
  });
  
  it('handles Deuce score', () => {
    tennisgame.serverScoresPoint();
    tennisgame.serverScoresPoint();
    tennisgame.receiverScoresPoint();
    tennisgame.serverScoresPoint();
    tennisgame.receiverScoresPoint();
    tennisgame.receiverScoresPoint();
    expect(tennisgame.score()).toEqual('Deuce');
  });    
  
  it('handles Deuce score', () => {
    tennisgame.serverScoresPoint();
    tennisgame.serverScoresPoint();
    tennisgame.receiverScoresPoint();
    tennisgame.serverScoresPoint();
    tennisgame.receiverScoresPoint();
    tennisgame.receiverScoresPoint();
    expect(tennisgame.score()).toEqual('Deuce');
  });  
  
  it('handles Game Server before Deuce', () => {
    tennisgame.serverScoresPoint();
    tennisgame.serverScoresPoint();
    tennisgame.receiverScoresPoint();
    tennisgame.serverScoresPoint();
    tennisgame.receiverScoresPoint();
    tennisgame.serverScoresPoint();
    expect(tennisgame.score()).toEqual('Game Server');
  });  

});

-------------------------------------------------------------------------
#8
'use strict';

const TennisGame = require('./TennisGame.js');

describe('TennisGame ', () => {
  var tennisgame;
  
  beforeEach( () => {
    tennisgame = new TennisGame();
  });
  
  it('handles Love - Love score', () => {
    expect(tennisgame.score()).toEqual('Love - Love');
  });
  
  it('handles 15 - Love score', () => {
    tennisgame.serverScoresPoint();
    expect(tennisgame.score()).toEqual('15 - Love');
  });
  
  it('handles Love - 15 score', () => {
    tennisgame.receiverScoresPoint();
    expect(tennisgame.score()).toEqual('Love - 15');
  });
  
  it('handles 15 - 15 score', () => {
    tennisgame.serverScoresPoint();
    tennisgame.receiverScoresPoint();
    expect(tennisgame.score()).toEqual('15 - 15');
  });
  
  it('handles 30 - 30 score', () => {
    tennisgame.serverScoresPoint();
    tennisgame.serverScoresPoint();
    tennisgame.receiverScoresPoint();
    tennisgame.receiverScoresPoint();
    expect(tennisgame.score()).toEqual('30 - 30');
  });
  
  it('handles Deuce score', () => {
    tennisgame.serverScoresPoint();
    tennisgame.serverScoresPoint();
    tennisgame.receiverScoresPoint();
    tennisgame.serverScoresPoint();
    tennisgame.receiverScoresPoint();
    tennisgame.receiverScoresPoint();
    expect(tennisgame.score()).toEqual('Deuce');
  });    
  
  it('handles Deuce score', () => {
    tennisgame.serverScoresPoint();
    tennisgame.serverScoresPoint();
    tennisgame.receiverScoresPoint();
    tennisgame.serverScoresPoint();
    tennisgame.receiverScoresPoint();
    tennisgame.receiverScoresPoint();
    expect(tennisgame.score()).toEqual('Deuce');
  });  
  
  it('handles Game Server before Deuce', () => {
    tennisgame.serverScoresPoint();
    tennisgame.serverScoresPoint();
    tennisgame.receiverScoresPoint();
    tennisgame.serverScoresPoint();
    tennisgame.receiverScoresPoint();
    tennisgame.serverScoresPoint();
    expect(tennisgame.score()).toEqual('Game Server');
  });  

});

-------------------------------------------------------------------------
#9
'use strict';

const TennisGame = require('./TennisGame.js');

describe('TennisGame ', () => {
  var tennisgame;
  
  beforeEach( () => {
    tennisgame = new TennisGame();
  });
  
  it('handles Love - Love score', () => {
    expect(tennisgame.score()).toEqual('Love - Love');
  });
  
  it('handles 15 - Love score', () => {
    tennisgame.serverScoresPoint();
    expect(tennisgame.score()).toEqual('15 - Love');
  });
  
  it('handles Love - 15 score', () => {
    tennisgame.receiverScoresPoint();
    expect(tennisgame.score()).toEqual('Love - 15');
  });
  
  it('handles 15 - 15 score', () => {
    tennisgame.serverScoresPoint();
    tennisgame.receiverScoresPoint();
    expect(tennisgame.score()).toEqual('15 - 15');
  });
  
  it('handles 30 - 30 score', () => {
    tennisgame.serverScoresPoint();
    tennisgame.serverScoresPoint();
    tennisgame.receiverScoresPoint();
    tennisgame.receiverScoresPoint();
    expect(tennisgame.score()).toEqual('30 - 30');
  });
  
  it('handles Deuce score', () => {
    tennisgame.serverScoresPoint();
    tennisgame.serverScoresPoint();
    tennisgame.receiverScoresPoint();
    tennisgame.serverScoresPoint();
    tennisgame.receiverScoresPoint();
    tennisgame.receiverScoresPoint();
    expect(tennisgame.score()).toEqual('Deuce');
  });    
  
  it('handles Deuce score', () => {
    tennisgame.serverScoresPoint();
    tennisgame.serverScoresPoint();
    tennisgame.receiverScoresPoint();
    tennisgame.serverScoresPoint();
    tennisgame.receiverScoresPoint();
    tennisgame.receiverScoresPoint();
    expect(tennisgame.score()).toEqual('Deuce');
  });  
  
  it('handles Game Server before Deuce', () => {
    tennisgame.serverScoresPoint();
    tennisgame.serverScoresPoint();
    tennisgame.receiverScoresPoint();
    tennisgame.serverScoresPoint();
    tennisgame.receiverScoresPoint();
    tennisgame.serverScoresPoint();
    expect(tennisgame.score()).toEqual('Game Server');
  });  
  
  it('handles Game Receiver before Deuce', () => {
    tennisgame.serverScoresPoint();     // 15 - Love
    tennisgame.serverScoresPoint();     // 30 - Love
    tennisgame.receiverScoresPoint();   // 30 - 15
    tennisgame.receiverScoresPoint();   // 30 - 30
    tennisgame.receiverScoresPoint();   // 30 - 40
    tennisgame.receiverScoresPoint();   // Game Receiver
    expect(tennisgame.score()).toEqual('Game Receiver');
  });  

});

-------------------------------------------------------------------------
#10
