function sum(x = 2, y = 2, ...a){
    return (x + y) * a.length
}

let params = [4,2,3]

console.log(sum(1,2, 'hello', true, 7))

class Book{
    constructor(title,pages,isbn) {
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
        
    }
    printIsbn() {
        console.log(this.isbn)
    }
}

let book = new Book("Cronicas de Gelo e fogo",300, "100-1-00-1234156-0" )
console.log(book)

book.title = "Senhor dos Aneis";
console.log(book)
console.log(book.title)
