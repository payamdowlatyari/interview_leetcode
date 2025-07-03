import { ParkingSystem } from "./parkingLot.js";
import { expect, test, describe } from "@jest/globals";

// Example 1:

// Input
// ["ParkingSystem", "addCar", "addCar", "addCar", "addCar"]
// [[1, 1, 0], [1], [2], [3], [1]]
// Output
// [null, true, true, false, false]

// Explanation
// ParkingSystem parkingSystem = new ParkingSystem(1, 1, 0);
// parkingSystem.addCar(1); // return true because there is 1 available slot for a big car
// parkingSystem.addCar(2); // return true because there is 1 available slot for a medium car
// parkingSystem.addCar(3); // return false because there is no available slot for a small car
// parkingSystem.addCar(1); // return false because there is no available slot for a big car. It is already occupied.

describe('ParkingSystem', () => {

    test('Example 1', () => {
        const parkingSystem = new ParkingSystem(1, 1, 0);
        expect(parkingSystem.addCar(1)).toBe(true); // Big car
        expect(parkingSystem.addCar(2)).toBe(true); // Medium car
        expect(parkingSystem.addCar(3)).toBe(false); // Small car
        expect(parkingSystem.addCar(1)).toBe(false); // Big car again
    });
    test('Example 2', () => {
        const parkingSystem = new ParkingSystem(0, 0, 1);
        expect(parkingSystem.addCar(1)).toBe(false); // Big car
        expect(parkingSystem.addCar(2)).toBe(false); // Medium car
        expect(parkingSystem.addCar(3)).toBe(true);  // Small car
    });
    test('Example 3', () => {
        const parkingSystem = new ParkingSystem(1, 1, 1);
        expect(parkingSystem.addCar(1)).toBe(true); // Big car
        expect(parkingSystem.addCar(2)).toBe(true); // Medium car
        expect(parkingSystem.addCar(3)).toBe(true);  // Small car
        expect(parkingSystem.addCar(1)).toBe(false); // Big car again
    });
});