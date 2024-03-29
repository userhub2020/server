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
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
    yline = 0
    xline = 0
    LCD1IN8.LCD_ClearBuf()
    for (let index = 0; index <= points.length - 3; index++) {
        xline = 0
        if (index > 9 && index < 20) {
            xline = 50
        }
        if (index >= 20 && index < 30) {
            xline = 100
        }
        LCD1IN8.DisNumber(
        xline,
        yline % 100,
        index + 1,
        0
        )
        LCD1IN8.DisNumber(
        xline + 25,
        yline % 100,
        points[index + 1],
        0
        )
        yline += 10
    }
    LCD1IN8.LCD_Display()
})
let xline = 0
let yline = 0
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
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
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
LCD1IN8.LCD_Init()
LCD1IN8.LCD_ClearBuf()
LCD1IN8.LCD_SetBL(10)
