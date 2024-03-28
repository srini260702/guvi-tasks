


1) Class-Movie :

class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  static getPG(movies) {
    return movies.filter(movie => movie.rating === "PG");
  }
}

// Creating three instances of Movie
const movie1 = new Movie("Inception", "Warner Bros.", "PG-13");
const movie2 = new Movie("The Shawshank Redemption", "Castle Rock Entertainment", "R");
const movie3 = new Movie("Toy Story", "Pixar Animation Studios");

// Creating an array of movies
const movies = [movie1, movie2, movie3];

// Testing the getPG method
const pgMovies = Movie.getPG(movies);
console.log(pgMovies); // Output will be an array with movies having rating "PG"


2) Convert the UML diagram to Typescript class. - use number for double :



class Circle {
    private radius: number;
    private color: string;

    constructor(radius: number = 1.0, color: string = "red") {
        this.radius = radius;
        this.color = color;
    }

    getRadius(): number {
        return this.radius;
    }

    setRadius(radius: number): void {
        this.radius = radius;
    }

    getColor(): string {
        return this.color;
    }

    setColor(color: string): void {
        this.color = color;
    }

    toString(): string {
        return `Circle[radius=${this.radius}, color=${this.color}]`;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    getCircumference(): number {
        return 2 * Math.PI * this.radius;
    }
}

// Example usage:
let myCircle = new Circle(2.5, "blue");
console.log(myCircle.toString()); // Output: Circle[radius=2.5, color=blue]
console.log(myCircle.getArea()); // Output: Area of the circle
console.log(myCircle.getCircumference()); // Output: Circumference of the circle


3) Write a “person” class to hold all the details :


class Person {
    constructor(name, age, gender, occupation) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.occupation = occupation;
    }

    // Method to display details of the person
    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Gender: ${this.gender}`);
        console.log(`Occupation: ${this.occupation}`);
    }
}

// Example usage:
const person1 = new Person("John Doe", 30, "Male", "Software Engineer");
person1.displayDetails();


4) write a class to calculate the Uber price :


class UberPriceCalculator {
    constructor(baseFare, costPerKm, costPerMinute) {
        this.baseFare = baseFare;
        this.costPerKm = costPerKm;
        this.costPerMinute = costPerMinute;
    }

    calculatePrice(distanceInKm, timeInMinutes) {
        const distanceCost = distanceInKm * this.costPerKm;
        const timeCost = timeInMinutes * this.costPerMinute;
        const totalPrice = this.baseFare + distanceCost + timeCost;
        return totalPrice;
    }
}

// Example usage:
const calculator = new UberPriceCalculator(5, 2, 0.5); // Base fare of $5, $2 per km, $0.5 per minute
const distance = 10; // 10 km
const time = 20; // 20 minutes
const totalPrice = calculator.calculatePrice(distance, time);
console.log('Total Price:', totalPrice);
