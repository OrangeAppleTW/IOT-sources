function buttonHandler(){
  heart.add(3);
  led.off();
};

function touchedHandler(){
  heart.remove();
  if(heart.get_hearts() == 0){
    led.on();
  }
};