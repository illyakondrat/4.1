let user = {
  name: "Іван",
  surname: "Сміт",
  name: "Петро",
  delete user.name;
};

function isEmpty(obj) {
  for (let key in obj) {
    return true
  }
  return false
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
alert(sum);
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "num") {
      obj[key] *= 2;
    }
  }
}
//завдання 4.1


let calcultor = {
  read() {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  }
  sum() {
    this.a + this.b;
  }
  mul() {
    this.a * this.b;
  }
};
calcultor.read();
alert(calcultor.sum());
alert(calcultor.mul());


let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
};
ladder.up().up().down().showStep().down().showStep();
//завдання 4.4


function Calculator() {
  this.read = function () {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}
let calculator = new Calculator();
calculator.read();
alert( "Sum=" + calculator.sum() );
alert("Mul=" + calculator.mul());


function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('Скільки додати?', 0);
  };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);
//завдання 4.5


