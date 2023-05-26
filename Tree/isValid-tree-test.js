import TreeNode from "./TreeNode.js";
import isValidBST from "./isValid-tree.js";

// Example 1:

//      2
//     / \
//    1   3

// Input: root = [2,1,3]
// Output: true

// Example 2:

//          5
//         / \
//        1   4  
//           / \   
//          3   6

// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

const preOrderTravarsal = (root) => {

    if (root === null) return;

    console.log(root.val);
    
    preOrderTravarsal(root.left);
    preOrderTravarsal(root.right);
}

const isValidBSTTest = () => {

    let tree1 = new TreeNode(2);
    tree1.left = new TreeNode(1);
    tree1.right = new TreeNode(3);

    console.log('-----1------');
    console.log('Pre order:');
    preOrderTravarsal(tree1);
    console.log('--is valid--');
    console.log(isValidBST(tree1));
    console.log('------------');
    
    console.log();

    let tree2 = new TreeNode(5);
    tree2.left = new TreeNode(1);
    tree2.right = new TreeNode(4);
    tree2.left.left = new TreeNode(null);
    tree2.left.right = new TreeNode(null);
    tree2.right.left = new TreeNode(3);
    tree2.right.right = new TreeNode(4);

    console.log('-----2------');
    console.log('Pre order:');
    preOrderTravarsal(tree2);
    console.log('--is valid--');
    console.log(isValidBST(tree2));
    console.log('------------');

    //[32,26,47,19,null,null,56,null,27]

    let tree3 = new TreeNode(32);
    tree3.left = new TreeNode(26);
    tree3.right = new TreeNode(47);
    tree3.left.left = new TreeNode(null);
    tree3.left.right = new TreeNode(null);
    tree3.right.left = new TreeNode(56);
    tree3.right.right = new TreeNode(null);
    tree3.right.left.left = new TreeNode(27);

    console.log('-----3------');
    console.log('Pre order:');
    preOrderTravarsal(tree3);
    console.log('--is valid--');
    console.log(isValidBST(tree3));
    console.log('------------');
}

isValidBSTTest();