// You are given an absolute path for a Unix-style file system, which always begins with a slash '/'. 
// Your task is to transform this absolute path into its simplified canonical path.

// The rules of a Unix-style file system are as follows:

// A single period '.' represents the current directory.
// A double period '..' represents the previous/parent directory.
// Multiple consecutive slashes such as '//' and '///' are treated as a single slash '/'.
// Any sequence of periods that does not match the rules above should be treated as a valid directory or file name. 
// For example, '...' and '....' are valid directory or file names.

// The simplified canonical path should follow these rules:

// The path must start with a single slash '/'.
// Directories within the path must be separated by exactly one slash '/'.
// The path must not end with a slash '/', unless it is the root directory.
// The path must not have any single or double periods ('.' and '..') used to denote current or parent directories.
// Return the simplified canonical path.

// Constraints:

// 1 <= path.length <= 3000
// path consists of English letters, digits, period '.', slash '/' or '_'.
// path is a valid absolute Unix path.

/**
 * Simplifies a given absolute Unix-style file system path.
 * 
 * @param {string} path - The absolute path to simplify.
 * @return {string} - The simplified canonical path.
 * 
 * Time complexity: O(n), where n is the length of the input path.
 * Space complexity: O(n), for storing the components in the stack.
 */
export function simplifyPath(path) {
    // Split the path by slashes and filter out empty components
    const components = path.split('/').filter(component => component !== '' && component !== '.');

    // Initialize a stack to hold the valid path components
    const stack = [];

    for (const component of components) {
        if (component === '..') {
            // If the component is '..', pop from the stack if it's not empty
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            // Otherwise, push the component onto the stack
            stack.push(component);
        }
    }

    // Join the stack components with a single slash and prepend a slash for the root
    return '/' + stack.join('/');
}