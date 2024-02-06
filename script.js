var chocolate = Number(
  prompt(
    "How many pieces of chocolate would you like? Enter a number between 0 and 10."
  )
);
var leftOverChocolate = 10 - chocolate;

if (leftOverChocolate === 10) {
  alert("You didn't want any chocolate?");
} else if (leftOverChocolate >= 6) {
  alert(`There are ${leftOverChocolate} pieces left. Still have lots`);
} else if (leftOverChocolate >= 1) {
  alert(`There are ${leftOverChocolate} pieces left. Getting low`);
} else {
  alert("There is no more chocolate left. Yum!");
}
