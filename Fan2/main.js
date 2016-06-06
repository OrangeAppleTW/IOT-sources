function read(evt){
  chart.draw(evt.temperature, evt.humidity);
  if (evt.temperature > 24){
    relay.on();
    buzzer.play();
  }
  else {
    relay.off();
  }
}