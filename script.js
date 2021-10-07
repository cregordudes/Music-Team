//alert("Use numpad keys or mousepad to create Music!");

card = document.querySelectorAll('.card');
for (let i = 0; i < card.length; i++) {
   let audio = new Audio('/sounds/samples/'+ (i) +'.wav');
   
   card[i].addEventListener('click', function () {
      if (audio.paused) {
         audio.play();
     }else{
         audio.currentTime = 0
     }
      audio.play();
   }); 
   
}

window.addEventListener('keydown', function(event) {
   const logKey = event.key;
   switch (logKey) {
      case '7':
         card[0].classList.add('active');
         key_audio = new Audio('/sounds/samples/0.wav');
         if (key_audio.paused) {
            key_audio.play();
        }else{
            key_audio.currentTime = 0
        }
         key_audio.play();
         setTimeout(()=>{card[0].classList.remove('active')}, 200);
         break;
      
      case '8':
         card[1].classList.add('active');
         key_audio = new Audio('/sounds/samples/1.wav');
         if (key_audio.paused) {
            key_audio.play();
        }else{
            key_audio.currentTime = 0
        }
         key_audio.play();
         setTimeout(()=>{card[1].classList.remove('active')}, 200);
         break;
      
         
      case '9':
         card[2].classList.add('active');
         key_audio = new Audio('/sounds/samples/2.wav');
         if (key_audio.paused) {
            key_audio.play();
        }else{
            key_audio.currentTime = 0
        }
         key_audio.play();
         setTimeout(()=>{card[2].classList.remove('active')}, 200);
         break;

      case '4':
         card[3].classList.add('active');
         key_audio = new Audio('/sounds/samples/3.wav');
         if (key_audio.paused) {
            key_audio.play();
        }else{
            key_audio.currentTime = 0
        }
         key_audio.play();
         setTimeout(()=>{card[3].classList.remove('active')}, 200);
         break;

      case '5':
         card[4].classList.add('active');
         key_audio = new Audio('/sounds/samples/4.wav');
         if (key_audio.paused) {
            key_audio.play();
        }else{
            key_audio.currentTime = 0
        }
         key_audio.play();
         setTimeout(()=>{card[4].classList.remove('active')}, 200);
         break;

      case '6':
         card[5].classList.add('active');
         key_audio = new Audio('/sounds/samples/5.wav');
         if (key_audio.paused) {
            key_audio.play();
        }else{
            key_audio.currentTime = 0
        }
         key_audio.play();
         setTimeout(()=>{card[5].classList.remove('active')}, 200);
         break;
      case '1':
         card[6].classList.add('active');
         key_audio = new Audio('/sounds/samples/6.wav');
         if (key_audio.paused) {
            key_audio.play();
        }else{
            key_audio.currentTime = 0
        }
         key_audio.play();
         setTimeout(()=>{card[6].classList.remove('active')}, 200);
         break;

      case '2':
         card[7].classList.add('active');
         key_audio = new Audio('/sounds/samples/7.wav');
         if (key_audio.paused) {
            key_audio.play();
        }else{
            key_audio.currentTime = 0
        }
         key_audio.play();
         setTimeout(()=>{card[7].classList.remove('active')}, 200);
         break;

      case '3':
         card[8].classList.add('active');
        
         key_audio = new Audio('/sounds/samples/8.wav');
         if (key_audio.paused) {
            key_audio.play();
        }else{
            key_audio.currentTime = 0
        }
         key_audio.play();
         setTimeout(()=>{card[8].classList.remove('active')}, 200);
         break;

      case '0':
         card[9].classList.add('active');
         
         key_audio = new Audio('/sounds/samples/9.wav');
         if (key_audio.paused) {
            key_audio.play();
        }else{
            key_audio.currentTime = 0
        }
         key_audio.play();
         setTimeout(()=>{card[9].classList.remove('active')}, 200);
         break;
   }

   

});
