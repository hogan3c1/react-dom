/*
Closures Part1:
A closure in JavaScript is a powerful and fundamental concept that occurs when
a function remembers and can access the variables from its outer (enclsoing) lexical
scope even after that outer function has finished executing. 
*/

function outer() {
  const outerVar = "I am from outer";

  function inner() {
    console.log(outerVar);
  }
  return inner;
}

const innerFunction = outer();
innerFunction();

function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  return increment;
}

const counter1 = createCounter();

const counter2 = createCounter();

counter1();
counter1();
counter1();

counter2();
counter2();

/*
Closures Part2:
*/

const createPet = function (name) {
  let sex;

  // setName: function (newName)
  function setName(newName) {
    name = newName;
  }

  function getName() {
    return name;
  }

  function setSex(newSex) {
    sex = newSex;
  }

  function getSex() {
    return sex;
  }

  return function (password) {
    if (password === "chips") {
      return {
        setName,
        getName,
        setSex,
        getSex,
      };
    } else {
      return console.log("Error, incorrect password!");
    }
  };
};

const petWithAccess = createPet("John")("chips"); //chips  no.2 function
console.log(petWithAccess.getName());
console.log(petWithAccess);


petWithAccess.setName("Elliott");
console.log(petWithAccess.getName());

const petWithoutAccess = createPet("Coco")("chocolate");
console.log(petWithoutAccess.getName());
