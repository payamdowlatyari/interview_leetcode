// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Constraints:
// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100
 
// Follow up: Could you solve it both recursively and iteratively?

var leftTree = [];
var rightTree = [];

const leftTreeToArray = (root) => {

    if (root) { 

        if (root.left) 
        leftTreeToArray(root.left); 

        if (root.val === null) leftTree.push(0);
        else leftTree.push(root.val);

        if (root.right) 
        leftTreeToArray(root.right);  
    }   
}

const rightTreeToArray = (root) => {

    if (root) { 

        if (root.left) 
        rightTreeToArray(root.left); 

        if (root.val === null) rightTree.push(0);
        else rightTree.push(root.val);

        if (root.right) 
        rightTreeToArray(root.right);  
    }   
}

const isSymmetric = function(root) {

    if (root.left === null && root.right === null) return true;

    leftTree = [];
    rightTree = [];

    leftTreeToArray(root.left);
    rightTreeToArray(root.right);

    console.log('leftTree: ' + leftTree + ' len: ' + leftTree.length);
    console.log('rightTree: ' + rightTree + ' len: ' + rightTree.length);

    if (leftTree.length != rightTree.length) return false;

    console.log(leftTree);
    console.log(rightTree);

    let i = 0;
    let j = rightTree.length - 1;

    while (i < leftTree.length && j >= 0) {
        console.log('i: ' + i + ' -> ' + leftTree[i] + '   =?   j: ' + j + ' -> ' + rightTree[j]);
        if (leftTree[i] != rightTree[j]) 
                return false;
        i++;
        j--;
    }

    return true;   
};

export default isSymmetric;