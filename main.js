const book1 = {
	title: 'Book One: UX/UI Design',
	author: 'John Smith',
	year: 2013,
	getSummary: function() {
		return `${this.title} was written by ${this.author} in ${this.year}`
	}
}

console.log(book1.getSummary);	

//console.log(Object.values(book1));
//console.log(Object.keys(book1));


// Constructors
function Book(title, author, year) {
	this.title = title;
	this.author = author;
	this.year = year;
	/*this.getSummary = function() {
		return `${this.title} was written by ${this.author} in ${this.year}`
	}*/
}

// getSummay in a better way [store in prototype because we don't want getSummary in every book]
Book.prototype.getSummary = function() {
	return `${this.title} was written by ${this.author} in ${this.year}`;
}

// getAge
Book.prototype.getAge = function() {
	const years = new Date().getFullYear() - this.year;
	return `${this.title} is ${years} years old`;
}

// Revise / Change year
Book.prototype.revise = function() {
	this.year = newYear;
	this.revised = true;
}

// Instatiate an Object
const book1 = new Book('UX design', 'Jane X', '1999');
const book2 = new Book('Noname', 'Anonymous', '2003');

console.log(book1.title);
console.log(book2.getSummary());
console.log(book2.getAge());
console.log(book2);
book.revise('2018');
console.log(book2);

// Magazine Constructor
function Magazine(title, author, year, month) {
	Book.call(this, title, author, year);
	this.month = month;
}

// Inherit Prototype 
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Object
const mag1 = new Magazine('Mag One', 'Bob John', 2019, 'Jan');

// Use Magazine constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1);

// Object of Protos
const bookProtos = {
	getSummary: function() {
		return `${this.title} was written by ${this.author} in ${this.year}`;
	}

	getAge: function() {
		return `${this.title} is ${years} years old`;
	}
}

// Create Object
const book11 = Object.create(bookProtos);
book1.title = 'Book One';
book1.author = 'Johnny';
book1.year = '2099';

console.log(book1);

// different way (better?)
const book22 = Object.create(bookProtos, {
	title: {value: 'Book One'},
	author: {value: 'Johnny'},
	year: {value: '2099'}
});


// Classes
class Book {
	constructor(title, author, year) {
		this.title = title;
		this.author = author;
		this.year = year;
	}

	getSummary() {
		return `${this.title} was written by ${this.author} in ${this.year}`;
	}

	getAge() {
		return `${this.title} is ${years} years old`;
	}

	revise(newYear) {
		this.year = newYear;
		this.revised = true;
	}

	// You can use it without initializing/instantiating new Book
	static topBookStore() {
		return 'Barnes & Noble';
	}

}

// new Book instance
const bookOne = new Book('UI UX Deisgn principles', 'Belly Mosh', '2099');
bookOne.revies('2021');
console.log(bookOne);

console.log(Book.topBookStore());



