import recoverTree from "./recover-tree.js";
import TreeNode from "./TreeNode.js";

// Example: 
//
//      1          3
//     /          /  
//    3    -->   1
//     \          \  
//      2          2
//
// Input: root = [1,3,null,null,2]
// Output: [3,1,null,null,2]
// Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.

const preOrderTravarsal = (root) => {

    if (root === null) return;

    console.log(root.val);
    
    preOrderTravarsal(root.left);
    preOrderTravarsal(root.right);
}

const recoverTreeTest = () => {

    // input tree1: root = [1,3,null,null,2] 
    // expected output: root = [3,1,null,null,2]

    let tree1 = new TreeNode(1);
    tree1.left = new TreeNode(3);
    tree1.right = new TreeNode(null);
    tree1.left.left = new TreeNode(null);
    tree1.left.right = new TreeNode(2);

    console.log('-----1------');
    console.log('before:');
    preOrderTravarsal(tree1);
    console.log('------------');
    recoverTree(tree1);
    console.log('after:');
    preOrderTravarsal(tree1);
    console.log();

    // input tree2: root = [3,null,2,null,1]
    // expected output: root = [1,null,2,null,3]

    let tree2 = new TreeNode(3);
    tree2.left = new TreeNode(null);
    tree2.right = new TreeNode(2);
    tree2.right.left = new TreeNode(null);
    tree2.right.right = new TreeNode(1);

    console.log('-----2------');
    console.log('before:');
    preOrderTravarsal(tree2);
    console.log('------------');
    recoverTree(tree2);
    console.log('after:');
    preOrderTravarsal(tree2);
    console.log('------------');

}

recoverTreeTest();

