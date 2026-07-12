let x = 0
let stripe = 1
let color = ""
repeat(20) {
  if (stripe === 1 || stripe === 20) {
    color = "purple"
  } else if (stripe % 4 === 0) {
    color = "green"
  } else if (stripe % 2 === 0) {
    color = "blue"
  } else {
    color = "yellow"
  }
  rectangle(x, 0, 5, 100, color)
  x = x + 5
  stripe = stripe + 1
}
