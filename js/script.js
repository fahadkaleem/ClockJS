/**
 * Created by kaleemmf on 8/18/17.
 */


function startClock() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = addZero(today.getMinutes());
    var seconds = addZero(today.getSeconds());
    document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + seconds;
}

function addZero(x) {
    if (x < 10) {
        x = "0" + x;
    }
    return x;
}
setInterval(startClock, 500);