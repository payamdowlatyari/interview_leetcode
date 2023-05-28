// You are given the root of a binary search tree (BST), where the values of 
// exactly two nodes of the tree were swapped by mistake. 
// Recover the tree without changing its structure.

const greaterThan = (node, value) => {

    if (node) {
        if (node.val > value) {        
            if (node.left && greaterThan(node.left, value)) {
                if (node.val < greaterThan(node.left, value).val)
                    return greaterThan(node.left, value); 
                return node;
            }
            if (node.right && greaterThan(node.right, value)) {
                if (node.val < greaterThan(node.right, value).val) 
                    return greaterThan(node.right, value);
                return node;
            }
        }
        return node;
    } 
    return null;
}

const LessThan = (node, value) => {

    if (node) {

        if (node.val < value) {

            if (node.left && LessThan(node.left, value)) {
                if (node.val > LessThan(node.left, value).val) 
                    return LessThan(node.val, value);    
                return node;
            }
            if (node.right && LessThan(node.right, value)) {
                if (node.val > LessThan(node.right, value).val) 
                    return LessThan(node.right, value);
                return node;
            }
        }
        return node;
    }
    return null;
}

function recoverTree(root) { 

    if (!root) return;

    if (root.right) {

        let r = LessThan(root.right, root.val);
        if (r !== null && r.val) {
            let temp = r.val;
            r.val = root.val;
            root.val = temp;
        } 
    }
 
    if (root.left) {
    
        let l = greaterThan(root.left, root.val);
        if (l !== null && l.val ) {
            let temp = l.val;
            l.val = root.val;
            root.val = temp;
        } 
    }
};

export default recoverTree;