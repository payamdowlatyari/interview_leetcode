import { dominantIndex } from "./dominantIndex";

describe("dominantIndex", () => {
    it("should return the index of the dominant element", () => {
        expect(dominantIndex([3, 6, 1, 0])).toBe(1);
    });

    it("should return -1 if there is no dominant element", () => {
        expect(dominantIndex([1, 2, 3, 4])).toBe(-1);
    });

    it("should handle negative numbers", () => {
        expect(dominantIndex([-1, -2, -3, -4])).toBe(-1);
    });
});
