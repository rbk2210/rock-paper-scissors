/* Selected options */
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');
let playerSelected = '';
let cpuSlected = '';

let message = document.querySelector('.message');
let chance = document.querySelector('.chances')
let lifePlayer = 3
let ph1 = document.querySelector('.ph1')
let ph2 = document.querySelector('.ph2')
let ph3 = document.querySelector('.ph3')
let cpuh1 = document.querySelector('.cpuh1')
let cpuh2 = document.querySelector('.cpuh2')
let cpuh3 = document.querySelector('.cpuh3')
let lifeCpu = 3


const playerBox = document.querySelector('.player-box');
const cpuBox = document.querySelector('.cpu-box');
const continuebtn = document.getElementById("continue")
const playbtn = document.getElementById('play')

const winlose = document.querySelector('.win-lose')





function playGame() {
    
    message.style.animation = "none";
    winlose.style.color = 'black'
    let randomNum = Math.floor(Math.random() * 3) + 1
    if (playerSelected === '') {
        message.style.color = 'red';
        message.textContent = 'Por favor elije una opcion'
        cpuBox.style.animation = 'animationvs 1s infinite'
    }

    if (randomNum === 1) {
        cpuSlected = 'rock'
        cpuBox.style.animation = 'none'
        cpuBox.style.transform = "translateY(0)"
        cpuBox.style.backgroundImage = "url(../img/rock.png)";
    } else if (randomNum === 2) {
        cpuSlected = 'paper'
        cpuBox.style.animation = 'none'
        cpuBox.style.transform = "translateY(0)"
        cpuBox.style.backgroundImage = "url(../img/paper.png)";
    } else if (randomNum === 3) {
        cpuSlected = 'scissors'
        cpuBox.style.animation = 'none'
        cpuBox.style.transform = "translateY(0)"
        cpuBox.style.backgroundImage = "url(../img/scissors.png)";
    }
    /* Selected rock */
    if (playerSelected === 'rock' && cpuSlected === 'scissors') {
        message.textContent = 'Piedra gana a tijeras'
        playerBox.style.animation = 'none'
        playerBox.style.transform = "translateY(0)"
        playerBox.style.backgroundImage = "url(../img/rock.png)";
        message.style.color = 'green'
        lifeCpu -= 1
        if (lifeCpu === 2) {
            cpuh3.style.animation = 'none'
            cpuh3.style.filter = 'brightness(0) invert(0)'
        } else if (lifeCpu === 1) {
            cpuh2.style.animation = 'none'
            cpuh2.style.filter = 'brightness(0) invert(0)'
        } else if (lifeCpu === 0) {
            cpuh1.style.animation = 'none'
            cpuh1.style.filter = 'brightness(0) invert(0)'
            continuebtn.disabled = false
            playbtn.disabled = true
            rock.disabled = true
            paper.disabled = true
            scissors.disabled = true
            setTimeout(() => {
                winlose.textContent = '¡Ganaste!'
                winlose.style.color = 'green'
            }, 1)
        }
    } else if (playerSelected === 'rock' && cpuSlected === 'rock') {
        message.textContent = 'Empate'
        playerBox.style.animation = 'none'
        playerBox.style.transform = "translateY(0)"
        playerBox.style.backgroundImage = "url(../img/rock.png)"
        message.style.color = 'black'
        message.style.animation = "draw .5s ease-in-out";
    } else if (playerSelected === 'rock' && cpuSlected === 'paper') {
        message.textContent = 'Papel gana a piedra'
        playerBox.style.animation = 'none'
        playerBox.style.transform = "translateY(0)"
        playerBox.style.backgroundImage = "url(../img/rock.png)"
        message.style.color = 'red'
        lifePlayer -= 1
        if (lifePlayer === 2) {
            ph3.style.animation = 'none'
            ph3.style.filter = 'brightness(0) invert(0)'
        } else if (lifePlayer === 1) {
            ph2.style.animation = 'none'
            ph2.style.filter = 'brightness(0) invert(0)'
        } else if (lifePlayer === 0) {
            ph1.style.animation = 'none'
            ph1.style.filter = 'brightness(0) invert(0)'
            continuebtn.disabled = false
            playbtn.disabled = true
            rock.disabled = true
            paper.disabled = true
            scissors.disabled = true
            setTimeout(() => {
                winlose.textContent = '¡Perdiste!'
                winlose.style.color = 'red'
            }, 1)
        }
    }

    /* Selected paper */
    if (playerSelected === 'paper' && cpuSlected === 'scissors') {
        message.style.color = 'red'
        playerBox.style.animation = 'none'
        playerBox.style.transform = "translateY(0)"
        playerBox.style.backgroundImage = "url(../img/paper.png)";
        message.textContent = 'Tijeras ganan a papel'
        lifePlayer -= 1
        if (lifePlayer === 2) {
            ph3.style.animation = 'none'
            ph3.style.filter = 'brightness(0) invert(0)'
        } else if (lifePlayer === 1) {
            ph2.style.animation = 'none'
            ph2.style.filter = 'brightness(0) invert(0)'
        } else if (lifePlayer === 0) {
            ph1.style.animation = 'none'
            ph1.style.filter = 'brightness(0) invert(0)'
            continuebtn.disabled = false
            playbtn.disabled = true
            rock.disabled = true
            paper.disabled = true
            scissors.disabled = true
            setTimeout(() => {
                winlose.textContent = '¡Perdiste!'
                winlose.style.color = 'red'
            }, 1)
        }
    } else if (playerSelected === 'paper' && cpuSlected === 'rock') {
        message.style.color = 'green'
        playerBox.style.animation = 'none'
        playerBox.style.transform = "translateY(0)"
        playerBox.style.backgroundImage = "url(../img/paper.png)";
        message.textContent = 'Papel gana a piedra'
        lifeCpu -= 1
        if (lifeCpu === 2) {
            cpuh3.style.animation = 'none'
            cpuh3.style.filter = 'brightness(0) invert(0)'
        } else if (lifeCpu === 1) {
            cpuh2.style.animation = 'none'
            cpuh2.style.filter = 'brightness(0) invert(0)'
        } else if (lifeCpu === 0) {
            cpuh1.style.animation = 'none'
            cpuh1.style.filter = 'brightness(0) invert(0)'
            continuebtn.disabled = false
            playbtn.disabled = true
            rock.disabled = true
            paper.disabled = true
            scissors.disabled = true
            setTimeout(() => {
                winlose.textContent = '¡Ganaste!'
                winlose.style.color = 'green'
            }, 1)
        }
    } else if (playerSelected === 'paper' && cpuSlected === 'paper') {
        message.style.color = 'black'
        playerBox.style.animation = 'none'
        playerBox.style.transform = "translateY(0)"
        playerBox.style.backgroundImage = "url(../img/paper.png)";
        message.textContent = 'Empate'
        message.style.animation = "draw .5s ease-in-out";
    }

    /* Selected scissors */
    if (playerSelected === 'scissors' && cpuSlected === 'scissors') {
        message.style.color = 'black'
        playerBox.style.animation = 'none'
        playerBox.style.transform = "translateY(0)"
        playerBox.style.backgroundImage = "url(../img/scissors.png)";
        message.textContent = 'Empate'
        message.style.animation = "draw .5s ease-in-out";
    } else if (playerSelected === 'scissors' && cpuSlected === 'rock') {
        message.style.color = 'red'
        playerBox.style.animation = 'none'
        playerBox.style.transform = "translateY(0)"
        playerBox.style.backgroundImage = "url(../img/scissors.png)";
        message.textContent = 'Piedra gana a tijeras'
        lifePlayer -= 1
        if (lifePlayer === 2) {
            ph3.style.animation = 'none'
            ph3.style.filter = 'brightness(0) invert(0)'
        } else if (lifePlayer === 1) {
            ph2.style.animation = 'none'
            ph2.style.filter = 'brightness(0) invert(0)'
        } else if (lifePlayer === 0) {
            ph1.style.animation = 'none'
            ph1.style.filter = 'brightness(0) invert(0)'
            continuebtn.disabled = false
            playbtn.disabled = true
            rock.disabled = true
            paper.disabled = true
            scissors.disabled = true
            setTimeout(() => {
                winlose.textContent = '¡Perdiste!'
                winlose.style.color = 'red'
            }, 1)
        }
    } else if (playerSelected === 'scissors' && cpuSlected === 'paper') {
        message.textContent = 'Tijeras gana a papel'
        playerBox.style.animation = 'none'
        playerBox.style.transform = "translateY(0)"
        playerBox.style.backgroundImage = "url(../img/scissors.png)";
        message.style.color = 'green'
        lifeCpu -= 1
        if (lifeCpu === 2) {
            cpuh3.style.animation = 'none'
            cpuh3.style.filter = 'brightness(0) invert(0)'
        } else if (lifeCpu === 1) {
            cpuh2.style.animation = 'none'
            cpuh2.style.filter = 'brightness(0) invert(0)'
        } else if (lifeCpu === 0) {
            cpuh1.style.animation = 'none'
            cpuh1.style.filter = 'brightness(0) invert(0)'
            continuebtn.disabled = false
            playbtn.disabled = true
            rock.disabled = true
            paper.disabled = true
            scissors.disabled = true
            setTimeout(() => {
                winlose.textContent = '¡Ganaste!'
                winlose.style.color = 'green'
            }, 1)
        }
    }
}

