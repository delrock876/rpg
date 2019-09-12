let wins = 0
characterSelected = false
opponentSelected = false
let yourCharacter = {}
let yourOpponent = {}
let battleMusic = new Audio("assets/audio/pokemusic.mp3")

const uselessCounter = () => {
  let lessCount = Math.floor(Math.random() * 16)
  yourCharacter.health -= lessCount

}
const strongAttack = () => {
  let strAttack = Math.floor(Math.random() * 31) + 10
  yourOpponent.health -= strAttack
}


let allPokemon = [
  {
    name: 'bulbasaur',
    health: 100,
  },

  {
    name: 'pikachu',
    health: 125,
  },
  {
    name: 'caterpie',
    health: 130,
  },

  {
    name: 'squirtle',
    health: 115,
  },

  {
    name: 'charmander',
    health: 110,
  }
]

const checkArray = ()=> {
allPokemon.forEach(function (elem) {
  console.log(elem)
})
}
checkArray()

//ASSIGNS YOUR CHARACTER A POKEMON
const choosePokemon = (pickedPokemon) => {
  yourCharacter = pickedPokemon
  document.getElementById('yI').innerHTML = `<img src="assets/images/${yourCharacter.name}.png" height="200" width="200">`
  document.getElementById('yS').innerHTML = `<h2>Health : ${yourCharacter.health} </h2>
  <a id = "atk-btn" class="waves-effect waves-light btn-small lol" > Attack</a >`
  document.getElementById('change').innerHTML = `Choose Your Opponent!`
  characterSelected = true
}

//ASSIGNS YOUR OPPONENT A POKEMON
const chooseOpponent = (pickedOpponent) => {
  yourOpponent = pickedOpponent
  document.getElementById('oI').innerHTML = `<img src="assets/images/${pickedOpponent.name + '1'}.png" height="200" width="200">`
  document.getElementById('oS').innerHTML = `<h2>Health : ${yourOpponent.health} </h2>`
  document.getElementById('change').innerHTML = `Battle!`
  opponentSelected = true
}


//DISPLAYS CHOSEN POKEMON AND OPPONENT ON PAGE
document.addEventListener('click', function (event) {
  if (characterSelected === false) {
    if (event.target.classList.contains('chosen')) {
      if (event.target.id === 'bulbback') {
        choosePokemon(allPokemon[0])
      } else if (event.target.id === 'charback') {
        choosePokemon(allPokemon[4])
      } else if (event.target.id === 'squirback') {
        choosePokemon(allPokemon[3])
      }
    }
  } else if (characterSelected === true) {
    if (event.target.classList.contains('battle')) {
      if (event.target.id === 'oppBulb') {
        chooseOpponent(allPokemon[0])
      } else if (event.target.id === 'oppChar') {
        chooseOpponent(allPokemon[4])
      } else if (event.target.id === 'oppSquir') {
        chooseOpponent(allPokemon[3])
      } else if (event.target.id === 'oppPika') {
        chooseOpponent(allPokemon[1])
      } else if (event.target.id === 'oppCater') {
        chooseOpponent(allPokemon[2])
      }
    }
  }
})


//MAIN GAME
document.addEventListener('click', function (event) {
  if (opponentSelected === true) {
    battleMusic.play()
    if ((yourCharacter.health > 0) && (yourOpponent.health > 0)) {
      if (event.target.id === 'atk-btn') {
        strongAttack(yourCharacter)
        uselessCounter(yourOpponent)
        // document.createElement('p').innerHTML = `You were attacked for ${lessCount}damage! You did ${strAttack}`
        document.getElementById('yS').innerHTML = `<h2>Health : ${yourCharacter.health} </h2>
        <a id = "atk-btn" class="waves-effect waves-light btn-small lol" > Attack</a >`
        document.getElementById('oS').innerHTML = `<h2>Health : ${yourOpponent.health} </h2>`
      }
    } else if ((yourCharacter.health > 0) && (yourOpponent.health <= 0)) {
      alert('chose next opponent')
      //choose next opponent
    } else if (yourCharacter.health <= 0) {
      alert('you died')
      //restart
    }else if (allPokemon === []){
      alert('you won')
    }
  } 
})

//   <audio>
//     <source src="assets/audio/pokemusic.mp3" type="audio/mp3">
// </audio>