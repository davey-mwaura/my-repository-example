function writeCards(names, birthday) {
  for (let i = 0; i < names.length; i++) 
    console.log(`Thank you, ${names[i]} , for the wonderful ${birthday}`);
}

writeCards(["Charlie", "Samip", "Ali"], "birthday gift!")


let countDown = 10;
while (countDown >= 0) {
  console.log(countDown--)
}

