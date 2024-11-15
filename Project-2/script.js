const inputBoxFeet = document.getElementById("input-box-feet");
const inputBoxInch = document.getElementById("input-box-inch");

inputBoxFeet.addEventListener("input", () => {
    let feet = inputBoxFeet.value;
    let inch = feet * 12;
    inputBoxInch.value = inch;
});

inputBoxInch.addEventListener("input", () => {
    let inch = inputBoxInch.value;
    let feet = inch / 12;
    inputBoxFeet.value = feet;
});