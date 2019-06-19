"use strict"


// var i =51

// for(var j =0; j < 51; ++j){
//     console.log(j);
// };

var i =0
//  for (i; i < 51; i++) {
//      console.log(i);
//  }

//   while (i < 50) {i++,
//       console.log(i++);
     
//   }

  while(i < 100){
      if (i % 3 === 0 && i % 5){
          console.log("fizzbuzz");
      } 
      else if (i % 3 === 0){
          console.log("fizz");
      }
      else if (i % 5 === 0){
          console.log("buzz");
      }
      i++;
  }


// while(i<101) {i++; if (i % 3 === 0) {console.log("fizz")};}
// while(i<101) {i++; if (i % 5 === 0) {console.log("buzz")};}
// while(i<101) {i++; if (i % 5 === 0 && i % 3 === 0) {console.log("buzz")};}






//{create a counter variable
//add 1 and log it 50 times using a for loop
//make a while loop that logs every other number up until 50
//loop from 0 to 100
//log the string fizz if the number is divisible by 3
//log the string buzz if the number is divisible by 5
//log the string fizzbuzz if the number is divisibly by both}