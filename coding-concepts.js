// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain WHY your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?


// const cohort = "India 2023"
// console.log(cohort.split(" "))

// a) Your answer: it will slit it into india, 2023
// b) Verify and explain: we only have two values in our string, using .split, splits it into substrings. the " " makes sure its split between the words

// --------------------2) What will this log?

// const greeter = (name) => {
//   `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// a) Your answer: it wont print anything, maybe an error message or sometimes the print log is just empty
// b) Verify and explain: it prints undefined because we told it that greeter is a name, and to say hello to that name, and to print greeter and learn student but we never defined what the name was. or instead of 'define' we didnt declare its definition with a return so there is nothing to call the `Hello, ${name}!` funciton to greeter.

// --------------------3) What will this log?

// const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: im not sure, we are saying to filter numbers that are not equal to 2 with a remainder, which seems like a call to odds. but i dont trust that there isnt something obvious hidden in plain sight here. its gonnna log 11,12,13,14,15
// b) Verify and explain: it gave me this in the console.
// (3) [11, 13, 15]
//so it printed 3 for the number of numbers that will be logged as well as all the odd numbers 

// --------------------4) What will this log?

// const myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
// console.log(myCodingSkills.languages[0])

// a) Your answer: you want to print the langage you have to show coding skills at the 0th index so it will print JavaScript
// b) Verify and explain: it printed 0 in the console.log because youre only calling upon the 0th number in the javascript parameter

// --------------------5) What will this log?

// class Learn {
//   constructor(name) {
//     this.student = name
//     this.cohort = "India"
//     this.year = 2023
//   }
// }
// const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: itll print everything i guess since we called for learnstudent and Learn
// b) Verify and explain: Learn { student: 'George', cohort: 'India', year: 2023 } so there was more to it than I figured would be printed. i wasnt aware it would list it in categories though
