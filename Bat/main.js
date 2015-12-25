function buttonHandler(){
  heart.add(3);
  led.off();
};

function touchedHandler(){
  heart.remove();
  if(heart.hearts == 0){
    led.on();
  }
};