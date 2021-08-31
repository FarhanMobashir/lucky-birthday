const birthdateInput = document.querySelector(".birthdate-input");
const luckyNumberInput = document.querySelector(".lucky-number-input");
const checkButton = document.querySelector(".check-button");

const output = document.querySelector(".output");

let userBirthdate = "";
let luckyNumber = "";

birthdateInput.addEventListener("change", function (e) {
  userBirthdate = e.target.value;
});

luckyNumberInput.addEventListener("change", function (e) {
  luckyNumber = e.target.value;
});

function isLucky(date, luckyNumber) {
  let sumOfBdayDigits = 0;
  date = date.split("-").join("").split("");
  for (let i = 0; i < date.length; i++) {
    sumOfBdayDigits += Number(date[i]);
  }
  console.log("Sum", sumOfBdayDigits, "luckyNumber", parseInt(luckyNumber));
  if (sumOfBdayDigits % Number(luckyNumber) === 0) {
    return true;
  } else {
    return false;
  }
}

// console.log(isLucky("10-10-2002", 3));

checkButton.addEventListener("click", function () {
  if (userBirthdate !== "" && luckyNumber !== "") {
    if (isLucky(userBirthdate, luckyNumber) === true) {
      output.innerText = `Wooho your birthdate is a lucky one`;
      setTimeout(() => {
        output.innerText = "";
        birthdateInput.value = "";
        luckyNumberInput.value = "";
        userBirthdate = "";
        luckyNumber = "";
      }, 3000);
    } else if (isLucky(userBirthdate, luckyNumber) === false) {
      output.innerText = `Sorry , your birthdate is not a lucky one`;
      setTimeout(() => {
        output.innerText = "";
        birthdateInput.value = "";
        luckyNumberInput.value = "";
        userBirthdate = "";
        luckyNumber = "";
      }, 3000);
    }
  }
});
