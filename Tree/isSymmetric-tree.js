// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Constraints:
// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100
 
// Follow up: Could you solve it both recursively and iteratively?

const travarse = (root) => {

    if (!root) return;

    let element = [];
    element.push(root.val);

    if (root.left) element.push(travarse(root.left));
    if (root.right) element.push(travarse(root.right));
 
    return element;
}

const isSymmetric = function(root) {

    console.log(travarse(root));
    
    // if (!root) return true;

    // if (root.left && root.right) 
    // if (root.left.val != root.right.val) 
    //         return false;

    // if (root.left && root.right) 
    // return (isSymmetric(root.left) && isSymmetric(root.right));

    
    
};

export default isSymmetric;