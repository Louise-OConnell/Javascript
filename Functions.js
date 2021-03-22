//Name function
function hello(firstName, lastName) {
    var fullName = 'Hello Louise OConnell'
    return fullName
}
var sayFullName = hello('Louise', 'OConnell')
console.log(sayFullName)

//Temperature function
var currentTemperature = 40

function putOnCoat(temperature){
    if(temperature < 50 && temperature > 30){
        console.log("put on a coat")
    } else if (temperature < 30 && temperature > 0){
        console.log("put on a coat and a hat")
    } else if (temperature < 0){
        console.log("stay inside")
    } else {
        console.log("pants and vest are fine")
    }
}

putOnCoat(currentTemperature)
