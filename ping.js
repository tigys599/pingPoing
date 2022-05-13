const playerOneBtn = document.querySelector("#p1btn");
const playerTwoBtn = document.querySelector("#p2btn");
const resetBtn = document.querySelector('#rst');
const howMany = document.querySelector('#howmany');
const playerOneScoreh1 = document.querySelector('span');
const playerTwoScoreh1 = document.querySelector('#span2');
let playerOneScore = 0;
let playerTwoScore = 0;
let isGameOn = true;

function resetButton() {
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneScoreh1.innerText = playerOneScore;
    playerTwoScoreh1.innerText = playerTwoScore;
    playerOneBtn.setAttribute('class', 'p1btn')
    playerTwoBtn.setAttribute('class', 'p2btn')
    isGameOn = true;
}

playerOneBtn.addEventListener('click', () => {
    if (playerOneScore < parseInt(howMany.value) && isGameOn === true) {
        playerOneScore += 1;
        playerOneScoreh1.innerText = playerOneScore;
        if (playerOneScore === parseInt(howMany.value)) {
            playerOneBtn.setAttribute('class', 'btngray')
            playerTwoBtn.setAttribute('class', 'btngray')
            isGameOn = false;
        }
    }
})

playerTwoBtn.addEventListener('click', () => {
    if (playerTwoScore < parseInt(howMany.value) && isGameOn === true) {
        playerTwoScore += 1
        playerTwoScoreh1.innerText = playerTwoScore;
        if (playerTwoScore === parseInt(howMany.value)) {
            isGameOn = false;
            playerOneBtn.setAttribute('class', 'btngray')
            playerTwoBtn.setAttribute('class', 'btngray')
        }
    }
})

howMany.addEventListener('change', resetButton)

resetBtn.addEventListener('click', resetButton)

const body = document.querySelector('body')

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            body.setAttribute('class', color)
            resolve();
        }, delay)
    })
}

function delayColor() {
    delayedColorChange('red', 1000)
        .then(() => delayedColorChange('gradient1', 2000))
        .then(() => delayedColorChange('gradient2', 2000))
        .then(() => delayedColorChange('gradient3', 2000))
        .then(() => delayedColorChange('gradient4', 2000))
        .then(() => delayedColorChange('gradient5', 2000))
        .then(() => delayedColorChange('gradient6', 2000))
        .then(() => delayedColorChange('gradient7', 2000))
        .then(() => delayedColorChange('gradient8', 2000))
        .then(() => delayedColorChange('gradient9', 2000))
        .then(() => delayedColorChange('gradient10', 2000))
}
delayColor()



class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`

    }
}

class Cat extends Pet {
    meow() {
        return `Meow!`
    }
}




class Dog extends Pet {

    bark() {
        return `woof!`
    }
}

const newCat = new Cat('Ralf', 4)
const newDog = new Dog('Bob', 5)