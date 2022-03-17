let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;
const age = 27;

if (age > 18 && registeredEarly) {
  raceNumber += 1000;
  console.log(
    `Your race number is: ${raceNumber}. And you will start the race at 9:30 am.`
  );
} else if (age > 18 && !registeredEarly) {
  console.log(
    `Your race number is: ${raceNumber}. And you will start the race at 11:00 am.`
  );
} else if (age < 18) {
  console.log(
    `Your race number is: ${raceNumber}. And you will start the race at 12:30 pm.`
  );
} else {
  console.log("You have to see the registration desk.");
}
