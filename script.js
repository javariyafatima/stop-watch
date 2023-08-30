let min = 0;
let sec = 0;
let msec = 0;

let minheading = document.getElementById("min");
let secheading = document.getElementById("sec");
let msecheading = document.getElementById("msec");

let Interval



function  timer() {
    msec++
    msecheading.innerHTML = msec; 

if(msec >= 90){
    sec++
    secheading.innerHTML = sec;
    msec =0
}
else if(sec >= 60){
    min++
    minheading.innerHTML = min;
    sec= 0

}
}


    
function start(){
    Interval = setInterval(timer,10)
}
function stop(){
      clearInterval( Interval)
}
function reset(){
min = 0;
sec = 0;
 msec = 0;

 minheading.innerHTML = min
 secheading.innerHTML = sec
 msecheading.innerHTML = msec
 stop()
}