$(document).ready(function(){
    var city = $("#city").val();
    if(city!= ''){
        return getWeather();
    }

    $("#submitCity").click(function(){
        return getWeather();
    });
    
    
});

function getWeather(){
    var city = $("#city").val();
    
    if(city != ''){
        
        $.ajax({
           url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=a1cddd83568c85b78ea24e1b1c2442f1",
            type: "GET",
            dataType: "jsonp",
            success: function(data){
                var widget = showResults(data)
                
                
                $("#showWeather").html(widget);
                
                $("#city").val('');
            }
            
        });
        
        
    }else{
        alert("City field can't be empty");
    }
    
    
}


function showResults(data){
    return  "<table width='100%'>"+
            '<h2 style="font-weight:bold; font-size:30px; padding-top:20px;" class="text-center">Current Weather for '+data.name+', '+data.sys.country+'</h2>'+
            "<th>"+            
            "<h3 style='padding-left:40px;'><strong>Weather</strong>: "+data.weather[0].main+"</h3>"+
            "<h3 style='padding-left:40px;'><strong>Description</strong>:<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'></h3>"+"</th>"+
            "<th>"+"<h3 style='padding-left:40px;'><strong>Temperature</strong>: "+data.main.temp+" &deg;C</h3>"+
            "<h3 style='padding-left:40px;'><strong>Min Temperature</strong>: "+data.main.temp_min+"&deg;C</h3>"+
            "<h3 style='padding-left:40px;'><strong>Max Temperature</strong>: "+data.main.temp_max+"&deg;C</h3>"+"</th>"+
            "</table>";
}












