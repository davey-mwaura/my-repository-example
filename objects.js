let employee = {
    name:"Allan",
    streetAddress: "254",
}


// functions

function updateEmployeeWithKeyAndValue(key, value){
    employee.key = value
    console.log("New Key added")
}

function destructivelyUpdateEmployeeWithKeyAndValue(key){
    delete employee[key];
    console.log("Key deleted")
    
}

function deleteFromEmployeeByKey(key){
    let employeetwo = {...employee}
    delete employeetwo[key];
    console.log(employee)
    console.log(employeetwo)

}

function destructivelyDeleteFromEmployeeByKey(){
    delete employee.name;
    delete employee.streetAddress
    console.log(employee)
}

destructivelyDeleteFromEmployeeByKey()
