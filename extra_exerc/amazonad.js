const next = document.querySelector('fu4rd6c.f1cw2swo');
var counter = 0;

next.click();

function doLike() {
  next.click();
  console.log(`Você já curtiu ${counter} post(s)!`);
}

(function loop() {
    setTimeout(() => {
      doLike();
      loop();  
    }, 10000); // 10 segundos
}());