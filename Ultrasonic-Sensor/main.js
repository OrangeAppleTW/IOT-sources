function ping(cm){
  // var number = mail.number;
  distance.innerHTML = cm;
  if (cm < 10){
    // mail.number = number + 1;
    led.on();
  }
  else {
    led.off();
  }
}