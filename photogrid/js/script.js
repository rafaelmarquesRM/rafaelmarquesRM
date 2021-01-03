let gridPost = document.querySelector('.grid-post')
let postLike = document.querySelector('.grid-description') 
let liked = false

function deuLike() {
  if (liked == false) {
    postLike.innerHTML = '💗 lorem picsum'
    liked = true
  }
  else if (liked == true) {
    postLike.innerHTML = '♡ lorem picsum'
    liked = false
  }
}