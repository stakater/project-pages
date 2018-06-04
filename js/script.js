function showtime()
{
    var a_p = "";
    var today = new Date();
    
    var current_hour = today.getHours();
    var current_minuts = today.getMinutes();
    var current_seconds = today.getSeconds();

    if (current_hour < 12) 
    {
       a_p = "<span>AM</span>";
    } 

    else
    {
      a_p = "<span>PM</span>";  
    }

    if (current_hour == 0) 
    {
        current_hour = 12;
    }

    if (current_hour > 12) 
    {
        current_hour = current_hour-12;
    }

    current_hour = checktime(current_hour);
    current_minuts = checktime(current_minuts);
    current_seconds = checktime(current_seconds);

    document.getElementById("clock-large").innerHTML = 
    current_hour + " : " +current_minuts+ " : " +current_seconds+ " "+a_p;
}
    function checktime(i)
    {
        if (i<10) 
        {
            i="0" + i;
        }

        return i;
    }


setInterval(showtime);