let VehicleType = "car";
let Duration = 27;
let price, charge;

if (VehicleType == "car") {
    price = 5000;
    charge = 3000;
    if (Duration > 1)
        for (x = 1; x < Duration; x++) {
        price += charge;
    }
    if (Duration > 24) {
        price = price += 50000;
    }
} else if (VehicleType == "bike") {
    price = 2000;
    charge = 1000;
    if (Duration > 1)
        for (x = 1; x < Duration; Duration++) {
        price += charge;
    }
    if (Duration > 24) {
        price = price += 20000;
    }
} 
console.log(price);