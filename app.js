console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
  // count backwards to zero (correctly forwards to zero):
  if (count < 0) {
    for (let i = -count; i >= 0; i--) {
      if (i % 2 !== 0) {
        console.log(-i);
      } else {
        continue;
      }
    }
  }
  // count forwards:
  for (let i = 0; i <= count; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    } else {
      continue;
    }
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(name, age) {
  name = name || "my friend";
  age = age || null;
  if (age === null) {
    const missingAge = `Please provide your age, ${name}.`;
    console.log(missingAge);
    return;
  }
  const belowSixteen = `Sorry ${name}, but you need to wait until you're 16.`;
  const aboveSixteen = `Congrats ${name}, you can drive!`;
  if (age < 16) {
    console.log(belowSixteen);
  } else {
    console.log(aboveSixteen);
  }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function cartesianPlane(x, y) {
  if (x === null || y === null) {
    console.log("Please, provide complete coordinates.");
  } else if (x > 0 && y > 0) {
    console.log(`The point (${x}, ${y}) lies in the first quadrant.`);
  } else if (x < 0 && y > 0) {
    console.log(`The point (${x}, ${y}) lies in the second quadrant.`);
  } else if (x < 0 && y < 0) {
    console.log(`The point (${x}, ${y}) lies in the third quadrant.`);
  } else if (x > 0 && y < 0) {
    console.log(`The point (${x}, ${y}) lies in the fourth quadrant.`);
  } else if (x !== 0 && y === 0) {
    console.log(`The point (${x}, ${y}) lies on the x-axis.`);
  } else if (x === 0 && y !== 0) {
    console.log(`The point (${x}, ${y}) lies on the y-axis.`);
  } else {
    // x === 0 && y === 0
    console.log(`The point (${x}, ${y}) lies on the origin`);
  }
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function triangle(a, b, c) {
  if (Math.abs(a - b) < c) {
    if (c < a + b) {
      if (a === b && a === c) {
        console.log("equilateral triangle");
      } else if (
        (a === b && a !== c) ||
        (a !== b && a === c) ||
        (a !== b && b === c)
      ) {
        console.log("isosceles triangle");
      } else {
        console.log("scalene triangle");
      }
    } else {
      console.log("impostor triangle");
    }
  } else {
    console.log("impostor triangle");
  }
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function dataPlanStatus(planLimit, day, usage) {
  // Plan limits are provided exclusively in full gigabytes.
  if (!Number.isInteger(planLimit)) {
    console.log(
      "Invalid input: Plan limits are provided exclusively in full gigabytes.",
    );
    return;
  }
  // For tracking purposes, cycle days are measured in 24-hour blocks, with the current day inclusive of the subsequent 24 hours.
  day = Math.floor(Number(day));
  const remainingData = (planLimit - usage).toFixed(2);
  const remainingDays = 30 - day;
  // The future prescription is how much data to use per day for the remainder of the cycle
  // so that usage equals the planLimit at the completion of the cycle:
  const futurePrescription = (remainingData / remainingDays).toFixed(2);
  // How much data use is expected per day is (planLimit / 30);
  // The expected usage a specific day is ((planLimit / 30) * day);
  const expectedAverageDailyUsage = (planLimit / 30).toFixed(2);
  const expectedUsage = ((planLimit / 30) * day).toFixed(2);
  const trueAverageDailyUsage = (usage / day).toFixed(2);
  if (day >= 30) {
    console.log("Invalid input: no remaining days in the cycle.");
    return;
  }
  if (usage === planLimit) {
    // When usage === planLimit is when the customer runs out of data.
    console.log("You are out of data!");
    return;
  }
  if (usage > planLimit) {
    console.log(
      "Invalid input: your data connection was suspended when you exceeded your plan's gigabyte limit.",
    );
    return;
  }
  if (usage < expectedUsage) {
    console.log(
      `${day} day(s) used, ${remainingDays} day(s) remaining\nRemaining data is ${remainingData} GB\nAverage daily use: ${trueAverageDailyUsage} GB/day\nYou are UNDER the average daily usage of the data plan, which is ${expectedAverageDailyUsage} GB/day.\nThe plan expects ${expectedUsage} GB used on day ${day}.\nTo meet the average daily usage under your data plan at the completion of the cycle, future data use should be ${futurePrescription} GB/day.`,
    );
  } else if (usage == expectedUsage) {
    console.log(
      `${day} day(s) used, ${remainingDays} day(s) remaining\nRemaining data is ${remainingData} GB\nAverage daily use: ${trueAverageDailyUsage} GB/day\nYou are meeting the average daily usage of the data plan, which is ${expectedAverageDailyUsage} GB/day.\nThe plan expects ${expectedUsage} GB used on day ${day}.\nTo keep meeting the average daily usage of your data plan, future use should continue to be ${futurePrescription} GB/day.`,
    );
  } else {
    // usage > expectedUsage
    console.log(
      `${day} day(s) used, ${remainingDays} day(s) remaining\nRemaining data is ${remainingData} GB\nAverage daily use: ${trueAverageDailyUsage} GB/day\nYou are EXCEEDING the prescribed average daily usage of the data plan, which is ${expectedAverageDailyUsage} GB/day.\nThe plan expects ${expectedUsage} GB used on day ${day}.\nContinuing this high usage, you'll exceed your data plan by ${((usage / day) * 30 - planLimit).toFixed(2)} GB.\nTo stay below your data plan, use no more than ${futurePrescription} GB/day.`,
    );
  }
}
