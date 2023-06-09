import isBalanced from "./isBalanced-tree.js";
import TreeNode from "./TreeNode.js";
import inOrderTravarsal from "./inOrderTravarsal.js";

// Example 1:

//      3
//     / \
//    9   20
//       /  \ 
//      15   7

// Input: root = [3,9,20,null,null,15,7]
// Output: true

// Example 2:

//         1
//        / \
//       2   2
//      / \
//     3   3
//    / \
//   4   4 

// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false

// Example 3:

// Input: root = []
// Output: true

const isBalancedTest = () => {

let tree1 = new TreeNode(3);
tree1.left = new TreeNode(9);
tree1.right = new TreeNode(20);
tree1.left.left = new TreeNode(null);
tree1.left.right = new TreeNode(null);
tree1.right.left = new TreeNode(15);
tree1.right.right = new TreeNode(7);

console.log('-----1------');
console.log('in-order:');
inOrderTravarsal(tree1);
console.log('------------');
console.log(isBalanced(tree1));
console.log('------------');

console.log();

let tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(2);
tree2.left.left = new TreeNode(3);
tree2.left.right = new TreeNode(3);
tree2.right.left = new TreeNode(null);
tree2.right.right = new TreeNode(null);
tree2.left.left.left = new TreeNode(4);
tree2.left.left.right = new TreeNode(4);

console.log('-----2------');
console.log('in-order:');
inOrderTravarsal(tree2);
console.log('------------');
console.log(isBalanced(tree2));
console.log('------------');
}

isBalancedTest();