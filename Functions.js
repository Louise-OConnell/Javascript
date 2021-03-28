//Name function
function hello(firstName, lastName) {
    var fullName = 'Hello Louise OConnell'
    return fullName
}
var sayFullName = hello('Louise', 'OConnell')
console.log(sayFullName)

//Temperature function & conditional statements
function putOnCoat(temperature){
    let output = '';
    if(temperature < 20 && temperature > 10){
        output = "It's a bit chilly out today, please put on a coat."
    } 
    else if (temperature < 10 && temperature > 0){
        output = "Put on a coat, hat, gloves, and scarf."
    }
    else if (temperature < -0){
        output = "It might snow today, please stay inside."
    } else {
        output = "Pants and vest it is!"
    }
  document.getElementById("whatsTheTemp").innerHTML = output;
 }
