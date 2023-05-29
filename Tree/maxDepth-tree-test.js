import maxDepth from "./maxDepth-tree.js";
import TreeNode from "./TreeNode.js";
import preOrderTravarsal from "./preOrderTravarsal.js";

// Example 1:

//          3
//         / \
//        9   20
//           /  \
//          15   7

// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Example 2:

//      1
//       \ 
//        2

// Input: root = [1,null,2]
// Output: 2

const maxDepthTest = () => {

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
    console.log(maxDepth(tree1));
    console.log('------------');

    console.log();

    let tree2 = new TreeNode(1);
    tree2.left = new TreeNode(null);
    tree2.right = new TreeNode(2);

    console.log('-----2------');
    console.log('preorder:');
    preOrderTravarsal(tree2);
    console.log('------------');
    console.log(maxDepth(tree2));
    console.log('------------');
};

maxDepthTest();