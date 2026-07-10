// Shoot the aliens
repeat(10) {
  if (isAlienAbove()) {
    shoot()
  }
  move()
}
