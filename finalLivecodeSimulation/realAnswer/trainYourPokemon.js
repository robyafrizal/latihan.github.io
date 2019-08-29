/*
 * Train your pokemon!
 * 
 * Description:
 * 1. Train adalah sebuah fungsi untuk memberi Experience Points (EXP) untuk pokemon-mu dengan memberinya rare candy.
 * 2. Fungsi ini menerima 2 parameter, parameter pertama untuk pokemon yang akan di-train, dan parameter kedua adalah
 *    jumlah rare candy yang akan diberikan kepada pokemon tersebut.
 * 3. Pokemon memiliki properti 'level' yang akan bertambah sesuai dengan jumlah rare candy yang diberikan.
 * 4. Selain itu, beberapa pokemon juga memiliki properti 'evolutionLine' jika dia masih dapat berevolusi menjadi pokemon lain.
 * 
 * Instruction:
 * 1. Buat funsgi train untuk merubah nama pokemon dan type-nya (jika ada perubahan type) yang di-train ketika level pokemon tersebut sudah mencapai level sesuai
 *    dengan 'evolutionLine' berikutnya dan menghapus pokemon dalam properti 'evolutionLine' agar dapat berevolusi lagi jika
 *    mereka mempunyai evolutionLine berikutnya.
 * 2. Fungsi train akan mencetak pesan pesan bahwa proses training sudah berhasil dan sukses berevolusi jika pokemon tersebut
 *    melakukan proses evolusi dan me-return pokemon yang telah di-train.
 * 
 * Example:
 * var bulbasaur = {
 *    name: 'Bulbasaur',
 *    type: [
 *      'grass',
 *      'poison'
 *    ],
 *    level: 5,
 *    evolutionLine: [
 *      {
 *        name: 'Ivysaur',
 *        level: 16,
 *        type: [
 *          'Grass',
 *          'Poison'
 *        ],
 *      },
 *      {
 *        name: 'Venusaur',
 *        level: 32,
 *        type: [
 *          'Grass',
 *          'Poison'
 *        ],
 *      },
 *    ]
 * }
 * 
 * Input:
 * console.log(train(bulbasaur, 11))
 * 
 * Output:
 * Congratulations, your Bulbasaur grew to level 16! And it evolved into Ivysaur!
 * 
 * Rules:
 * 1. Dilarang menggunakan built in function apapun selain .push() dan .unshift()
 */

// function train(pokemon, candy) {
//   // code here
//   var levelPokemonNow = pokemon.level
//   var pokemonName = pokemon.name
//   var pokemonLevelAfterEatCandy = levelPokemonNow + candy
//   var evolvedNames = []

//   if(pokemon.evolutionLine != undefined) {
//     for(var i = 0; i < pokemon.evolutionLine.length; i++) {
//       evolutionLineLevel = pokemon.evolutionLine[i].level
//       if(pokemonLevelAfterEatCandy >= evolutionLineLevel) {
//         evolvedNames.push(pokemon.evolutionLine[i].name)
//       }
//     }
//   }
//   var message = 'Congratulations, your ' + levelPokemonNow + ' grew to level ' + pokemonLevelAfterEatCandy + '!'

//   if(evolvedNames.length > 0) {
//     message = message + ' And it evolved into '
//   }
//   for(var i = 0; i < evolvedNames.length; i++) {
//     message = message + evolvedNames[i] + ' '
//   }

//   return message
// }

function train(pokemon, candy) {
  var nextLevel = pokemon.level + candy
  if(!pokemon.evolutionLine) {
    return 'Congratulations, your ' + pokemon.name + ' grew to LV. ' + nextLevel + '!'
  }

  var nextEvolution = []
  for(var i = 0; i < pokemon.evolutionLine.length; i++) {
    if(i === pokemon['evolutionLine'].length - 1) {
      if(nextLevel >= pokemon.evolutionLine[i].level) {
        nextEvolution.push(' dan ' + pokemon.evolutionLine[i].name)
      }
    }
    else {
      if(nextLevel >- pokemon.evolutionLine[i].level) {
        nextEvolution.push(' ' + pokemon.evolutionLine[i].name)
      }
    }
  }
  return 'Congratulations, your ' + pokemon.name + ' grew to LV. ' + nextLevel + '! And it evolved into ' + nextEvolution
}


var charmander = {
  name: 'Charmander',
  type: ['Fire'],
  level: 5,
  evolutionLine: [
    {
      name: 'Charmeleon',
      type: ['Fire'],
      level: 16
    },
    {
      name: 'Charizard',
      type: ['Fire', 'Flying'],
      level: 36
    }
  ]
}

console.log(train(charmander, 31))
// Congratulations, your Charmander grew to LV. 36! And it evolved into Charmeleon and Charizard!

var mewtwo = {
  name: 'Mewtwo',
  type: ['Psychic'],
  level: 50
}

console.log(train(mewtwo, 50))
// Congratulations, your Mewtwo grew to LV. 100!

var zubat = {
  name: 'Zubat',
  type: [
    'Poison',
    'Flying'
  ],
  level: 10,
  evolutionLine: [
    {
      name: 'Golbat',
      type: [
        'Poison',
        'Flying'
      ],
      level: 22
    },
    {
      name: 'Crobat',
      type: [
        'Poison',
        'Flying'
      ],
      level: 100
    }
  ]
}

console.log(train(zubat, 12))
// Congratulations, your Zubat grew to LV. 22! And it evolved into Golbat!