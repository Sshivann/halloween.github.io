const audio = document.getElementById("backgroundMusic");


   const audioQuery = document.querySelector("audio");
   window.addEventListener("DOMContentLoaded", event => {
       
       audioQuery.volume = 1;
       audioQuery.play();
   });

   function audiocontroller() {
      if (!audio.paused) {
           audio.pause();
       }
      else {
          audio.play();
      }
   }

   imageTracker = "i"
   function imagechange() {
       var image = document.getElementById("audiocontroller");
       

       if (imageTracker == "i"){
           image.src = "logo/speakeroff.png"
           imageTracker = "I"
       }
       else {
           image.src = "logo/speaker.png"
           imageTracker = "i"
       }
   }

   const menubtn = document.querySelector('.menuhamburger')
   let menuOpen = false;
   menubtn.addEventListener('click', () => {
       if(!menuOpen) {
           menubtn.classList.add('open');
           menuOpen = true;
       } else {
           menubtn.classList.remove('open');
           menuOpen = false;
       }
   });
   const list = document.querySelector('.rightbarstuff');
menubtn.addEventListener('click', () => {
    list.classList.toggle('show');
});


const qq = document.querySelector(".dropdowncontent");
function s() {
        qq.style.display = "flex";
  }

  function c() {
        qq.style.display = "none";
}

function showOrHide() {
    if (qq.style.display === "none") {
      s()
    } else {
      c()
    }
  }
 