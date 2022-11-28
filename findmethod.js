const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]

function superbowlWin(Array){
let Checker = Array.find(checkWin)
console.log(Checker)
}

function checkWin(record){
return record.result === "W"
}

superbowlWin(record)

