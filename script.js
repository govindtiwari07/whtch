
function clock(){
    let hours = document.getElementById('hours_f1');
    let minutes = document.getElementById('minutes_f1');
    let second = document.getElementById('seconds_f1');
    let ampm = document.getElementById('ampm')

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let dn = (h >= 12 )? "PM" : "AM";

    hours.innerHTML = h;
    minutes.innerHTML = m;
    second.innerHTML = s;
    ampm.innerHTML = dn;
    
    if(h > 12){
        h = h - 12;
    }else {
        h = h;
    }
    
    h = (h < 10)? `0${h}` : h;
    m = (m < 10)? `0${m}` : m;
    s = (s < 10)? `0${s}` : s;

}
setInterval(clock,1000);

function clock1(){
    let hr = document.getElementById('hr');
    let min = document.getElementById('min');
    let sec = document.getElementById('sec');

    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    let hMathes = 30*hours + minutes/2;
    let mMathes = 6*minutes;
    let sMathes = 6*seconds;
    
    hr.style.transform = `rotate(${hMathes}deg)`;
    min.style.transform = `rotate(${mMathes}deg)`;
    sec.style.transform = `rotate(${sMathes}deg)`;
}
setInterval(clock1,1000);