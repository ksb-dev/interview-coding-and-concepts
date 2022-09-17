// Almost everything in javascript is an Object

// 1. Accessing object property

const myCity = {
    city: "Belagavi",
    state: "Karnataka",
    pin:{
        pinCode: 590006
    }
}

console.log(myCity.state);

// 2. Modifying properties of an object

myCity.city = "Bengaluru";

console.log(myCity.city);

// 3. Adding properties to an object

myCity.country = "India";

console.log(myCity);

// 4. Removing properties from an object

delete myCity.city;

console.log(myCity);

// 5. Accessing nested properties

console.log(myCity.pin.pinCode);

// Global Object (window -> In web browser global -> In Node.js)


