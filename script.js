const cards = document.querySelectorAll(".card")
const dropzones = document.querySelectorAll(".cards")

cards.forEach((card) => {
  card.addEventListener("dragstart", dragstart)
  card.addEventListener("drag", drag)
  card.addEventListener("dragend", dragend)
})
function dragstart() {
  cards.forEach((card) => card.classList.add("highlight"))

  this.classList.add("is-dragging")
}
function drag() {}
function dragend() {
  cards.forEach((card) => card.classList.remove("highlight"))

  this.classList.remove("is-dragging")
}

cards.forEach((card) => {
  card.addEventListener("dragenter", dragenter)
  card.addEventListener("dragover", dragover)
  card.addEventListener("dragleave", dragleave)
  card.addEventListener("drop", drop)
})

function dragenter() {}
function dragover() {
  this.classList.add("over")

  //get dragging card
  const cardBeingDragged = document.querySelector(".is-dragging")

  this.parentNode.append(cardBeingDragged)
}
function dragleave() {
  this.classList.remove("over")
}
function drop() {}
