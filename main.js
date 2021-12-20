// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let hearts = document.querySelectorAll(".like-glyph");
hearts.forEach(heart => heart.addEventListener('click', handleLiking));

function handleLiking(e){
    if (e.target.textContent === EMPTY_HEART){
    mimicServerCall()
      .then( heart => {
      e.target.className = "activated-heart";
      e.target.textContent = FULL_HEART;
      console.log("they like me");
      })
    .catch((reject) => {
      let modal = document.getElementById("modal")
      modal.classList.remove("hidden")
      setTimeout(()=> modal.className = "hidden", 3000)
      })
    }
  else {
    e.target.classList.remove("activated-heart")
    e.target.textContent = EMPTY_HEART
    console.log("they do not like me anymore")
  }
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
