let hr=document.getElementById('hour');
let min=document.getElementById('min');
let sec=document.getElementById('secs');

setInterval(displayTime,1000);
function displayTime(){
    let date=new Date();

    hh=date.getHours();
    mm=date.getMinutes();
    ss=date.getSeconds();
    let hRotations=30*hh+(mm/2);
    let mRotations=6*mm;
    let sRotations=6*ss;
    hr.style.transform=`rotate(${hRotations}deg)`;
    min.style.transform=`rotate(${mRotations}deg)`;
    sec.style.transform=`rotate(${sRotations}deg)`;
    document.getElementById('time').innerHTML=`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
}