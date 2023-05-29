import TreeNode from "./TreeNode.js";
import isSymmetric from "./isSymmetric-tree.js";
import preOrderTravarsal from "./preOrderTravarsal.js";
import inOrderTravarsal from "./inOrderTravarsal.js";

const isSymmetricTest = () => {

    // Example 1:
    // Input: root = [1,2,2,3,4,4,3]
    // Output: true

    let tree1 = new TreeNode(1);
    tree1.left = new TreeNode(2);
    tree1.right = new TreeNode(2);
    tree1.left.left = new TreeNode(3);
    tree1.left.right = new TreeNode(4);
    tree1.right.left = new TreeNode(4);
    tree1.right.right = new TreeNode(3);

    console.log('-----1------');
    console.log('preorder:');
    preOrderTravarsal(tree1);
    console.log('------------');
    console.log('inorder:');
    inOrderTravarsal(tree1);
    console.log('------------');
    console.log(isSymmetric(tree1));
    console.log('------------');
    console.log();

    // Example 2:
    // Input: root = [1,2,2,null,3,null,3]
    // Output: false

    let tree2 = new TreeNode(1);
    tree2.left = new TreeNode(2);
    tree2.right = new TreeNode(2);
    tree2.left.left = new TreeNode(2);
    tree2.left.right = new TreeNode(null);
    tree2.right.left = new TreeNode(2);
    // tree2.right.right = new TreeNode(3);

    console.log('-----2------');
    console.log('preorder:');
    preOrderTravarsal(tree2);
    console.log('------------');
    console.log('inorder:');
    inOrderTravarsal(tree2);
    console.log('------------');
    console.log(isSymmetric(tree2));
    console.log('------------');
}

isSymmetricTest();