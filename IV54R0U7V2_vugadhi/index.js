// Set the countdown date (YYYY/MM/DD)
const countdownDate = new Date('2023/03/22');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate.getTime() - now;

    // Calculate days, hours, minutes, and seconds remaining
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the countdown timer HTML
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);



// get current Telugu tithi
function getTithi() {
    var tithis = ["పాడ్యమి", "విదియ", "తృతీయ", "చతుర్థి", "పంచమి", "షష్ఠి", "సప్తమి", "అష్టమి", "నవమి", "దశమి", "ఏకాదశి", "ద్వాదశి", "త్రయోదశి", "చతుర్దశి", "పౌర్ణమి", "అమావాస్య"];
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();

    // calculate Telugu month and day
    var k = Math.floor((year - 1900) * 12.3685);
    var d = Math.floor(11 * (year % 60));
    var m = Math.floor((month + 9) % 12);
    var l = Math.floor((year - 2000 - 1) / 4);
    var n = 14 - m - l;
    var tithi = (day + n + d + k) % 15;

    return tithis[tithi];
}

// display Telugu tithi on the webpage
document.getElementById("tithi").innerHTML = getTithi();


function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    const datetimeString = `${date} \n ${time}`;
    document.getElementById("datetime").textContent = datetimeString;
}

setInterval(updateDateTime, 1000);


// Define Telugu week days
const teluguWeekDays = [
    "ఆదివారం",
    "సోమవారం",
    "మంగళవారం",
    "బుధవారం",
    "గురువారం",
    "శుక్రవారం",
    "శనివారం",
];

// Get the current Telugu week day
const teluguWeekDay = teluguWeekDays[new Date().getDay()];

// Display the Telugu week day in the HTML element
const teluguWeekElement = document.getElementById("telugu-week");
teluguWeekElement.textContent = `${teluguWeekDay}`;

// GOOGLE

// sTAR 

function displayStar() {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var totalDays = (year) * 365 + Math.floor((year - 1) / 4) + 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + day + 2;
    if (month > 2 && year % 4 === 0) {
        totalDays++;
    }
    var nakshatras = ['అశ్విని', 'భరణి', 'కృత్తిక', 'రోహిణి', 'మృగశీర్ష', 'ఆర్ద్ర', 'పునర్వసు', 'పుష్య', 'ఆశ్లేష', 'మాఘ', 'పూర్వ ఫాల్గుణి', 'ఉత్తర ఫాల్గుణి', 'హస్త', 'చిత్ర', 'స్వాతి', 'విశాఖ', 'అనురాధ', 'జ్యేష్ఠ', 'మూల', 'పూర్వ ఆషాఢ', 'ఉత్తర ఆషాఢ', 'శ్రవణం', 'ధనిష్ట', 'శతభిష', 'పూర్వ భాద్రపద', 'ఉత్తర భాద్రపద', 'రేవతి'];
    var nakshatra = nakshatras[(totalDays - 1) % 27];
    document.getElementById('star').innerHTML = nakshatra;
}


displayStar();