rockButton.addEventListener('click', () => {
    message.textContent = ''
    playerSelected = 'rock'
    paper.checked = false;
    scissors.checked = false;
    paperButton.style.filter = '';
    scissorsButton.style.filter = '';
    setTimeout(() => {
        if (rock.checked) {
            rockButton.style.filter = 'drop-shadow(0 0 5px #fff)';
        } else {
            rockButton.style.filter = '';
        }
    }, 0)
})

paperButton.addEventListener('click', () => {
    message.textContent = ''
    playerSelected = 'paper'
    rock.checked = false;
    rockButton.style.filter = '';
    scissors.checked = false;
    scissorsButton.style.filter = '';

    setTimeout(() => {
        if (paper.checked) {
            paperButton.style.filter = 'drop-shadow(0 0 5px #fff)';
        } else {
            paperButton.style.filter = '';
        }
    }, 0)
})

scissorsButton.addEventListener('click', () => {
    message.textContent = ''
    playerSelected = 'scissors'
    rock.checked = false;
    rockButton.style.filter = '';
    paper.checked = false;
    paperButton.style.filter = '';

    setTimeout(() => {
        if (scissors.checked) {
            scissorsButton.style.filter = 'drop-shadow(0 0 5px #fff)'
        } else {
            scissorsButton.style.filter = '';
        }
    }, 0)
})

