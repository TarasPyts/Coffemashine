class Coffemashine {
    constructor(water, amountOfcoffee, milk, battery) {
      this._water = water;
      this._amountOfcoffee = amountOfcoffee;
      this._milk = milk;
      this._battery = battery;
    }
    getWaterAmount() {
      console.log('Води лишилось ' + this._water + ' грам');
    }
    setWaterAmount(value) {
      if (value < 0) throw new Error("Мало води");
      this._water += value;
    }
    getCoffeAmount() {
      console.log('Кави лишилося ' + this._amountOfcoffee + ' грам');
    }
    setCoffeAmount(value) {
      if (value < 0) throw new Error("Мало кави");
      this._amountOfcoffee += value;
    }
    getMilkAmount() {
      console.log('Молока лишилося ' + this._milk + ' грам');
    }
    setMilkAmount(value) {
      if (value < 0) throw new Error("Мало молока");
      this._milk += value;
    }
    getBatteryAmount() {
      console.log('Батарея заряджена на ' + this._battery + ' %')
    }
    setBatteryAmount(value) {
      if (value < 0) throw new Error("Заряди мене");
      this._battery += value;
    }
    espresso() {
      if (this._water >= 50){
        this._water -= 50 
        console.log('Води лишилось ' + this._water + ' грам');
      } else {
          console.log('Долий води')
      };
      if (this._amountOfcoffee >= 12){
        this._amountOfcoffee -= 12 
        console.log('Кави лишилося ' + this._amountOfcoffee + ' грам');
      } else {
          console.log('Досип кави')
      };
      if (this._battery >= 1){
        this._battery -= 1 
        console.log('Батарея заряджена на ' + this._battery + ' %')
      } else {
          console.log('Постав машинку на зарядку')
      };
    }
    cappuchino() {
      if (this._water >= 100){
        this._water -= 100 
        console.log('Води лишилось ' + this._water + ' грам');
      } else {
          console.log('Долий води')
      };
      if (this._amountOfcoffee >= 20){
        this._amountOfcoffee -= 20 
        console.log('Кави лишилося ' + this._amountOfcoffee + ' грам');
      } else {
          console.log('Досип кави')
      };
      if (this._battery >= 3){
        this._battery -= 3 
        console.log('Батарея заряджена на ' + this._battery + ' %')
      } else {
          console.log('Постав машинку на зарядку')
      };
      if (this._milk >= 100){
        this._milk -= 100 
        console.log('Молока лишилося ' + this._milk + ' грам');
      } else {
          console.log('Долий трохи молока')
      };
    }
    latte() {
      if (this._water >= 70){
        this._water -= 100;
        console.log('Води лишилось ' + this._water + ' грам');
      } else {
          console.log('Долий води')
      };
      if (this._amountOfcoffee >= 12){
        this._amountOfcoffee -= 20 
        console.log('Кави лишилося ' + this._amountOfcoffee + ' грам');
      } else {
          console.log('Досип кави')
      };
      if (this._battery >= 5){
        this._battery -= 3 
        console.log('Батарея заряджена на ' + this._battery + ' %')
      } else {
          console.log('Постав машинку на зарядку')
      };
      if (this._milk >= 200){
        this._milk -= 100 
        console.log('Молока лишилося ' + this._milk + ' грам');
      } else {
          console.log('Долий трохи молока')
      };
    
  
    }
    }
  
  
  let newMachine = new Coffemashine (100, 100, 100, 100);
  // newMachine.getWaterAmount()
  // newMachine.latte()
  // // newMachine.getWaterAmount()
  // newMachine.setWaterAmount()
  // newMachine.getWaterAmount()
  newMachine.espresso()
  newMachine.espresso()
  newMachine.espresso()
  newMachine.espresso()
  newMachine.espresso()
  newMachine.espresso()
  
  
  
  
  