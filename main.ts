radio.onReceivedNumber(function (receivedNumber) {
    if (0 < receivedNumber && receivedNumber < 50) {
        if (list.indexOf(receivedNumber) < 0) {
            list.unshift(receivedNumber)
            led.plot((receivedNumber - 1) % 5, (receivedNumber - 1) / 5)
            radio.sendNumber(receivedNumber + 50)
        }
    }
    if (100 < receivedNumber && receivedNumber < 150) {
        if (list.indexOf(receivedNumber - 100) >= 0) {
            list.removeAt(list.indexOf(receivedNumber - 100))
            led.unplot((receivedNumber - 101) % 5, (receivedNumber - 101) / 5)
            radio.sendNumber(receivedNumber + 50)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    list = []
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    sendNumber = -1
    radio.sendNumber(300)
})
input.onButtonPressed(Button.B, function () {
    indexPicked = randint(0, list.length - 1)
    picked = list[indexPicked]
    list.removeAt(indexPicked)
    if (picked > 0) {
        sendNumber = 200 + picked
        for (let index = 0; index < 5; index++) {
            radio.sendNumber(sendNumber)
            basic.pause(200)
        }
    }
})
let picked = 0
let indexPicked = 0
let sendNumber = 0
let list: number[] = []
radio.setGroup(4)
list = []
sendNumber = -1
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
	
})
