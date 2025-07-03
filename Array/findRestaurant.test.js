import { findRestaurant } from "./findRestaurant.js";
import { expect, test, describe } from "@jest/globals";

// Example 1:
// Input: 
// list1 = ["Shogun","Tapioca Express","Burger King","KFC"], 
// list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// Output: ["Shogun"]
// Explanation: The only common string is "Shogun".

// Example 2:
// Input: 
// list1 = ["Shogun","Tapioca Express","Burger King","KFC"], 
// list2 = ["KFC","Shogun","Burger King"]
// Output: ["Shogun"]
// Explanation: The common string with the least index sum is "Shogun" with index sum = (0 + 1) = 1.

describe("findRestaurant", () => {
    test("Example 1", () => {
        const list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
        const list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"];
        const result = findRestaurant(list1, list2);
        expect(result).toEqual(["Shogun"]);
    });

    test("Example 2", () => {
        const list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
        const list2 = ["KFC", "Shogun", "Burger King"];
        const result = findRestaurant(list1, list2);
        expect(result).toEqual(["Shogun"]);
    });
});