let user = {
    name: "Tarun",
    age: 21,
    city: "New Delhi",
    fav: ["black" ,"white", "blue" ],
    demo: function() {
        return "demo";
    }
};
// string literals
console.log("my name is "+ user.name + " my fav color is "+ user.fav[1],user.demo());
console.log(`my name is  ${user.name}, my fac color ${user.fav[2]}`);


const car = {
    make: "mahindra",
    model: "xuv700",
};
Object.freeze(car); //in freeze we cant add new key value also cant change or update the values

Object.seal(car); //in seal we cant add new key value but we can change or update the values

caa.model = "thar"; //updating the model value  
car.year = 2022; //adding new key value


console.log(car);   l
//output : { make: 'mahindra', model: 'thar' }