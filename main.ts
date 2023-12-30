radio.onReceivedNumber(function (receivedNumber) {
    if (gamestate == 0) {
        if (0 < receivedNumber && receivedNumber < 50) {
            if (list.indexOf(receivedNumber) < 0) {
                list.unshift(receivedNumber)
                led.plot((receivedNumber - 1) % 5, (receivedNumber - 1) / 5)
            }
        }
        if (100 < receivedNumber && receivedNumber < 150) {
            if (list.indexOf(receivedNumber - 100) >= 0) {
                list.removeAt(list.indexOf(receivedNumber - 100))
                led.unplot((receivedNumber - 101) % 5, (receivedNumber - 101) / 5)
            }
        }
        radio.sendNumber(receivedNumber + 50)
    }
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 3; index++) {
        radio.sendNumber(index + 151)
    }
    gamestate = 0
    list = []
    list = [
    0,
    0,
    0,
    0,
    0,
    0
    ]
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    if (gamestate == 0) {
        indexPicked = randint(0, list.length - 1)
        picked = list[indexPicked]
        list.removeAt(indexPicked)
        gamestate = 1
        radio.sendNumber(200 + picked)
    }
})
let picked = 0
let indexPicked = 0
let gamestate = 0
let list: number[] = []
radio.setGroup(4)
list = []
list = [
0,
0,
0,
0,
0,
0
]
gamestate = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
	
})
