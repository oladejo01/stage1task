const body = document.querySelector("body");
const Day = document.getElementById ("day");
const time = document.getElementById("time");

    const date = new Date();
    const dayName = date.getDay();
    
    const hour = date.getUTCHours();
    const minute = date.getUTCMinutes();
    const second = date.getUTCSeconds();


    console.log(dayName);
    console.log(hour);
    console.log(minute);

    time.innerHTML = `${hour + 1} : ${minute} : ${second}`;

    switch (dayName) {
        case 0 :
        Day.innerHTML = "Sunday";
            break;

     case 1:
        Day.innerHTML = "Monday";
            break;
            
     case 2: 
        Day.innerHTML = "Tuesday";
            break;
            
     case 3: 
        Day.innerHTML= "Wednesday";
            break;     

     case 4 :
        Day.innerHTML = "Thursday"
        break;  

     case 5 :
        Day.innerHTML = "Friday"
           break;  

     case 6 :
        Day.innerHTML = "Thursday"
              break;

        default:
        Day.innerHTML = "date not available"
            break;
    } 



