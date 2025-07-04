import { simplifyPath } from "./simplifyPath";
import { expect, test, describe } from "@jest/globals";

// Example 1:

// Input: path = "/home/"
// Output: "/home"
// Explanation:
// The trailing slash should be removed.

// Example 2:
// Input: path = "/home//foo/"
// Output: "/home/foo"
// Explanation:
// Multiple consecutive slashes are replaced by a single one.

// Example 3:
// Input: path = "/home/user/Documents/../Pictures"
// Output: "/home/user/Pictures"
// Explanation:
// A double period ".." refers to the directory up a level (the parent directory).

// Example 4:
// Input: path = "/../"
// Output: "/"
// Explanation:
// Going one level up from the root directory is not possible.

// Example 5:
// Input: path = "/.../a/../b/c/../d/./"
// Output: "/.../b/d"
// Explanation:
// "..." is a valid name for a directory in this problem.

describe('simplifyPath', () => {
    test('Example 1', () => {
        const path1 = "/home/";
        const result1 = simplifyPath(path1);
        expect(result1).toBe("/home");
    });

    test('Example 2', () => {
        const path2 = "/home//foo/";
        const result2 = simplifyPath(path2);
        expect(result2).toBe("/home/foo");
    });

    test('Example 3', () => {
        const path3 = "/home/user/Documents/../Pictures";
        const result3 = simplifyPath(path3);
        expect(result3).toBe("/home/user/Pictures");
    });

    test('Example 4', () => {
        const path4 = "/../";
        const result4 = simplifyPath(path4);
        expect(result4).toBe("/");
    });

    test('Example 5', () => {
        const path5 = "/.../a/../b/c/../d/./";
        const result5 = simplifyPath(path5);
        expect(result5).toBe("/.../b/d");
    });
});