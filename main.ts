radio.onReceivedNumber(function (receivedNumber) {
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    radio.sendNumber(0)
    if (receivedNumber < 100) {
        if (list.indexOf(receivedNumber) < 0) {
            list.unshift(receivedNumber)
        }
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `)
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        radio.sendNumber(index + 101)
    }
    gamestate = 0
})
input.onButtonPressed(Button.B, function () {
    gamestate = 1
    picked = list[randint(0, list.length - 1)]
    radio.sendNumber(200 + picked)
})
let picked = 0
let gamestate = 0
let list: number[] = []
radio.setGroup(4)
list = []
gamestate = 0
basic.forever(function () {
	
})
