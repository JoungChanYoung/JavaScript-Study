const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizer() {
    return this._courses.appetizers;
  },
  set appetizers(appetizerIn) {
    this._courses.appetizers = appetizerIn;
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(mainIn) {
    this._courses.mains = mainIn;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(dessertIn) {
    this._courses.desserts = dessertIn;
  },
  get courses() {
    return {
      appetizers: this.appetizer,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(dishes.length * Math.random());
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} The price is ${totalPrice}.`;
  },
};

menu.addDishToCourse("appetizers", "Caesar Salad", 2.25);
menu.addDishToCourse("appetizers", "Salad", 2.25);
menu.addDishToCourse("mains", "Beaf", 8.25);
menu.addDishToCourse("mains", "Pizza", 5.25);
menu.addDishToCourse("desserts", "ice-cream", 1.25);
menu.addDishToCourse("desserts", "tea", 1.25);

let meal = menu.generateRandomMeal();
console.log(meal);
