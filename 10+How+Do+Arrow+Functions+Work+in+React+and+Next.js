// an arrow function expression is a compact alternative to a traditional function
// expression

// traditional anonymous functions
(function (a) {
  return a + 100;
});

(a) => {
  return a + 100;
};

(a) => a + 100;

(a) => a + 100;

function bob(a) {
  return 1 + 100;
}

const bob2 = (a) => a + 100;

// using regular functions
class UserInfo {
  constructor(name) {
    // this.name = name;
    // this.regularMethod = this.regularMethod.bind(this);
  }

  regularMethod() {
    console.log(`Hello from ${this.name} (regular)`);
  }

  arrowMethod = () => {
    console.log(`hello from ${this.name} (arrow)`);
  };
}

const regularInstance = new UserInfo("Tom");
const regularMethod = regularInstance.regularMethod;
const arrowMethod = regularInstance.arrowMethod;



// regularMethod();
arrowMethod();
