// Store Mark's and John's mass and height in variables
const markMass = 78;
const johnMass = 92;
const markHeight = 1.95;
const johnHeight = 1.76;

// Calculate both their BMIs using the formula
/**BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter). **/
const markBMI = markMass / (markHeight * markHeight);
const johnBMI = johnMass / (johnHeight * johnHeight);

// Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John
const markHigherBMI = markBMI > johnBMI;

// Print a nice output to the console, saying who has the higher BMI. The message  is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!
if (markHigherBMI) {
    console.log(`Mark's BMI is higher than John's!`);
    console.log(`Mark's BMI(${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI(${johnBMI}) is higher than Mark's BMI(${markBMI})!`);
}