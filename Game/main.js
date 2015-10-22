function main(){
  if (game.state == 'stop'){
    if (game.score > game.highestScore){
      // led1.on();
      // led2.off();
    }
    else {
      // led1.on();
      // led2.on();
    }
  }
  else if (game.state == 'playing'){
    // led1.off();
    // led2.on();
  }
};

function buttonHandler(){
  if (game.state == 'stop'){
    game.start();
  }
  else {
    game.jump();
  }
};