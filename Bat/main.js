function buttonHandler(){
  heart.add(3);
  led.off();
};

function touchedHandler(){
  heart.remove();
  console.log(heart.get_hearts());
  if(heart.get_hearts() == 0){
    led.on();
  }
};