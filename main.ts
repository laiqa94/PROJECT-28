

// Set a value for the variable age, and then:
let age: Number = 25;

// If the person is less than 2 years old, print a message that the person is a baby.
if(age < 2){
   console.log("person is a baby.");
}
else if(age >= 2 && age< 4){
    console.log("person is a toddler.");
}
else if(age >= 4 && age < 13){
    console.log("person is a kid.");
}
else if(age >= 13 && age < 20){
   console.log("person is a teenager.") ;
}
else if(age >= 20 && age < 65 ){
    console.log("person is aduld.");
}
else {
    console.log("you are elder.");
}