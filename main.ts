input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("A")
})
radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    if (receivedString == "A") {
        basic.showIcon(IconNames.LeftTriangle)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    radio.sendString("B")
})
radio.setGroup(5)
basic.showIcon(IconNames.Chessboard)
