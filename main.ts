input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("A")
})
basic.showString("A")
radio.setGroup(5)
