let x = 28
let y = 75
let holeDepth = 9
let shotLength = getShotLength()
let isHoled = (shotLength >= 58 && shotLength <= 62)

repeat(shotLength) {
  x = x + 1
  moveTo(x, y)
}

if (isHoled) {
  repeat(holeDepth) {
    y = y + 1
    moveTo(x, y)
  }
  fireFireworks()
}
