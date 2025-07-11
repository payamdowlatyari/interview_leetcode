// Design a parking system for a parking lot.
// The parking lot has three kinds of parking spaces: big, medium, and small, with a fixed number of slots for each size.

// Implement the ParkingSystem class:

// ParkingSystem(int big, int medium, int small) Initializes object of the ParkingSystem class.
// The number of slots for each parking space are given as part of the constructor.
// bool addCar(int carType) Checks whether there is a parking space of carType for the car that wants to get into the parking lot.

// carType can be of three kinds: big, medium, or small, which are represented by 1, 2, and 3 respectively.
// A car can only park in a parking space of its carType.
// If there is no space available, return false, else park the car in that size space and return true.

// Constraints:

// 0 <= big, medium, small <= 1000
// carType is 1, 2, or 3
// At most 1000 calls will be made to addCar

/**
 * Represents a parking system with different types of parking spaces.
 *
 * @param {number} big - The number of big slots available.
 * @param {number} medium - The number of medium slots available.
 * @param {number} small - The number of small slots available.
 * 
 * @example
 * const parkingSystem = new ParkingSystem(1, 1, 0);
 * console.log(parkingSystem.addCar(1)); // Output: true
 * console.log(parkingSystem.addCar(2)); // Output: true
 * console.log(parkingSystem.addCar(3)); // Output: false
 */
export class ParkingSystem {
  /**
   * Creates a ParkingSystem object.
   */
  constructor(big, medium, small) {
    this.slots = [big, medium, small];
  }

  /**
   * @param {number} carType - The type of car to add to the parking lot.
   * @return {boolean} True if the car can be added to the parking lot, false otherwise.
   */
  addCar(carType) {
    if (this.slots[carType - 1] === 0) return false;

    this.slots[carType - 1] -= 1;
    return true;
  }

  /**
   * Retrieves the current number of available slots for each car type.
   * @return {number[]} An array containing the number of available big, medium, and small slots respectively.
   */
  getSlots() {
    return this.slots;
  }
}
