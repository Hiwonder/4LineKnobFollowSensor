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

    //% weight=98 blockId=line_followers block="Line follower %lineFollowerSensor in %lineColor ?"
    //% inlineInputMode=inline
    export function line_followers(lineFollowerSensor: LineFollowerSensors, lineColor: LineColor): boolean {
        let status = false;
        let data = 0;
        switch (lineFollowerSensor) {
            case LineFollowerSensors.S1:
                data = pins.digitalReadPin(DigitalPin.P14)
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

            case LineFollowerSensors.S2:
                data = pins.digitalReadPin(DigitalPin.P13)
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

            case LineFollowerSensors.S3:
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

            case LineFollowerSensors.S4:
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
        }
        return status;
    }

}
