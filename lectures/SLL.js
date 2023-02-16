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
}

let mySLL = new SLL();
mySLL.addBack(15).addFront(20).addBack(30).printValues();
// mySLL.addFront(10).addFront(5).addFront(20);
// // mySLL.printValues();
// mySLL.addBack(30).addBack(28).printValues();
// console.log(mySLL);
