var setDate = new Date("21 july, 2021").getTime();
var eid = setInterval(function () {
    var now = new Date().getTime();
    var diff = setDate - now
    var days = Math.floor(diff / (1000 * 60 * 60 * 24))
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var mints = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    var sec = Math.floor((diff % (1000 * 60)) / 1000)



    document.getElementById('timeLeft').innerHTML = days + " : " + hours + " : " + mints + " : " + sec 
    document.getElementById('days').innerHTML = "Days  Hours  Minutes  Seconds"
     
    if (diff < 0) {
        clearInterval(eid);
        document.getElementById('timeLeft').innerHTML = "EID MUBARAK!";
    }
}, 1000)



