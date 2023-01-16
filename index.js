class Coffemashine {
  #water;
  #amountOfcoffee;
  #milk;
  #battery;
  constructor(water, amountOfcoffee, milk, battery) {
    this.#water = water;
    this.#amountOfcoffee = amountOfcoffee;
    this.#milk = milk;
    this.#battery = battery;
  }
  get water() {
    console.log('Води лишилось ' + this.#water + ' грам');
    return this.#water;
  }
  setWaterAmount(value) {
    if (value < 0) throw new Error("Мало води");
    this.#water += value;
    console.log('Води лишилось ' + this.#water + ' грам');
  }
  get amountOfcoffee() {
    console.log('Кави лишилося ' + this.#amountOfcoffee + ' грам');
    return this.#amountOfcoffee;
  }
  setCoffeAmount(value) {
    if (value < 0) throw new Error("Мало кави");
    this.#amountOfcoffee += value;
    console.log('Кави лишилося ' + this.#amountOfcoffee + ' грам');
  }
  get milk() {
    console.log('Молока лишилося ' + this.#milk + ' грам');
    return this.#milk;
  }
  setMilkAmount(value) {
    if (value < 0) throw new Error("Мало молока");
    this.#milk += value;
    console.log('Молока лишилося ' + this.#milk + ' грам');
  }
  get battery() {
    console.log('Батарея заряджена на ' + this.#battery + ' %')
    return this.#battery;
  }
  setBatteryAmount(value) {
    if (value < 0) throw new Error("Заряди мене");
    this.#battery += value;
    console.log('Батарея заряджена на ' + this.#battery + ' %');
  }
  get all() {
    console.log('Води лишилось ' + this.#water + ' грам');
    console.log('Кави лишилося ' + this.#amountOfcoffee + ' грам');
    console.log('Молока лишилося ' + this.#milk + ' грам');
    console.log('Батарея заряджена на ' + this.#battery + ' %');
  }

  #brewCoffe(x) {
    this.#amountOfcoffee -= x;
  }
  #useWater(x) {
    this.#water -= x;
  }
  #useEnergy(x) {
    this.#battery -= x;
  }
  #useMilk(x) {
    this.#milk -= x;
  }


  espresso() {
    this.#amountOfcoffee >= 12 ? this.#brewCoffe(12) : console.log('Досип кави');
    this.#water >= 50 ? this.#useWater(50) : console.log('Долий води');
    this.#battery >=1 ? this.#useEnergy(1) : console.log('Постав машинку на зарядку');
    console.log('Води лишилось ' + this.#water + ' грам');
    console.log('Кави лишилося ' + this.#amountOfcoffee + ' грам');
    console.log('Батарея заряджена на ' + this.#battery + ' %');
  }
  
  cappucino() {
    this.#amountOfcoffee >= 20 ? this.#brewCoffe(20) : console.log('Досип кави');
    this.#water >= 100 ? this.#useWater(100) : console.log('Долий води');
    this.#milk >= 100 ? this.#useMilk(100) : console.log('Йди купи молока');
    this.#battery >=3 ? this.#useEnergy(3) : console.log('Постав машинку на зарядку');
    console.log('Води лишилось ' + this.#water + ' грам');
    console.log('Кави лишилося ' + this.#amountOfcoffee + ' грам');
    console.log('Молока лишилося ' + this.#milk + ' грам');
    console.log('Батарея заряджена на ' + this.#battery + ' %');
  }
  latte() {
    this.#amountOfcoffee >= 12 ? this.#brewCoffe(12) : console.log('Досип кави');
    this.#water >= 70 ? this.#useWater(70) : console.log('Долий води');
    this.#milk >= 200 ? this.#useMilk(200) : console.log('Йди купи молока');
    this.#battery >=5 ? this.#useEnergy(5) : console.log('Постав машинку на зарядку');
    get all();
  }

}


let newMachine = new Coffemashine (1000, 1000, 1000, 1000);

newMachine.latte()
// newMachine.water
// newMachine.water

// newMachine.getWaterAmount()
// newMachine.latte()
// // newMachine.getWaterAmount()
// newMachine.setWaterAmount()
// newMachine.getWaterAmount()

