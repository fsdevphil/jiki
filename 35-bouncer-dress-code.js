let outfit = getOutfit()
let age = getAge()

let isOnGuestList = onGuestList()
let isFormal = outfit === "ballgown" || outfit === "tuxedo"
let isSmart = outfit === "suit" || outfit === "dress"

if (isFormal || isSmart) {
  letIn()
  offerCanapes()
  if (isFormal && age >= 18) {
    offerChampagne()
  }
} else if (age < 18 && isOnGuestList) {
  letIn()
} else {
  turnAway()
}
