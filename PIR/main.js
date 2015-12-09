function detected(){
  led.on();
  light.state = 'on';
}

function ended(){
  led.off();
  light.state = 'off';
}