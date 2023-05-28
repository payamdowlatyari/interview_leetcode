export default function preOrderTravarsal(root){

    if (root === null) return;

    console.log(root.val);
    
    preOrderTravarsal(root.left);
    preOrderTravarsal(root.right);
}