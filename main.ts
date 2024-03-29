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
    if (evaluation) {
        points[picked] = points[picked] + 1
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        music.play(music.stringPlayable("C E G - - - - - ", 900), music.PlaybackMode.UntilDone)
        evaluation = false
    } else {
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
    }
})
input.onButtonPressed(Button.B, function () {
    if (evaluation) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
        music.play(music.stringPlayable("C - C - - - - - ", 600), music.PlaybackMode.UntilDone)
        evaluation = false
    } else {
        indexPicked = randint(0, list.length - 1)
        picked = list[indexPicked]
        list.removeAt(indexPicked)
        if (picked > 0) {
            sendNumber = 200 + picked
            for (let index = 0; index < 5; index++) {
                radio.sendNumber(sendNumber)
                basic.pause(200)
            }
            evaluation = true
            basic.showLeds(`
                . . # . .
                . # . # .
                # . . . #
                . # . # .
                . . # . .
                `)
        }
    }
})
let indexPicked = 0
let picked = 0
let sendNumber = 0
let evaluation = false
let points: number[] = []
let list: number[] = []
radio.setGroup(4)
list = []
points = [
0,
0,
0,
0,
0,
0,
0,
0,
0,
0
]
evaluation = false
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
