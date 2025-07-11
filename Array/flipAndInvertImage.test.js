import { flipAndInvertImage } from "./flipAndInvertImage";
import { expect, test, describe } from "@jest/globals";

// Example 1:

// Input: image = [[1,1,0],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

// Example 2:

// Input: image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
// Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
// Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
// Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]

describe("flipAndInvertImage", () => {
  test("Example 1", () => {
    const image1 = [
      [1, 1, 0],
      [1, 0, 1],
      [0, 0, 0],
    ];
    const result1 = flipAndInvertImage(image1);
    expect(result1).toEqual([
      [1, 0, 0],
      [0, 1, 0],
      [1, 1, 1],
    ]);
  });

  test("Example 2", () => {
    const image2 = [
      [1, 1, 0, 0],
      [1, 0, 0, 1],
      [0, 1, 1, 1],
      [1, 0, 1, 0],
    ];
    const result2 = flipAndInvertImage(image2);
    expect(result2).toEqual([
      [1, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 1],
      [1, 0, 1, 0],
    ]);
  });
});
