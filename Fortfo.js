function displayTime(){
    let time= new Date();
    let second = time.getSeconds();
    let minute = time.getMinutes();
    let hours  = time.getHours();
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const weekday = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    let weekdays=weekday[time.getDay()];
    let months = month[time.getMonth()
    ];
    let date=time.getDate();
    let year =time.getFullYear();
    if (hours<10){
        hours="0"+hours;
    }
      if (minute<10){
        minute="0"+minute;
    }
      if (second<10){
        second="0"+second;
    }
   
    document.getElementById('digitalClock').innerHTML = hours +":"+minute + ":" + second;
     document.getElementById("digitalDate").innerHTML = weekdays + ",  "+ months+" "+date+" "+year;
}
setInterval(displayTime,1000);

 