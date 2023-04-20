input.onButtonPressed(Button.A, function () {
    isOn = true
})
input.onGesture(Gesture.ScreenDown, function () {
    Tinybit.Music_Car(Tinybit.enMusic.power_up)
})
input.onButtonPressed(Button.B, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_SpinRight)
    basic.pause(300)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
let isOn = false
music.setVolume(127)
isOn = false
basic.forever(function () {
    if (isOn == true) {
        serial.writeValue("x", Tinybit.Ultrasonic_Car())
        while (Tinybit.Ultrasonic_Car() < 15) {
            Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
        }
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
        basic.pause(500)
        Tinybit.CarCtrl(Tinybit.CarState.Car_Back)
        basic.pause(500)
        Tinybit.CarCtrl(Tinybit.CarState.Car_SpinRight)
        basic.pause(500)
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    }
})
