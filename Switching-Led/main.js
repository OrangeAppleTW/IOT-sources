function houseHandler(){
  if (house1.state == 'on') {
    led1.off();
    led2.on();
    house1.state = 'off';
    house2.state = 'on';
  } else {
    led1.on();
    led2.off();
    house1.state = 'on';
    house2.state = 'off';
  }
};