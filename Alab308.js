// First example

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = n1 + n2 + n3 + n4 == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique =
  n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis =
  n1 + n2 + n3 + n4 == 50 &&
  (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2 &&
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
  n1 != n2 &&
  n1 != n3 &&
  n1 != n4 &&
  n2 != n3 &&
  n2 != n4 &&
  n3 != n4;

//answer
let divByFive = n1 % 5 == 0 && n1 % 5 == 0 && n1 % 5 == 0 && n1 % 5 == 0;
console.log(divByFive); // True

// Check if the first number is larger than the last
let compareNs = n1 > n4;
console.log(compareNs); //True

let mathCalc = ((n2 - n1) * n3) % n4;
console.log(mathCalc); // number

// Putting all checks into a single log
console.log(`
  Results of all checks:
  - Sum of numbers is 50: ${isSum50}
  - At least two numbers are odd: ${isTwoOdd}
  - No number is larger than 25: ${isOver25}
  - All numbers are unique: ${isUnique}
  - All numbers are divisible by 5: ${divByFive}
  - The first number is larger than the last: ${compareNs}
  - Result of the arithmetic chain: ${mathCalc}
`);

//Second example

// Trip details
const distance = 1500; // in miles
const fuelBudget = 175; // in dollars
const fuelCostPerGallon = 3; // in dollars

// Fuel efficiency data
const fuelEfficiency = {
  55: 30, // 30 miles per gallon at 55 mph
  60: 28, // 28 miles per gallon at 60 mph
  75: 23, // 23 miles per gallon at 75 mph
};

// Calculate fuel needed, cost, and time for a given speed
function calculateTrip(speed) {
  const milesPerGallon = fuelEfficiency[speed];
  const gallonsNeeded = distance / milesPerGallon;
  const fuelCost = gallonsNeeded * fuelCostPerGallon;
  const timeHours = distance / speed;
  const isBudgetEnough = fuelCost <= fuelBudget;

  console.log(`\n--- Traveling at ${speed} mph ---`);
  console.log(`Gallons of fuel needed: ${gallonsNeeded.toFixed(2)} gallons`);
  console.log(`Total fuel cost: $${fuelCost.toFixed(2)}`);
  console.log(`Is budget enough: ${isBudgetEnough}`);
  console.log(`Total travel time: ${timeHours.toFixed(2)} hours`);
}

// Compare the results at different speeds
calculateTrip(55);
calculateTrip(60);
calculateTrip(75);
