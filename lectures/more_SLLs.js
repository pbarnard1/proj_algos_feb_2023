class SLLNode {
    constructor(value) {
        this.data = value; // This will hold actual values (data)
        this.next = null; // Point to the next node in our list
    }
}

// let node1 = new SLLNode(30);
// console.log(node1);

class SLL { // Singly Linked List itself
    constructor() {
        this.head = null; // Head is pointing to the first node in the list
    }

    addFront(value) {
        let newNode = new SLLNode(value); // Create the new Node with the given value
        newNode.next = this.head; // Connect the new node to the list
        this.head = newNode; // Now move the head of the list to the beginning, where the new node is located
        return this; // Allows for chaining
    }

    printValues() { // Print all the nodes' values in the list
        let curNode = this.head; // Start at the beginning of the list
        while (curNode !== null) {
            console.log(curNode.data); // Print the current value stored by this node
            curNode = curNode.next; // Move to the next node in the list (if it exists)
        }
        return this; // For chaining
    }

    addBack(value) {
        let newNode = new SLLNode(value); // Create the new node
        let curNode = this.head;
        // Edge case: list is empty
        if (this.head === null) {
            this.head = newNode;
            return this;
        }
        // We need to get to the last node in the list
        while (curNode.next !== null) {
            curNode = curNode.next;
        }
        // Attach the new node to the end
        curNode.next = newNode;
        return this; // Allow for chaining
    }

    removeFront() {
        if (this.head === null) { // Edge case - the list is empty
            return null;
        }
        let nodeToRemove = this.head;
        this.head = nodeToRemove.next; // Move the head of the list down to the next node
        nodeToRemove.next = null; // Detach the node from the list
        return nodeToRemove; // Return the detached node
    }

    removeBack() {
        let curNode = this.head;
        // Edge case: list is empty
        if (this.head === null) {
            return null;
        } else if (this.head.next === null) { // One node left - go ahead and remove that
            this.head = null;
            return curNode;
        }
        // We need to get to the second-to-last node in the list
        while (curNode.next.next !== null) {
            curNode = curNode.next;
        }
        let nodeToRemove = curNode.next; // Have a pointer hold onto the last node, otherwise it'll be deleted from memory
        curNode.next = null; // Enable us to detach the last node
        return nodeToRemove;
    }

    removeFirstInstance(val) {
        if (this.head == null) { // Edge case: List is empty, so nothing to return (null)
            return null;
        }
        if (this.head.data == val) { // Edge case: First node has the value
            return this.removeFront(); // Remove the front node
        }
        let firstPointer = this.head; // The previous node that we will connect to the remainder of the list
        let secondPointer = this.head.next; // Hold the node to remove, if we find it
        while (secondPointer !== null) {
            if (secondPointer.data == val) {
                // Remove this node from the list and connect the remaining nodes
                firstPointer.next = secondPointer.next;
                secondPointer.next = null; // Remove this node from the list
                return secondPointer; // Exit method - no need to keep going
            } else {
                secondPointer = secondPointer.next;
                firstPointer = firstPointer.next;
            }
        }
        return null; // Didn't find the value
    }

    reverseList() {
        // O(N) solution
        if (this.head == null || this.head.next == null) { // IF the list is empty OR if it only has one element 
            return this; // Leave the list alone
        }
        let listStart = this.head;
        let nodeToRemove = listStart.next;
        let nextNodeToRemove = nodeToRemove.next;
        listStart.next = null; // Stop us from having an infinite loop
        while (nodeToRemove !== null) {
            nodeToRemove.next = listStart;
             // Moves the node back (reversal itself)
            listStart = nodeToRemove;
            nodeToRemove = nextNodeToRemove;
            if (nextNodeToRemove !== null) { // To ensure we don't get an error as we move pointers
                nextNodeToRemove = nextNodeToRemove.next;
            }
            // console.log(listStart);
        }
        this.head = listStart;
        return this;
        
        // This is an O(N^2) solution
        // let newList = null;
        // let curNewNode = null;
        // while (this.head !== null) {
        //     let nextNode = this.removeBack(); // Remove node from back of list - this is a loop!
        //     if (newList == null) { // If the new list is empty
        //         newList = nextNode; // Start new list with the new node
        //         curNewNode = newList;
        //     } else { // Attach the new node to the end of the new list
        //         curNewNode.next = nextNode;
        //         curNewNode = curNewNode.next;
        //     }
        // }
        // this.head = newList;
        // return this;
    }
}

let mySLL = new SLL();
mySLL.addFront(20).addBack(30).addBack(40).addBack(50);
mySLL.reverseList().printValues();
