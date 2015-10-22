function main(){
  if (house1.state == 'on') {
    led.off();
    house1.state = 'off';
    house2.state = 'off';
  } else {
    led.on();
    house1.state = 'on';
    house2.state = 'on';
  }
};