function resetGame() {
    rock.disabled = false
    paper.disabled = false
    scissors.disabled = false

    rock.checked = false
    paper.checked = false
    scissors.checked = false

    continuebtn.disabled = true
    playbtn.disabled = false
    cpuh1.style.animation = 'animationHeart 1s ease-in-out infinite'
    cpuh1.style.filter = 'none'
    cpuh2.style.animation = 'animationHeart 1s ease-in-out infinite'
    cpuh2.style.filter = 'none'
    cpuh3.style.animation = 'animationHeart 1s ease-in-out infinite'
    cpuh3.style.filter = 'none'

    ph1.style.animation = 'animationHeart 1s ease-in-out infinite'
    ph1.style.filter = 'none'
    ph2.style.animation = 'animationHeart 1s ease-in-out infinite'
    ph2.style.filter = 'none'
    ph3.style.animation = 'animationHeart 1s ease-in-out infinite'
    ph3.style.filter = 'none'

    playerBox.style.animation = 'changeImage 1s infinite'
    cpuBox.style.animation = 'changeImage 1s infinite'

    rockButton.style.filter = ''
    paperButton.style.filter = ''
    scissorsButton.style.filter = ''
    winlose.textContent = ''
    message.textContent = ''
    playerSelected = ''
    cpuSlected = ''
    lifeCpu = 3
    lifePlayer = 3
}