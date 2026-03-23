console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
  // seemingly counting backward to zero—while truly counting forward to zero:
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
    const missingAge = `How many candles are on your cake, ${name}?`;
    console.log(missingAge);
    return;
  }
  if (age < 16) {
    const belowSixteen = `Sorry, ${name}, but you need to wait until you're sixteen.`;
    console.log(belowSixteen);
  } else {
    // age >= 16
    const aboveSixteen = `Congrats, ${name}—you may drive!`;
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
  // Plan limits are set in full gigabytes.
  if (!Number.isInteger(planLimit)) {
    console.log(
      "Invalid input: Packages are exclusively sold in full gigabytes.",
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
      "Invalid input: Your service was suspended when you exceeded your plan's gigabyte limit.",
    );
    return;
  }
  const remainingData = parseFloat((planLimit - usage).toFixed(2));
  // For tracking purposes, service days are measured in 24-hour blocks, each of which commences at midnight and lasts through the subsequent 24 hours.
  day = Math.floor(Number(day));
  // The conclusion of a service period—seemingly at midnight on the thirtieth service day—is the commencement of the following service period: truly at midnight on the zeroth service day.
  if (day === 0) {
    console.log(
      `Carrier Mobile: Your service has renewed; therefore, your balance has been replenished. Your allowance during this service period, spanning thirty service days, is ${planLimit} GB.`,
    );
    return;
  }
  if (day >= 30) {
    console.log(
      "Invalid input: Service periods span thirty service days; therefore, the latest iteration was completed.",
    );
    return;
  }
  const remainingDays = 30 - day;
  // The projected daily usage is (planLimit / 30) GB; therefore, the projected usage by a specific service day is ((planLimit / 30) * day) GB.
  const projectedAverageDailyUsage = parseFloat((planLimit / 30).toFixed(2));
  const projectedUsage = parseFloat(((planLimit / 30) * day).toFixed(2));
  const actualAverageDailyUsage = parseFloat((usage / day).toFixed(2));
  // The future prescription sets a daily target for the rest of the service period, ensuring that the cumulative usage aligns with the plan limit upon service period completion.
  const futurePrescription = parseFloat(
    (remainingData / remainingDays).toFixed(2),
  );
  if (usage < projectedUsage) {
    if (day === 1) {
      console.log(
        `Carrier Mobile: ${day} service day used, ${remainingDays} service days remaining\nProjected total usage by today: ${projectedUsage} GB\nActual total usage by today: ${usage.toFixed(2)} GB\nRemaining data: ${remainingData} GB\nProjected average daily usage: ${projectedAverageDailyUsage} GB\nActual average daily usage: ${actualAverageDailyUsage} GB\nStatus: You're tracking BELOW your plan's projections, so to close this gap, raise your daily usage to ${futurePrescription} GB.`,
      );
    } else if (day === 29) {
      console.log(
        `Carrier Mobile: ${day} service days used, ${remainingDays} service day remaining\nProjected total usage by today: ${projectedUsage} GB\nActual total usage by today: ${usage.toFixed(2)} GB\nRemaining data: ${remainingData} GB\nProjected average daily usage: ${projectedAverageDailyUsage} GB\nActual average daily usage: ${actualAverageDailyUsage} GB\nStatus: You're tracking BELOW your plan's projections, so to close this gap, raise your daily usage to ${futurePrescription} GB.`,
      );
    } else {
      console.log(
        `Carrier Mobile: ${day} service days used, ${remainingDays} service days remaining\nProjected total usage by today: ${projectedUsage} GB\nActual total usage by today: ${usage.toFixed(2)} GB\nRemaining data: ${remainingData} GB\nProjected average daily usage: ${projectedAverageDailyUsage} GB\nActual average daily usage: ${actualAverageDailyUsage} GB\nStatus: You're tracking BELOW your plan's projections, so to close this gap, raise your daily usage to ${futurePrescription} GB.`,
      );
    }
  } else if (usage === projectedUsage) {
    if (day === 1) {
      console.log(
        `Carrier Mobile: ${day} service day used, ${remainingDays} service days remaining\nProjected total usage by today: ${projectedUsage} GB\nActual total usage by today: ${usage.toFixed(2)} GB\nRemaining data: ${remainingData} GB\nProjected average daily usage: ${projectedAverageDailyUsage} GB\nActual average daily usage: ${actualAverageDailyUsage} GB\nStatus: You're aligned with your plan's projections, so to stay on track, maintain your daily usage of ${futurePrescription} GB.`,
      );
    } else if (day === 29) {
      console.log(
        `Carrier Mobile: ${day} service days used, ${remainingDays} service day remaining\nProjected total usage by today: ${projectedUsage} GB\nActual total usage by today: ${usage.toFixed(2)} GB\nRemaining data: ${remainingData} GB\nProjected average daily usage: ${projectedAverageDailyUsage} GB\nActual average daily usage: ${actualAverageDailyUsage} GB\nStatus: You're aligned with your plan's projections, so to stay on track, maintain your daily usage of ${futurePrescription} GB.`,
      );
    } else {
      console.log(
        `Carrier Mobile: ${day} service days used, ${remainingDays} service days remaining\nProjected total usage by today: ${projectedUsage} GB\nActual total usage by today: ${usage.toFixed(2)} GB\nRemaining data: ${remainingData} GB\nProjected average daily usage: ${projectedAverageDailyUsage} GB\nActual average daily usage: ${actualAverageDailyUsage} GB\nStatus: You're aligned with your plan's projections, so to stay on track, maintain your daily usage of ${futurePrescription} GB.`,
      );
    }
  } else {
    // usage > projectedUsage
    if (day === 1) {
      console.log(
        `Carrier Mobile: ${day} service day used, ${remainingDays} service days remaining\nProjected total usage by today: ${projectedUsage} GB\nActual total usage by today: ${usage.toFixed(2)} GB\nRemaining data: ${remainingData} GB\nProjected average daily usage: ${projectedAverageDailyUsage} GB\nActual average daily usage: ${actualAverageDailyUsage} GB\nStatus: You're EXCEEDING your plan's projections, and if you continue this high usage, you'll exceed your plan limit by ${((usage / day) * 30 - planLimit).toFixed(2)} GB. Therefore, to get on the right track, scale back your daily usage to ${futurePrescription} GB.`,
      );
    } else if (day === 29) {
      console.log(
        `Carrier Mobile: ${day} service days used, ${remainingDays} service day remaining\nProjected total usage by today: ${projectedUsage} GB\nActual total usage by today: ${usage.toFixed(2)} GB\nRemaining data: ${remainingData} GB\nProjected average daily usage: ${projectedAverageDailyUsage} GB\nActual average daily usage: ${actualAverageDailyUsage} GB\nStatus: You're EXCEEDING your plan's projections, and if you continue this high usage, you'll exceed your plan limit by ${((usage / day) * 30 - planLimit).toFixed(2)} GB. Therefore, to get on the right track, scale back your daily usage to ${futurePrescription} GB.`,
      );
    } else {
      console.log(
        `Carrier Mobile: ${day} service days used, ${remainingDays} service days remaining\nProjected total usage by today: ${projectedUsage} GB\nActual total usage by today: ${usage.toFixed(2)} GB\nRemaining data: ${remainingData} GB\nProjected average daily usage: ${projectedAverageDailyUsage} GB\nActual average daily usage: ${actualAverageDailyUsage} GB\nStatus: You're EXCEEDING your plan's projections, and if you continue this high usage, you'll exceed your plan limit by ${((usage / day) * 30 - planLimit).toFixed(2)} GB. Therefore, to get on the right track, scale back your daily usage to ${futurePrescription} GB.`,
      );
    }
  }
}
