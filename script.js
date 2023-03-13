const day = "Thursday";

switch (day) {
    case "monday":
        console.log(`today is ${day}`);
        break;
    case "tuesday":
        console.log(`today is ${day}`)
        break;
    case "Thursday":
        console.log(`today is ${day}`);
        break;
    case "wednesday":
        console.log(`today is ${day}`)
        break;
    case "friday":
        console.log(`today is ${day}`);
        break;
    case "saturday":
        console.log(`today is ${day}`)
        break;
    case "sunday":
        console.log(`today is ${day}`)
        break;
    default:
        console.log("Invalid day");
        break;
}

let expression = 5 + 5;
console.log(expression)

// Ternary operator

const age = 21;

let ifElseExperssion = age >= 18 ? 'water' : 'wasser';
console.log(ifElseExperssion);

//  const randomString = `Hello I am ${age}` year old and i can drink ${age >=18 ? 'water' : 'wasser'};


/* Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. 
In his country, it's usual
to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. 


It's not
allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and
then try to convert it to a ternary operator!) 


2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). 


Example: 'The
bill was 275, the tip was 41.25, and the total value 316.25' 


TEST DATA: Test for bill values 275, 40 and 430 


HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2 HINT: Value X is between 50 and 300, if it's >=
50 && <= 300 😉 


GOOD LUCK � */



let bill = 275
let tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2
console.log(`the bill is ${bill} and the tip is ${tip}`)



// Functions
// Dry
// Don't repeat Yourself

function logger(word) {
    console.log(word);
}

logger("Adni");


function nutribullet(apples, oranges) {
    console.log(`juice with ${apples} apples and ${oranges} oranges`);
}

nutribullet(2, 3);


function calculation(x, y) {
    return x + y
}
console.log(calculation(1, 2))
console.log(calculation(100, 2))



function calcAge(currentYear, birthYear) {
    return currentYear - birthYear;
}

const arditsAge = calcAge(2023, 1998);
const adnisAge = calcAge(2023, 2002);

console.log(`Ardit is ${arditsAge} year old and Adni is ${adnisAge}`);


function yearsUntilRetirement(birthYear) {
    const age = calcAge(2023, birthYear);
    if (age <= 65) {
        return `You will retire in ${65 - age} years`;
    }
    return "You are already retired sir!";
}

console.log(yearsUntilRetirement(2002))




function anothaFunction2() {
    return "anothaFunction";
    //Function declaration
}

function anothaFunction() {
    return "anothaFunction";
    //Function expression
}

let anothaFunction = () => {
    return "Anotha Function"
    //Arrow function
}


