const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'bobby',
      hometown: 'Tampa Bay' }
  ]


function findMatching(drivers){
 let result = drivers.filter(checkSame)
 console.log(result)
}

function checkSame (drivers){
    return drivers.name = drivers.name
}

findMatching(drivers)



function fuzzyMatch(){}
function matchName(){}

// this as far as i could go. Guidance might be of great help. I am stuck