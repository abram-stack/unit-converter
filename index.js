/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputField = document.getElementById("input-field")
const convertBtn = document.getElementById("convert-btn")
const resetBtn = document.getElementById("reset-btn")
const lengthEl = document.getElementById("length-result")
const volumeEl = document.getElementById("volume-result")
const massEl = document.getElementById("mass-result")
let lengthString = ""
let volumeString= ""
let massString = ""

convertBtn.addEventListener("click", function () { 
  lengthConvert(inputField.value)
  volumeConvert(inputField.value)
  massConvert(inputField.value)
})

resetBtn.addEventListener("click", function (target) {
  inputField.value = ""
  lengthEl.textContent = ""
  volumeEl.textContent = ""
  massEl.textContent = ""
})


function lengthConvert(value) { 
  const feetResult = (value * 3.281).toFixed(3)
  const meterResult = (value/3.281).toFixed(3)
  lengthString = `
  ${value} meters = ${feetResult}feet | ${value} feet = ${meterResult} meters
  `
  lengthEl.textContent = lengthString
}

function volumeConvert(value) { 
  const gallonResult = (value * 0.264).toFixed(3)
  const litterResult = (value/0.264).toFixed(3)
  volumeString = `
  ${value} liter = ${gallonResult}gallons | ${value} gallons = ${litterResult} liters
  `
  volumeEl.textContent = volumeString

}

function massConvert(value) {
  const poundResult = (value * 2.204).toFixed(3)
  const kilogramResult = (value/2.204).toFixed(3)
  massString = `
  ${value} kilograms = ${poundResult} pounds | ${value} pounds = ${kilogramResult} kilograms
  `
  massEl.textContent = massString
}