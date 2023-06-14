"use strict";
let inputCentimeter = document.querySelector("#centimeter");
let inputInches = document.querySelector("#inches");
const convertToCm = function (e) {
    inputCentimeter.value = (calculateCm(parseFloat(this.value))).toString();
};
const convertToInches = function (e) {
    inputInches.value = (calculateInches(parseFloat(this.value))).toString();
};
inputInches.addEventListener("input", convertToCm);
inputCentimeter.addEventListener("input", convertToInches);
function calculateCm(inche) {
    return inche * 2.54;
}
function calculateInches(cm) {
    return cm * 0.393701;
}
