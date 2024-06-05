// reference: https://css-tricks.com/star-ratings/

const stars = document.querySelectorAll('.star')
let currentRating = 0

document.addEventListener('click', resetRating)

stars.forEach(star => {
  star.addEventListener('click', finalizeRating)
  star.addEventListener('mouseover', fillColor)
  star.addEventListener('mouseout', resetColor)
})

function finalizeRating(e) {
  e.preventDefault()

  currentRating = e.target.id
  this.fillColor(e)
}

function fillColor(e) {
  e.preventDefault()

  const target = e.target
  const id = target.id

  stars.forEach(star => {
    if(parseInt(star.id, 10) <= id) {
      star.style.color = 'orange'
    }
  })
}

function resetColor(e) {
  e.preventDefault()

  stars.forEach(star => {
    if(parseInt(star.id, 10) > currentRating) {
      star.style.color = 'gray'
    }
  })
}

function resetRating(e) {
  const name = e.target.className

  if(!name.includes('star')) {
    stars.forEach(star => {
      star.style.color = 'gray'
    })
    currentRating = 0
  }
}
