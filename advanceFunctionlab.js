const returnFirstTwoDrivers= function() {
   let driversFirst = ["Kimani","Ellis" ]
    return driversFirst
    
} 

const returnLastTwoDrivers= function() {
    let driversLast = ["Dan","Kim" ]
     return driversLast
     
 } 

let selectingDrivers = [returnFirstTwoDrivers(),returnLastTwoDrivers()]

function createFareMultiplier(num) {
   return num*4
}

const fareDoubler= function(){
   return createFareMultiplier()*2
}

const fareTripler= function(){
   return createFareMultiplier()*3
}

function selectDifferentDrivers(value){
if (value ==="returnFirstTwoDrivers"){
    console.log(returnFirstTwoDrivers())
    
}

else if(value === "returnLastTwoDrivers"){
    console.log(returnLastTwoDrivers())
}
}

