/*
 * User Weapon
 * ///////////
 * Function userWeapon adalah sebuah function yang berfungsi merubah senjata dari setiap karakter.
 * Function ini menerima parameter yaitu:
 *  - user = tipe data object, merupakan informasi dari user
 *  - weapon = tipe data string, merupakan senjata yang akan dipakai user
 * Function ini akan mengembalikan tipe data string yang berisi informasi perubahan senjata
 * 
 * [EXAMPLE]
 * Input:
 * - User: {
 *    name: 'yogs',
 *    weapon: 'redKnife',
 *    job: 'swordman',
 *    attack: 700
 *  }
 * - newWeapon: blackKnife
 * Proses:
 * - Apabila heroes tersebut dapat menggunakan weapon yang diminta maka akan diubah senjata
 *   dan menyesuaikan dengan output nilai yang baru. (700 - weaponLama(100) + weapon baru (300)) = 900
 * Output:
 * yogs menggunakan senjata blackKnife attack menjadi 900
 * 
 * [RULES]
 * 1. Dilarang menggunakan built in function kecuali .push() dan .unshift()
 * 2. Asumsi senjata awal pemain selalu ada dan sesuai
 * 3. Apabila ada karakter yang berusaha memakai senjata yang tidak bisa dipakai job tersebut
 *    maka kembalikan Invalid Weapon
 

 * DAFTAR WEAPONS
 * 
 * | Name           | Type    | Attack |
 * | -------------- | ------- | ------ |
 * | redKnife       | knife   | 100    |
 * | blackKnife     | knife   | 300    |
 * | crimsonSword   | katana  | 800    |
 * | moonLightSword | katana  | 400    |
 * | starKunai      | kunai   | 80     |
 * | huumaShuriken  | kunai   | 340    |
 * | emptyBracer    | knuckle | 20     |
 * | brokenArms     | knuckle | 40     |
 * 
 * 
 * DAFTAR HEROES
 * 
 * | Job      | Weapon Types         |
 * | -------- | -------------------- |
 * | swordman | knife, katana        |
 * | ninja    | knife, kunai, katana |
 * | samurai  | knife, katana        |
 * | monk     | knuckle              |
*/

// function userWeapon(user, weapon) {
//   var weapons = {
//     'redKnife': {type: 'knife', attack: 100},
//     'blackknife': {type: 'knife', attack: 300},
//     'crimsonSword': {type: 'katana', attack: 800},
//     'moonLightSword': {type: 'katana', attack: 400},
//     'starKunai': {type: 'kunai', attack: 80},
//     'huumaShuriken': {type: 'kunai', attack: 340},
//     'emptyBracer': {type: 'knuckle', attack: 20},
//     'brokenArms': {type: 'knuckle', attack: 40}
//   }
//   var heroes = [
//     {job: 'swordman', weaponsType: ['knife', 'katana']},
//     {job: 'ninja', weaponsType: ['knife', 'kunai', 'katana']},
//     {job: 'samurai', weaponsType: ['knife', 'katana']},
//     {job: 'monk', weaponsType: ['knuckle']}
//   ]
//   var result = false
//   for(var i = 0; i < heroes.length; i++ ) {
//     if(heroes[i].job === user.job) {
//       for(var j = 0; j < heroes[i].weaponsType.length; j++) {
//         if(weapons[weapon].type === heroes[i].weaponsType[j]) {
//           var output = user.attack - weapons[user.weapon].attack + weapons[weapon].attack
//           result = true
//         }
//       }
//     }
//   }
//   if(result) {
//     return user.name + ' menggunakan senjata ' + weapon + ' attack menjadi ' + output
//   }
//   else {
//     return 'invalid weapon'
//   }
// }


function userWeapon(user, weapon) {
  var weapons = [
    ['redKnife', 100, 'knife'],
    ['blackKnife', 300, 'knife'],
    ['crimsonSword', 800, 'katana'],
    ['moonLightSword', 400, 'katana'],
    ['starKunai', 80, 'kunai'],
    ['huumaShuriken', 340, 'kunai'],
    ['emptyBracer', 20, 'knuckle'],
    ['brokenArms', 40, 'knuckle'],
  ]
  var job = {
    swordman: ['knife', 'katana'],
    ninja: ['knife', 'kunai', 'katana'],
    samurai: ['knife', 'katana'],
    monk: ['knuckle'],
  }

  for(var i = 0; i < weapons.length; i++) {
    if(weapon == weapons[i][0]) {
      if(weapons[i][2] == job[user.job][0] ||
      weapons[i][2] == job[user.job][1] ||
      weapons[i][2] == job[user.job][2]) 
      {
        job[user.job][0]
      }
      else {
        return 'invalid weapon'
      }
    }
  }
  var tampung1 = 0
  var tampung2 = 0
  for(var i = 0; i < weapons.length; i++) {
    if(weapon == weapons[i][0]) {
      tampung2 = weapons[i][1]
    }
  }
  for(var i = 0; i < weapons.length; i++) {
    if(user.weapon == weapons[i][0]) {
      tampung1 = weapons[i][1]
    }
  }

  var total = user.attack
  var attack = total - tampung1 + tampung2

  return (user.name + ' menggunakan senjata ' + weapon + ' attack menjadi ' + attack)
}






var yogs = {
  name: 'yogs',
  job: 'swordman',
  weapon: 'redKnife',
  attack: 700
}
console.log(userWeapon(yogs, 'blackKnife'))
// yogs menggunakan senjata blackKnife attack menjadi 900


var arms = {
  name: 'arms',
  job: 'monk',
  weapon: 'emptyBracer',
  attack: 3000
}
console.log(userWeapon(arms, 'crimsonSword'))
// Invalid weapon


console.log(userWeapon({
  name: 'yuss',
  job: 'ninja',
  weapon: 'huumaShuriken',
  attack: 900
}, 'starKunai'))
// yuss menggunakan senjata starKunai attack menjadi 640