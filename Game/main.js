function buttonHandler(){
  if (game.state == 'stop'){
    game.start();
  }
  else {
    game.jump();
  }
};