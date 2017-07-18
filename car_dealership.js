function car(category, rental_price, available) {
    this.category = category;
    this.price = rental_price;
    this.available = available;
}

var sedan = new car("sedan", 24, "yes");
var suv = new car("suv", 30, "yes");
var sports = new car("sports", 35, "yes");

function rentCar(type) {
    if (type.available === "yes"){
        console.log("Yes! An "+type.category+" is available.  It costs $"+ type.price+ " an hour. Would you like to rent it?");
    }
}

rentCar(suv);