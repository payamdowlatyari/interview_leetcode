import TreeNode from "./TreeNode.js";
import minDepth from "./minDepth-tree.js";
import preOrderTravarsal from "./preOrderTravarsal.js";

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 2

// Example 2:
// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5

const minDepthTest = () => {

    let tree1 = new TreeNode(3);
    tree1.left = new TreeNode(9);
    tree1.right = new TreeNode(20);
    tree1.left.left = new TreeNode(null);
    tree1.left.right = new TreeNode(null);
    tree1.right.left = new TreeNode(15);
    tree1.right.right = new TreeNode(7);

    console.log('-----1------');
    console.log('preorder:');
    preOrderTravarsal(tree1);
    console.log('------------');
    console.log(minDepth(tree1));
    console.log('------------');

    console.log();

    let tree2 = new TreeNode(2);
    tree2.left = new TreeNode(null);
    tree2.right = new TreeNode(3);
    tree2.right.left = new TreeNode(null);
    tree2.right.right = new TreeNode(4);
    tree2.right.right.left = new TreeNode(null);
    tree2.right.right.right = new TreeNode(5);
    tree2.right.right.right.left = new TreeNode(null);
    tree2.right.right.right.right = new TreeNode(6);

    console.log('-----2------');
    console.log('preorder:');
    preOrderTravarsal(tree2);
    console.log('------------');
    console.log(minDepth(tree2));
    console.log('------------');
};

minDepthTest();