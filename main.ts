// Code für Schere Stein Papier
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(1000)
    basic.clearScreen()
    let selection = Math.randomRange(1, 3)
    if (selection == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (selection == 2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . # . .
            # # . # #
            # # . # #
            `)
    }
    basic.pause(1000)
    basic.clearScreen()
})

// Code für Benutzer-Eingabe
input.onButtonPressed(Button.A, function () {
    basic.showString("Schere")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Stein")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Papier")
})

// Code für 3-Gewinne-System
input.onButtonPressed(Button.A, function () {
    basic.showString("Schere")
    let computerSelection = Math.randomRange(1, 3)
    if (computerSelection == 1) {
        basic.showString("Unentschieden")
    } else if (computerSelection == 2) {
        basic.showString("Du gewinnst")
    } else {
        basic.showString("Computer gewinnt")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Stein")
    let computerSelection = Math.randomRange(1, 3)
    if (computerSelection == 1) {
        basic.showString("Du gewinnst")
    } else if (computerSelection == 2) {
        basic.showString("Unentschieden")
    } else {
        basic.showString("Computer gewinnt")
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Papier")
    let computerSelection = Math.randomRange(1, 3)
    if (computerSelection == 1) {
        basic.showString("Computer gewinnt")
    } else if (computerSelection == 2) {
        basic.showString("Du gewinnst")
    } else {
        basic
}