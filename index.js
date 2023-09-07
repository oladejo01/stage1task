const body = document.querySelector("body");
const Day = document.getElementById ("day");
const time = document.getElementById("time");

    const date = new Date();
    const dayName = date.getDay();
    const hour = date.getUTCHours();
    const minute = date.getUTCMinutes();

    console.log(dayName);
    console.log(hour);
    console.log(minute);

    time.value = `${hour + 1} : ${minute}`;

    switch (dayName) {
        case 0 :
        Day.value = "Sunday";
            break;

     case 1:
        Day.value = "Monday";
            break;
            
     case 2: 
        Day.value = "Tuesday";
            break;
            
     case 3: 
        Day.value= "Wednesday";
            break;     

     case 4 :
        Day.value = "Thursday"
        break;  

     case 5 :
        Day.value = "Friday"
           break;  

     case 6 :
        Day.value = "Thursday"
              break;

        default:
        Day.value = "date not available"
            break;
    } 


 console.log(Day.value);


