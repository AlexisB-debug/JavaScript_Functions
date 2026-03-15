console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
  // seemingly counting backward to zero (truly counting forward to zero):
  if (count < 0) {
    for (let i = -count; i >= 0; i--) {
      if (i % 2 !== 0) {
        console.log(-i);
      } else {
        continue;
      }
    }
  }
  // counting forward from zero:
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
  if (age < 16) {
    const belowSixteen = `Sorry, ${name}, but you need to wait until you're sixteen.`;
    console.log(belowSixteen);
  } else {
    const aboveSixteen = `Congrats, ${name}, you may drive!`;
    console.log(aboveSixteen);
  }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function cartesianPlane(x, y) {
  if (x > 0 && y > 0) {
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
    console.log(`The point (${x}, ${y}) is the origin.`);
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
  // When usage hits the plan limit, the subscriber runs out of data.
  if (usage === planLimit) {
    console.log("Carrier Mobile: You are out of data!");
    return;
  }
  if (usage > planLimit) {
    console.log(
      "Invalid input: Your data service was suspended when you exceeded your plan's gigabyte limit.",
    );
    return;
  }
  const remainingData = parseFloat((planLimit - usage).toFixed(2));
  // For tracking purposes, service days are measured in 24-hour blocks, with the current day inclusive of the subsequent 24 hours.
  day = Math.floor(Number(day));
  // The expiration of a service period, seemingly midnight the thirtieth day, is the commencement of the following service period, truly midnight the zeroth day.
  if (day === 0) {
    console.log(
      `Carrier Mobile: Your service has renewed; your balance has been replenished.\nYour allowance during this service period, spanning thirty days, is ${planLimit} GB.`,
    );
    return;
  }
  if (day >= 30) {
    console.log(
      "Invalid input: Service periods span thirty days; the latest iteration was completed.",
    );
    return;
  }
  const remainingDays = 30 - day;
  // The expected daily data usage is (planLimit / 30) GB; the expected data usage on a specific day is ((planLimit / 30) * day) GB.
  const expectedAverageDailyUsage = parseFloat((planLimit / 30).toFixed(2));
  const expectedUsage = parseFloat(((planLimit / 30) * day).toFixed(2));
  const trueAverageDailyUsage = parseFloat((usage / day).toFixed(2));
  // The future prescription sets the daily data target for the rest of the service period, ensuring the total usage matches the plan limit upon completion.
  const futurePrescription = parseFloat(
    (remainingData / remainingDays).toFixed(2),
  );
  if (usage < expectedUsage) {
    console.log(
      `Carrier Mobile:\n${day} day(s) used, ${remainingDays} day(s) remaining\nRemaining data: ${remainingData} GB\nAverage daily data usage: ${trueAverageDailyUsage} GB\nYou're tracking BELOW your plan's projected average of ${expectedAverageDailyUsage} GB/day.\nYour plan projects your data usage to reach ${expectedUsage} GB by day ${day}.\nTo meet your plan limit, raise your daily usage to ${futurePrescription} GB.`,
    );
  } else if (usage === expectedUsage) {
    console.log(
      `Carrier Mobile:\n${day} day(s) used, ${remainingDays} day(s) remaining\nRemaining data: ${remainingData} GB\nAverage daily data usage: ${trueAverageDailyUsage} GB\nYou're meeting your plan's projected average of ${expectedAverageDailyUsage} GB/day.\nYour plan projects your data usage to reach ${expectedUsage} GB by day ${day}.\nTo keep meeting your plan limit, maintain your daily usage of ${futurePrescription} GB.`,
    );
  } else {
    // usage > expectedUsage
    console.log(
      `Carrier Mobile:\n${day} day(s) used, ${remainingDays} day(s) remaining\nRemaining data: ${remainingData} GB\nAverage daily data usage: ${trueAverageDailyUsage} GB\nYou're EXCEEDING your plan's projected average of ${expectedAverageDailyUsage} GB/day.\nYour plan projects your data usage to reach ${expectedUsage} GB by day ${day}.\nContinuing this high usage, you'll exceed your plan limit by ${((usage / day) * 30 - planLimit).toFixed(2)} GB.\nTo stay within your plan limit, restrict your daily usage to ${futurePrescription} GB.`,
    );
  }
}
