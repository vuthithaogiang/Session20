
$.get("http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/353412?apikey=c9PWjh67zpPlAQxPA8g4wfx1I3DZG2Hq", 
function(api){
    console.log(api);

    console.log(api[0].DateTime);
    console.log(api[0].Temperature.Value);
    console.log(api[0].WeatherIcon);

    var iconNumber = api[0].WeatherIcon;
    console.log(iconNumber);
    if(iconNumber < 10){
        iconNumber.toString();
        iconNumber = "0" + iconNumber;
    }
    console.log(iconNumber);


    $('.icon img').attr('src', 'https://developer.accuweather.com/sites/default/files/' + iconNumber +'-s.png');
    
    var today = new Date();
    var day = today.getDay();
    var hour = today.getHours();
    var minute = today.getMinutes();

    
    var dayOfWeek;

    if(day === 0){

        dayOfWeek = "Monday";
    }
    else if(day === 1){

        dayOfWeek = "Tuesday";
    }
    else if (day === 2){
        dayOfWeek = "Wednesday";
    }
    else if(day === 3){
        dayOfWeek = "Thursday";
    }
    else if(day === 4){
        dayOfWeek = "Friday";
    }
    else if(day === 5){
        dayOfWeek = "Saturday";
    }
    else if( day === 6){
        dayOfWeek = "Sunday";
    }

    console.log(dayOfWeek);

    $('.date-time').html(dayOfWeek + " " + hour + ":" + minute);
    $('.temp').html(api[0].Temperature.Value);
    $('.description').html(api[0].IconPhrase);
   
});


