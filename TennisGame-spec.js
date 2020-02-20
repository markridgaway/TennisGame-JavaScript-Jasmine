// https://cyber-dojo.org/kata/edit/cv7yrH
// TennisGame-spec.js

'use strict';

const TennisGame = require('./TennisGame.js');

describe('TennisGame ', () => {
  var tennisGame;
  
  beforeEach( () => {
    tennisGame = new TennisGame();
  });
  
  it('handles Love - Love score', () => {
    expect(tennisGame.score()).toEqual('Love - Love');
  });
    
  it('Server can score a point', () => {
    var originalServerPoints = tennisGame.ServerPoints();
    tennisGame.serverScoresPoint();
    expect(tennisGame.ServerPoints()).toEqual(originalServerPoints + 1);
  });
    
  it('handles 15 - Love score', () => {
    tennisGame.serverScoresPoint();
    expect(tennisGame.ServerPoints()).toEqual(1);
    expect(tennisGame.score()).toEqual('15 - Love');
  });
  
  it('Receiver can score a point', () => {
    var originalReceiverPoints = tennisGame.ReceiverPoints();
    tennisGame.receiverScoresPoint();
    expect(tennisGame.ReceiverPoints()).toEqual(originalReceiverPoints + 1);
  });
  
  it('handles Love - 15 score', () => {
    tennisGame.receiverScoresPoint();
    expect(tennisGame.ReceiverPoints()).toEqual(1);
    expect(tennisGame.score()).toEqual('Love - 15');
  });
  
  it('handles 15 - 15 score', () => {
    tennisGame.serverScoresPoint();   // 15 - Love
    tennisGame.receiverScoresPoint(); // 15 - 15
    expect(tennisGame.ServerPoints()).toEqual(1);
    expect(tennisGame.ReceiverPoints()).toEqual(1);
    expect(tennisGame.score()).toEqual('15 - 15');
  });
  
  it('handles 30 - 30 score', () => {
    tennisGame.serverScoresPoint();   // 15 - Love
    tennisGame.receiverScoresPoint(); // 15 - 15
    tennisGame.serverScoresPoint();   // 30 - 15
    tennisGame.receiverScoresPoint(); // 30 - 30
    expect(tennisGame.ServerPoints()).toEqual(2);
    expect(tennisGame.ReceiverPoints()).toEqual(2);
    expect(tennisGame.score()).toEqual('30 - 30');
  });
  
  it('handles 40 - 30 score', () => {
    tennisGame.serverScoresPoint();   // 15 - Love
    tennisGame.serverScoresPoint();   // 30 - Love
    tennisGame.receiverScoresPoint(); // 30 - 15
    tennisGame.receiverScoresPoint(); // 30 - 30
    tennisGame.serverScoresPoint();   // 40 - 30
    expect(tennisGame.ServerPoints()).toEqual(3);
    expect(tennisGame.ReceiverPoints()).toEqual(2);
    expect(tennisGame.score()).toEqual('40 - 30');
  });
  
  it('handles 30 - 40 score', () => {
    tennisGame.serverScoresPoint();   // 15 - Love
    tennisGame.receiverScoresPoint(); // 15 - 15
    tennisGame.serverScoresPoint();   // 30 - 15
    tennisGame.receiverScoresPoint(); // 30 - 30
    tennisGame.receiverScoresPoint(); // 30 - 40
    expect(tennisGame.ServerPoints()).toEqual(2);
    expect(tennisGame.ReceiverPoints()).toEqual(3);
    expect(tennisGame.score()).toEqual('30 - 40');
  });
  
  // At this point, we've validated that we can handle
  // all scores (Love, 15, 30, 40) before Deuce and Game.
  // In other words, before either player has scored 4 points.
  
  it('handles Deuce score', () => {
    tennisGame.serverScoresPoint();   // 15 - Love
    tennisGame.serverScoresPoint();   // 30 - Love
    tennisGame.receiverScoresPoint(); // 30 - 15
    tennisGame.serverScoresPoint();   // 40 - 15
    tennisGame.receiverScoresPoint(); // 40 - 30
    tennisGame.receiverScoresPoint(); // Deuce
    expect(tennisGame.score()).toEqual('Deuce');
  });    
  
  it('handles Game Server before Deuce', () => {
    tennisGame.serverScoresPoint();   // 15 - Love
    tennisGame.serverScoresPoint();   // 30 - Love
    tennisGame.receiverScoresPoint(); // 30 - 15
    tennisGame.serverScoresPoint();   // 40 - 15
    tennisGame.receiverScoresPoint(); // 40 - 30
    tennisGame.serverScoresPoint();   // Game Server
    expect(tennisGame.score()).toEqual('Game Server');
  });  
  
  it('handles Game Receiver before Deuce', () => {
    tennisGame.serverScoresPoint();     // 15 - Love
    tennisGame.serverScoresPoint();     // 30 - Love
    tennisGame.receiverScoresPoint();   // 30 - 15
    tennisGame.receiverScoresPoint();   // 30 - 30
    tennisGame.receiverScoresPoint();   // 30 - 40
    tennisGame.receiverScoresPoint();   // Game Receiver
    expect(tennisGame.score()).toEqual('Game Receiver');
  });  
  
  it('handles Game Server after Deuce', () => {
    tennisGame.serverScoresPoint();   // 15 - Love
    tennisGame.serverScoresPoint();   // 30 - Love
    tennisGame.serverScoresPoint();   // 40 - Love
    tennisGame.receiverScoresPoint(); // 40 - 15
    tennisGame.receiverScoresPoint(); // 40 - 30
    tennisGame.receiverScoresPoint(); // Deuce
    tennisGame.serverScoresPoint();   // Advantage Server
    tennisGame.serverScoresPoint();   // Game Server
    expect(tennisGame.score()).toEqual('Game Server');
  });  

  it('handles Game Receiver after Deuce', () => {
    tennisGame.serverScoresPoint();   // 15 - Love
    tennisGame.serverScoresPoint();   // 30 - Love
    tennisGame.serverScoresPoint();   // 40 - Love
    tennisGame.receiverScoresPoint(); // 40 - 15
    tennisGame.receiverScoresPoint(); // 40 - 30
    tennisGame.receiverScoresPoint(); // Deuce
    tennisGame.receiverScoresPoint();   // Advantage Receiver
    tennisGame.receiverScoresPoint();   // Game Receiver
    expect(tennisGame.score()).toEqual('Game Receiver');
  });  

  it('handles Advantage Server', () => {
    tennisGame.serverScoresPoint();   // 15 - Love
    tennisGame.serverScoresPoint();   // 30 - Love
    tennisGame.serverScoresPoint();   // 40 - Love
    tennisGame.receiverScoresPoint(); // 40 - 15
    tennisGame.receiverScoresPoint(); // 40 - 30
    tennisGame.receiverScoresPoint(); // Deuce
    tennisGame.serverScoresPoint();   // Advantage Server
    expect(tennisGame.score()).toEqual('Advantage Server');
  });  

  it('handles Advantage Receiver', () => {
    tennisGame.serverScoresPoint();   // 15 - Love
    tennisGame.serverScoresPoint();   // 30 - Love
    tennisGame.serverScoresPoint();   // 40 - Love
    tennisGame.receiverScoresPoint(); // 40 - 15
    tennisGame.receiverScoresPoint(); // 40 - 30
    tennisGame.receiverScoresPoint(); // Deuce
    tennisGame.receiverScoresPoint();   // Advantage Receiver
    expect(tennisGame.score()).toEqual('Advantage Receiver');
  });  

});