radio.onReceivedNumber(function (receivedNumber) {
    if (gamestate == 0) {
        if (receivedNumber < 100) {
            if (list.indexOf(receivedNumber) < 0) {
                list.unshift(receivedNumber)
            }
        }
    }
    radio.sendNumber(receivedNumber)
    led.plot((receivedNumber - 1) % 5, (receivedNumber - 1) / 5)
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        radio.sendNumber(index + 101)
    }
    gamestate = 0
    list = []
})
input.onButtonPressed(Button.B, function () {
    gamestate = 1
    indexPicked = randint(0, list.length - 1)
    picked = list[indexPicked]
    list.removeAt(indexPicked)
    radio.sendNumber(200 + picked)
    basic.showNumber(list.length)
})
let picked = 0
let indexPicked = 0
let gamestate = 0
let list: number[] = []
radio.setGroup(4)
list = []
gamestate = 0
basic.forever(function () {
	
})
