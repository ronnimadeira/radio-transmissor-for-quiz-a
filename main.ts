input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("A")
})
radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    radio.sendString("B")
})
radio.setGroup(5)
basic.showIcon(IconNames.Chessboard)
