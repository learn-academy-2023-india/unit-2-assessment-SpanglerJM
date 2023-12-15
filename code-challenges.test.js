// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// Pseudo code:

//--------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// const divideByThree = (object) => {
//   const czechItYo = object.divide
//   return czechItYo % 3 === 0
// }
// it feels like line 23 should have (% 3 === 0) or something idk
// const czechOne = { divide: 45 }
// const czechTwo = { divide: 95 }

// console.log(divideByThree(czechOne))
// console.log(divideByThree(czechTwo))

// a) Create a test with expect statements for each of the variables provided.
// describe('Testing czech1 object', () => {
//   it('should check if the number is evenly divisible by three', () => {
//     expect(czech1.divide % 3 === 0 ).toEqual('is divisible by three')
//     expect(czech1.divide % 3 === 2 ).toEqual('is not divisible by three')
//   })
// })

// const czech1 = { divide: 15 } 
// Expected output: "15 is divisible by three"
// const czech2 = { divide: 0 }
// Expected output: "0 is divisible by three"
// const czech3 = { divide: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.
// const divideByThree = (object) => {
//   const czechItYo = object.divide
//   return czechItYo % 3 === 0
// }

// const czech1 = { divide: -7 }

// describe('Testing czech1 object', () => {
//   it('should check if the number is evenly divisible by three', () => {
//     expect(divideByThree(czech1)).toBeTruthy()
//   })
// })

// Pseudo code: first i gotta make a function except put an ogject in the funcitons parameter and it checks to see if the number being called is evenly divisible by three using % 3 === 0) with the object.divide. not the most creative words used I know but I am saving brain power right now. For the test i took the template from the syllabus and just plugged in the information i wanted to know and test. I must havae messed up somewhere because my terminal says i dont have liscences to run the json file. Either way since I noticed the directions said to have the test say 'is/ is not divisible by three' so that means it cant just fail or pass, the output needs to be personal like an if/then statement so I added another expect line. I dont know why I cant even run the test, i followed the syllabus and the anatomy of a test but cant see where my mistake is. Got it to run, terminal issue. but it fails, which is a good thing, to pass the test i need to make sure my fucntion returns it correctly, so since the whole text is function dependent as long as the function logic is correct the test should pass. check whether the number is evenly divisible by three, the test will pass if the function returns a true value for whtever the czechc1 object represents.

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
// const assessmentNouns = (capital) => {
//   return capital.map((nouns) => nouns.charAt(0).toUpperCase() + nouns.slice(1))
// }

// const randomNouns1 = ['streetlamp', 'potato', 'teeth', 'conclusion', 'nephew']
// const learnArray = assessmentNouns(randomNouns1)

// console.log(learnArray)
// a) Create a test with expect statements for each of the variables provided.

// describe('capitalIdea', () => {
//   it('takes in an array of words and returns an array with all the words capitalized', () => {
//     expect(learnArray).toEqual(['Streetlamp', 'Potato', 'Teeth', 'Conclusion', 'Nephew'])
//   })
// })

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// Pseudo code: I keep seeing charAt and finally looked it up. Finding out you can get the first charachter in a string so that feels obvious syntax now that i know what it does. anyways i am trying to use charAt(0) to modify the first charachter. this function tells us it will make a function and capital the first letters, and put it back into an array with the new changes to the 0th index character.

// to get it to pass i think i need to alter the expect statement? or at least thats what my terminal is having a problem with. im torn between not changing the statement to fulfil the requirements of the assignment but if the outcome is the same does it matter? i think it does. so maybe change the function around...to return a single string instead of an array of strings? like use .join after i slice them? but the instructions say 'returns an array with all the words capitalized', so it has to be an array. im really at a loss here. like it passes but didnt follow directions specifically.

const assessmentWords = (capital) => {
  return capital.map((nouns) => {
    return nouns.charAt(0).toUpperCase() + nouns.slice(1);
  }).join(' ')
}

const randomNouns1 = ['streetlamp', 'potato', 'teeth', 'conclusion', 'nephew']
const learnString = assessmentWords(randomNouns1);

console.log(learnString);

describe('capitalIdea', () => {
  it('takes in an array of words and returns a string with all the words capitalized', () => {
    expect(assessmentWords(randomNouns1)).toEqual('Streetlamp Potato Teeth Conclusion Nephew')
  })
})


// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// const randomString = randomNouns1[0].toUpperCase() + randomNouns1.slice(1);
// console.log(randomNouns1)
// console.log(randomString)
