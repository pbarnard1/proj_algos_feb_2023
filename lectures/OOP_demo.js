class Brownie {
    constructor(size, ingredientList, toppingList, isEdgePiece = false) {
        this.isEdgePiece = isEdgePiece;
        this.size = size; // Square inches
        this.ingredientList = ingredientList;
        this.toppingList = toppingList;
        this.isEaten = false; // You've made the brownie - so naturally it's not eaten yet
    }

    // Methods
    eat() {
        this.size = 0; // The brownie is eaten - yummy!
        this.isEaten = true;
    }

    shareBrownie() {
        this.size = this.size / 2; // Halve the size of the brownie
        return this; // Allows us to reuse the object again to call its methods (chaining)
    }
}

class Human {
    constructor(height, name, age) {
        this.height = height;
        this.name = name;
        this.age = age;
        this.availableBrownies = [];
    }

    bakeBrownie(newBrownieSize, brownieIngredients, toppings) {
        let newBrownie = new Brownie(newBrownieSize, brownieIngredients, toppings);
        this.availableBrownies.push(newBrownie);
    }
}


let myBrownie = new Brownie(4, ["chocolate","flour","eggs","milk","vegetable oil"], ["sparkles","pecans"]);
let secondBrownie = new Brownie(6, ["chocolate","flour","eggs","milk","vegetable oil"], ["chocolate","walnuts"], true);

// console.log(myBrownie.isEdgePiece);
// console.log(secondBrownie.isEdgePiece);

// myBrownie.eat();
// console.log(myBrownie.isEaten);

myBrownie.shareBrownie().shareBrownie();

console.log(myBrownie.size);

let adrian = new Human(70, "Adrian", 25);