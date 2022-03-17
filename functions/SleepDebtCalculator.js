const getActualSleepHours = () => 6 + 7 + 9 + 3 + 3 + 4 + 5;

const getIdealSleepHours = (idealHours) => idealHours * 7;

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(7);
  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "You got " +
        (actualSleepHours - idealSleepHours) +
        " hour(s) more sleep than you needed this week."
    );
  } else {
    console.log(
      "You got " +
        (idealSleepHours - actualSleepHours) +
        " hour(s) less sleep than you needed this week. Get some rest."
    );
  }
};

calculateSleepDebt();
