export default function postOrderTravarsal(root){

    if (root === null) return;
    
    postOrderTravarsal(root.left);
    postOrderTravarsal(root.right);

    console.log(root.val);
}