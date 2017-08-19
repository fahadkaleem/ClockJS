/**
 * Created by kaleemmf on 8/18/17.
 */


function startClock() {
    var meridiem = "AM";
    var today = new Date();
    var hours = today.getHours();
    var minutes = addZero(today.getMinutes());
    var seconds = addZero(today.getSeconds());

    if(hours>12){
        hours = hours -12;
        meridiem = "PM";
    }
    if (hours===0){
        hours = 12;
    }

    document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + seconds + " " + meridiem;
}

function addZero(x) {
    if (x < 10) {
        x = "0" + x;
    }
    return x;
}
setInterval(startClock, 1000);