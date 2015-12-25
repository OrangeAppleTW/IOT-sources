function houseHandler(){
  if (house.state == 'on') {
    led.off();
    house.state = 'off';
  } else {
    led.on();
    house.state = 'on';
  }
};