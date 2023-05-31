export default function printLinkedList(head){

    if (head) {
        let curr = head;

        while(curr) {
            console.log(curr.val);
            curr = curr.next;
        }
    }
};