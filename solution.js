// console.log(Q1: xx tickets are sold);

// 1
const ticketPrice = 15;
const totalSales = 6450;
console.log(`Q1: ${totalSales / ticketPrice} tickets are sold.`);

// 2
const weekIncome = 500;
console.log(`Q2: ${weekIncome * 52} is what Sylvia makes a year.`);

// 3
console.log(`Q3: ${(17 / 30) * 100}%`);

// 4
const squareSide = 4.75;
console.log(`Q4: ${squareSide * 4} is the square perimeter`);

// 5
console.log(`Q5: ${5 + 6 + 7} is the triangle perimeter`);

// 6
console.log(`Q6: ${5 * 5} is the square area`);

// 7
console.log(`Q7: ${(3 * 4) / 2} is the area of the right-angled triangle`);

// 8
console.log(`Q8: ${9 ** 3} is the volume of the cube`);

// 9
const billOne = 22.35 * 1.1;
const billTwo = 26.67 * 1.15;
const billThree = 35.92 * 1.2;
console.log(
  `Q9: ${billOne} (bill one), ${billTwo} (bill two), ${billThree} (bill three)`
);

// 10
const workedHours = [8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4];
const sumHours =
  workedHours[0] +
  workedHours[1] +
  workedHours[2] +
  workedHours[3] +
  workedHours[4] +
  workedHours[5] +
  workedHours[6] +
  workedHours[7] +
  workedHours[8] +
  workedHours[9];
const averageHours = sumHours / workedHours.length;
console.log(
  `Q10: ${averageHours} hours, is Noemy\'s average working hours per day.`
);

// 11
const firstFiveScores = [75, 70, 85, 90, 100];
const sumFiveScores =
  firstFiveScores[0] +
  firstFiveScores[1] +
  firstFiveScores[2] +
  firstFiveScores[3] +
  firstFiveScores[4];
const totalScore = 85 * 6;
const sixthTestScore = totalScore - sumFiveScores;

console.log(`Q11: Score in the sixth test: ${sixthTestScore}`);

// 12
const currentTotalScore = 78 * 8;
const desiredAverage = 80 * 9;
const minPercentage = desiredAverage - currentTotalScore;
console.log(desiredAverage, currentTotalScore);
console.log(
  `Q12: James needs a minimum of ${minPercentage}% to get an 80% average`
);
