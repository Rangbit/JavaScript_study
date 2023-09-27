console.log("hello js");

const password = prompt("please enter a new password")

if(password.length >= 6) {
    if(password.indexOf(' ')===-1){
        console.log("good");
    }else {
        console.log("cannot be space");
    }
} else {
    console.log("password too short. must be 6+ char");
}

const day = 20;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saterday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("non?");
        break;
}

// up down

let maximum = parseInt(prompt("Enter the maximum number!"));

while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"))
}

const targetNum = Math.floor(Math.random() * maximum) +1;

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    guess = parseInt(guess);
    if (guess > targetNum) {
        guess = prompt("Too high!")
        attemts++;
    } else if(guess < targetNum){
        guess = prompt("Too low")
        attemts++;
    }else {
        guess = prompt("Invalid guess")
    }
}

if(guess === 'p'){
    console.log("Quit")
} else {
    console.log("You Win");
    console.log(`You got it ${attempts}`);
}


// Loop for of
const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners'];

for (let i = 0; i < subreddits.length; i++) {
    console.log(`visit reddit.com/r/${subreddits[i]}`);
}

for (let sub of subreddits){
    console.log(`visit reddit.com/r/${sub}`);
}

// for in

const testScores = {
    keenan : 80,
    damon : 67,
    kim : 89,
    shawn : 91,
    marlon : 72,
    dwayne : 77,
    nadia : 83,
    elvira : 97,
    diedre : 81,
    vonnie : 60
}

for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}