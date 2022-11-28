const tutorials = [
    {name :"what does the this keyword mean?"},
    {name :"What is the Constructor OO pattern?"},
    {name :"implementing Blockchain Web API"},
    {name :"The Test Driven Development Workflow"},
    {name :"What is NaN and how Can we Check for it"},
    {name :"What is the difference between stopPropagation and preventDefault?"},
    {name :"Immutable State and Pure Functions"},
    {name :"what is the difference between == and ===?"},
    {name :"what is the difference between event capturing and bubbling?"},
    {name :"what is JSONP?"},
  ];


  function Titlecase(tutorials){
   let tutorialsCopy = Object.assign({},tutorials)
   tutorialsCopy.titleCased()
   return tutorialsCopy
  }

  function turncase(tutorials){
   tutorials.map(Titlecase)
   return tutorials
  }

  turncase()

  // this as far as i could go. Guidance might be of great help. I am stuck