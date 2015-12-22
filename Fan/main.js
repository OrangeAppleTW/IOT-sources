function read(evt){
  chart.draw(evt.temperature, evt.humidity);
  if (evt.temperature > 30){
    relay.on();
  }
  else {
    relay.off();
  }
}