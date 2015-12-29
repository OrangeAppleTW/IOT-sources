function houseHandler(){
  if (house.state == 'on') {
    relay.off();
    house.state = 'off';
  } else {
    relay.on();
    house.state = 'on';
  }
}