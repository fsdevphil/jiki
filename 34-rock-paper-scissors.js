let yukisChoice = getYukiChoice()
let andosChoice = getAndoChoice()
let result = "Ando"
let doesYukiWin = (yukisChoice === "rock" && andosChoice === "scissors") || (yukisChoice === "paper" && andosChoice === "rock") || (yukisChoice === "scissors" && andosChoice === "paper")

if (yukisChoice === andosChoice) {
  result="tie"
} else if (doesYukiWin) {
  result = "Yuki"
}

announceResult(result)
