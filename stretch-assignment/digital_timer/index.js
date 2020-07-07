const secondTens = document.querySelector("#secondTens");
const secondOnes = document.querySelector("#secondOnes");
const msHundreds = document.querySelector("#msHundreds");
const msTens = document.querySelector("#msTens");
let milihundredths = 0
let militenths =0
let seconds = 0
let tenthseconds = 0
function countseconds() {
    //when count gets to 10 increment next number
    secondTens.innerHTML = tenthseconds
    secondOnes.innerHTML = seconds
    msHundreds.innerHTML = milihundredths
    msTens.innerHTML = militenths
    if (tenthseconds < 1) {
        if (seconds <= 9) {
            if (milihundredths < 9) {
                if (militenths < 9) {
                    militenths++
                    msTens.innerHTML = militenths
                } else {
                    milihundredths++
                    militenths = 0
                    msTens.innerHTML = militenths
                    msHundreds.innerHTML = milihundredths
                }
            } else {
                milihundredths = 0
                seconds++
                secondOnes.innerHTML = seconds
            }
        } else {
            seconds = 0
            tenthseconds++
            secondTens.innerHTML = tenthseconds
        }
    }
    
}

function begin() {
  countseconds();
  setTimeout(begin, 10);
}
begin();


