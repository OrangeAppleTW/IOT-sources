function ping(cm){
  if (cm < 10){
      led_R.on();
      led_Y.off();
      led_G.off();
      light.Red = 'on';
      light.Yellow = 'off';
      light.Green = 'off';
    setTimeout(function(){
      led_Y.on();
      light.Yellow = 'on';
    }, 1000);
    setTimeout(function(){
      led_R.off();
      led_Y.off();
      led_G.on();
      light.Red = 'off';
      light.Yellow = 'off';
      light.Green = 'on';
    }, 2000);
    setTimeout(function(){
      led_R.off();
      led_Y.off();
      led_G.off();
      light.Red = 'off';
      light.Yellow = 'off';
      light.Green = 'off';
    }, 3000);
  }
};