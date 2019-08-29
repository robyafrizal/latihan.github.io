function countSheep(str) {
  var output = ''
  for(var i = 1; i <= str; i++) {
    output += i + 'sheep..'
  }
  return output
}
console.log(countSheep(1))
console.log(countSheep(2))
console.log(countSheep(3))
console.log('-----------Next Question-------------')

function century(str) {
  if(str <= 100) {
    return 1
  }
  return Math.ceil(str/100)
}
console.log(century(2019))
console.log('-----------Next Question-------------')

function superHero(name = 'someone', damage) {
  return {
    name: name,
    position: 'Destroyer',
    health: 100,
    damage: damage
  }
}
console.log(superHero('Roby', 50))
console.log('-----------Next Question-------------')
