/*
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const tempreture = document.getElementById("Tempreture");
const button = document.getElementById("cvt-btn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
    const enteredValue = tempreture.value;
    const fromUnitValue = fromUnit.value;
    const toUnitValue = toUnit.value;
    let convertedValue;
    if (fromUnitValue === "C" && toUnitValue === "F") {
        convertedValue = (enteredValue * 9 / 5) + 32;
        result.textContent = `${enteredValue}\u00B0C is ${convertedValue.toFixed(2)}\u00B0F`;
    } else if (fromUnitValue === "C" && toUnitValue === "K") {
        convertedValue = enteredValue + 273.15;
        result.textContent = `${enteredValue}\u00B0C is ${convertedValue.toFixed(2)}\u00B0K`;
    } else if (fromUnitValue === "F" && toUnitValue === "C") {
        convertedValue = (enteredValue - 32) * 5 / 9;
        result.textContent = `${enteredValue}\u00B0F is ${convertedValue.toFixed(2)}\u00B0C`;
    } else if (fromUnitValue === "F" && toUnitValue === "K") {
        convertedValue = (enteredValue + 459.67) * 5 / 9;
        result.textContent = `${enteredValue}\u00B0F is ${convertedValue.toFixed(2)}\u00B0K`;
    } else if (fromUnitValue === "K" && toUnitValue === "C") {
        convertedValue = enteredValue - 273.15;
        result.textContent = `${enteredValue}\u00B0K is ${convertedValue.toFixed(2)}\u00B0C`;
    } else if (fromUnitValue === "K" && toUnitValue === "F") {
        convertedValue = (enteredValue * 9 / 5) - 459.67;
        result.textContent = `${enteredValue}\u00B0K is ${convertedValue.toFixed(2)}\u00B0F`;
    } else {
        result.textContent = `Invalid Input or same unit selected`;
    }
});
*/

const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const tempreture = document.getElementById("Tempreture");
const button = document.getElementById("cvt-btn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
    const fromUnitValue = fromUnit.value;
    const toUnitValue = toUnit.value;
    const storedValue = tempreture.value;
    let convertedValue;
    switch (fromUnitValue + toUnitValue) {
        case "CF":
            convertedValue = (storedValue * 9 / 5) + 32;
            result.textContent = `${storedValue}\u00B0C is ${convertedValue.toFixed(2)}\u00B0F`;
            break;
        case "CK":
            convertedValue = storedValue + 273.15;
            result.textContent = `${storedValue}\u00B0C is ${convertedValue.toFixed(2)}\u00B0K`;
            break;
        case "FC":
            convertedValue = (storedValue - 32) * 5 / 9;
            result.textContent = `${storedValue}\u00B0F is ${convertedValue.toFixed(2)}\u00B0C`;
            break;
        case "FK":
            convertedValue = (storedValue + 459.67) * 5 / 9;
            result.textContent = `${storedValue}\u00B0F is ${convertedValue.toFixed(2)}\u00B0K`;
            break;
        case "KC":
            convertedValue = storedValue - 273.15;
            result.textContent = `${storedValue}\u00B0K is ${convertedValue.toFixed(2)}\u00B0C`;
            break;
        case "KF":
            convertedValue = (storedValue * 9 / 5) - 459.67;
            result.textContent = `${storedValue}\u00B0K is ${convertedValue.toFixed(2)}\u00B0F`;
            break;
        default:
            result.textContent = `Invalid Input or same Unit Selected`
    }
});