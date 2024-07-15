const timing = document.querySelector('.clock');
function runClock(){
    var time = new Date();
    console.log(time);
    var hrs = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var txt = "AM";
    if(hrs>12){
        hrs = hrs-12;
        txt="PM"

    }else if(hrs==12){
        txt = "AM"
    }
    hrs=hrs<10?'0'+hrs:hrs;
    min=min<10?'0'+min:min;
    sec=sec<10?'0'+sec:sec;
        timing.innerHTML = `${hrs} :${min}: ${sec} ${txt}`;

    
}
setInterval(runClock,1000);

    
    


    


