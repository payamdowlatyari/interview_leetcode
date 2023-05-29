export default function inOrderTravarsal(root){

    if (root === null) return;
    
    inOrderTravarsal(root.left);

        console.log(root.val);

    inOrderTravarsal(root.right);
}