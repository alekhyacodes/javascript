
// Calculate the average score for each team, using the test data below
// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// ata Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
const scores = {
    dolphins: [97, 112, 80],
    koalas: [109, 95, 50],
}
const averageScores = {
    dolphins: (scores.dolphins[0] + scores.dolphins[1] + scores.dolphins[2]) / scores.dolphins.length,
    koalas: (scores.koalas[0] + scores.koalas[1] + scores.koalas[2]) / scores.koalas.length
}


console.log(averageScores.dolphins, averageScores.koalas);

// Compare the team's average scores to determine the winner of the competition,
// and print it to the console.Don't forget that there can be a draw, so test for that
// as well(draw means they have the same average score)
//Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
if ((averageScores.dolphins > averageScores.koalas) && (averageScores.dolphins >= 100)) {
    console.log("Dolphins team wins 🏆!!");
} else if ((averageScores.dolphins === averageScores.koalas) && (averageScores.dolphins >= 100)) {
    console.log("There was a draw!!");
} else if ((averageScores.koalas > averageScores.dolphins) && (averageScores.koalas >= 100)) {
    console.log("Koalas team wins!! 🏆");
} else {
    console.log("No minimum score(100) so no Team wins! 😭");
}



