// Object-Oriented Programming
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
  move: function () {},
};

circle.draw(); //method

// FACTORY FUNCTION

function createCircle(radius, location, isVisible) {
  return {
    radius: radius,
    location: location,
    isVisible: true,
    draw: function () {
      console.log("draw");
    },
    move: function () {},
  };
}

// Can be written better as:

function createCircle(radius, location, isVisible) {
  return {
    radius,
    location,
    isVisible,
    draw() {
      console.log("draw");
    },
    move() {},
  };
}

const circle1 = createCircle(1);
circle1.draw();

const circle2 = createCircle(2, { x: 1, y: 2 }, true);
console.log(circle2);

// CONSTRUCTOR FUNCTION
class Circle {
  constructor(radius) {
    this.radius = radius;
    this.draw = function () {
      console.log("draw");
    };
  }
}

const constructorCircle = new Circle(1);

let circle3 = {
  radius: 1,
};

circle3.color = "yellow";
circle3.draw = function () {};

console.log(circle3);

circle3 = {};

delete circle3.color;
delete circle3.draw;
console.log(circle3);

// VALUE VS REFERENCE TYPES
let number = 10;
let obj = { value: 10 };

function increase(number, obj) {
  obj.value++;
  number++;
}

increase(number, obj);
console.log(number, obj);
