let title = document.querySelector(".title")
let container = document.getElementById("container")
container.style.fontFamily = "Arial, Helvetica, sans-serif"

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let patientRecords = [
    ["  aHmet yılMaz   ", "Emergency"],
    [" fAtMa ŞaHiN", "Examination"],
    ["  oSMaN KAYA ", "Follow-up"],
    ["MeHMet DeMİR   ", "Cancelled"],
    ["   aLİ cAn", "Emergency"],
    ["  eLiF yILmaZ  ", "Follow-up"],
    ["  aYşe Kara ", "Examination"],
    ["zeHra YILDIZ  ", "Cancelled"],
    [" bURak deMİR ", "Follow-up"]
];

let todayDay = new Date().getDate()
let todayMonth = months[new Date().getMonth()]
let todayYear = new Date().getFullYear()
console.log(todayDay)
console.log(todayMonth)
console.log(todayYear)

title.textContent = `${todayDay} ${todayMonth} ${todayYear}`
title.style.fontFamily = "Arial, Helvetica, sans-serif"

let formattedPatientRecords = []
let fullName;

for(let i = 0; i<patientRecords.length; i++){
    console.log(patientRecords[i])
    fullName = patientRecords[i][0]
    fullName = fullName.trim()
    fullName = fullName.toLowerCase()
    fullName = fullName.split(" ")
    console.log(fullName)
    let combinedName = "";
    for(let j = 0; j<fullName.length; j++){
        // console.log(fullName[j])
        let word = fullName[j]
        console.log(word)
        let firstLetter = word.substring(0,1).toUpperCase()
        let remainingLetters = word.substring(1)
        console.log(firstLetter, remainingLetters)
        combinedName += firstLetter + remainingLetters + " "
    }
    combinedName = combinedName.trimEnd()
    console.log(combinedName)
    let patientStatus = patientRecords[i][1]
    formattedPatientRecords.push([combinedName, patientStatus])
}

console.log(formattedPatientRecords)

formattedPatientRecords.forEach((formattedPatient) => {
    console.log(formattedPatient)
    let div = document.createElement("div")
    console.log(div)
    div.textContent = `Patient Name : ${formattedPatient[0]} | Status : ${formattedPatient[1]}`
    container.appendChild(div)
    div.style.padding = "10px"
    // div.style.marginBottom = "10px"
    div.style.borderBottom = "2px solid #000"
    switch (formattedPatient[1]) {
        case "Emergency":
            div.classList.add("bg-danger")
            break;
        case "Follow-up":
            div.classList.add("bg-info")
            break
        case "Examination":
            div.classList.add("bg-success")
            break
        case "Cancelled":
            div.classList.add("bg-cancel")
            break
        default:
            div.classList.add("bg-warning")
            console.warn("Unknown status entered: " + formattedPatient[1])
            div.textContent = `${div.textContent} (Invalid Record) -> The status "${formattedPatient[1]}" is misspelled. Please correct it!`
            break;
    }

    let randomNumber = Math.floor(Math.random() * 101)
    div.setAttribute("title",`Patient record number : ${randomNumber}`)
    div.textContent = `Patient Record Number : ${randomNumber} | Patient Name : ${formattedPatient[0]} | Status : ${formattedPatient[1]}`
    let button = document.createElement("button")
    button.setAttribute("type","button")
    button.setAttribute("onclick","deleteRecord(this)")
    div.appendChild(button)
    button.textContent = "Delete"
    button.style.marginLeft = "30px"
    button.style.padding = "10px 30px"
    button.style.cursor = "pointer"
    console.log(button)
})

const deleteRecord = (clickedButton) => {
    clickedButton.parentElement.remove()
}