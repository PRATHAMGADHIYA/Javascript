class Book {
    constructor(title, author, price, rentalPrice, copiesAvailable) {
        this.title = title;
        this.#author = author;
        this.#price = price;
        this.#rentalPrice = rentalPrice;
        this.#copiesAvailable = copiesAvailable;
    }
    #author;
    #price;
    #rentalPrice;
    #copiesAvailable;
    getAuthor() {
        return this.#author;
    }
    setAuthor(author) {
        this.#author = author;
    }

    getPrice() {
        return this.#price;
    }
    setPrice(price) {
        this.#price = price;
    }

    getRentalPrice() {
        return this.#rentalPrice;
    }
    setRentalPrice(rentalPrice) {
        this.#rentalPrice = rentalPrice;
    }

    getAvailableCopies() {
        return this.#copiesAvailable;
    }
    setAvailableCopies(copiesAvailable) {
        this.#copiesAvailable = copiesAvailable;
    }

    buyBook() {
        if (this.#copiesAvailable > 0) {
            console.log("Book bought successfully");
            this.#copiesAvailable--;
        } else {
            console.log("Sorry, no copies available");
        }
    }

    rentBook() {
        if (this.#copiesAvailable > 0) {
            console.log("Book rented");
            this.#copiesAvailable--;
        } else {
            console.log("Sorry, no copies available");
        }
    }

    returnBook() {
        console.log("Book returned successfully");
        this.#copiesAvailable++;
        return this.#copiesAvailable;
    }

    checkAvailability() {
        return `Title: ${this.title}, Author: ${this.#author}, Price: ${this.#price}, Rental Price: ${this.#rentalPrice}, Copies Available: ${this.#copiesAvailable}`;
    }
}

let book1 = new Book("Bhagavat gita", "ved vyas", 200, 100, 10);


book1.buyBook();
console.log(book1.checkAvailability());
book1.setAuthor("Bhagavat");
book1.getAuthor()
book1.rentBook();
console.log(book1.checkAvailability()); 
book1.returnBook();
console.log(book1.checkAvailability());


