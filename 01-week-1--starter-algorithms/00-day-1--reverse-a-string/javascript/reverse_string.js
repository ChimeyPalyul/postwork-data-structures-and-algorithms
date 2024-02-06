function reverseString(str) {
  let reverse = ''
  for(let i = str.length -1; i > -1; --i){
    reverse = reverse + str[i]
  }
  return reverse;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
//So the first thing I need to do is create a string (which i called reverse) that will hold the string in reverse. I first set this to an empty string. 
//Next, I need to iterate through the string, using the for loop, and an iterator(i). The iterator (i) will start at index -1 indicating that it will begin at the last letter.
//the i>-1 will indicate that it needs to iterate for as long as the counter is greater than -1, effectively stopping iteration at 0 or the first element in the string.
// the --i will indicate what needs to be done after each iteration
// we then need to append the results of our function to the empty reverse string, thereby storing it. 
// we then need to return the 'reverse' string 


// And a written explanation of your solution
