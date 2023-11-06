/*
 fourlineknobfollowsensor package
*/
//% weight=10 icon="\uf013" color=#ff7f00
namespace fourlineknobfollowsensor {
    export enum LineFollower {
        //% blockId="S1_OUT_S2_OUT" block="Sensor1 and sensor2 are out black line"
        S1_OUT_S2_OUT = 0x00,
        //% blockId="S1_OUT_S2_IN" block="Sensor2 in black line but sensor1 not"
        S1_OUT_S2_IN = 0x01,
        //% blockId="S1_IN_S2_OUT" block="Sensor1 in black line but sensor2 not"
        S1_IN_S2_OUT = 0x02,
        //% blockId="S1_IN_S2_IN" block="Sensor1 and sensor2 are in black line "
        S1_IN_S2_IN = 0x03
    }

    export enum LineFollowerSensors {
        //% block="S1"
        S1,
        //% block="S2"
        S2,
        //% block="S3"
        S3,
        //% block="S4"
        S4
    }

    export enum LineColor {
        //% block="Black"
        Black,
        //% block="White"
        White
    }

    export enum SensorPins {
        //% block="P0"
        P0,
        //% block="P1"
        P1,
        //% block="P2"
        P2,
        //% block="P3"
        P3,
        //% block="P4"
        P4,
        //% block="P10"
        P10
    }

    //% weight=98 blockId=line_followers block="Line follower %lineFollowerSensor in %lineColor pin %pin?"
    //% inlineInputMode=inline
    export function line_followers(lineFollowerSensor: LineFollowerSensors, lineColor: LineColor, pin: SensorPins): boolean {
        let status = false;
        let data = 0;
        switch (pin) {
            case SensorPins.P0:
                data = pins.digitalReadPin(DigitalPin.P0)
                if (data == 1) {
                    if (lineColor == LineColor.Black) {
                        status = true;
                    }
                }
                else {
                    if (lineColor == LineColor.White) {
                        status = true;
                    }
                }
                break;
            case SensorPins.P1:
                data = pins.digitalReadPin(DigitalPin.P1)
                if (data == 1) {
                    if (lineColor == LineColor.Black) {
                        status = true;
                    }
                }
                else {
                    if (lineColor == LineColor.White) {
                        status = true;
                    }
                }
                break;
            case SensorPins.P2:
                data = pins.digitalReadPin(DigitalPin.P2)
                if (data == 1) {
                    if (lineColor == LineColor.Black) {
                        status = true;
                    }
                }
                else {
                    if (lineColor == LineColor.White) {
                        status = true;
                    }
                }
                break;
            case SensorPins.P3:
                data = pins.digitalReadPin(DigitalPin.P3)
                if (data == 1) {
                    if (lineColor == LineColor.Black) {
                        status = true;
                    }
                }
                else {
                    if (lineColor == LineColor.White) {
                        status = true;
                    }
                }
                break;
            case SensorPins.P4:
                data = pins.digitalReadPin(DigitalPin.P4)
                if (data == 1) {
                    if (lineColor == LineColor.Black) {
                        status = true;
                    }
                }
                else {
                    if (lineColor == LineColor.White) {
                        status = true;
                    }
                }
                break;
            case SensorPins.P10:
                data = pins.digitalReadPin(DigitalPin.P10)
                if (data == 1) {
                    if (lineColor == LineColor.Black) {
                        status = true;
                    }
                }
                else {
                    if (lineColor == LineColor.White) {
                        status = true;
                    }
                }
                break;
        }
        return status;
    }

}
