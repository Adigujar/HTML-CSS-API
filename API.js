var request = new XMLHttpRequest();

request.open("GET",'https://restcountries.eu/rest/v2/all',true)

request.send();

request.onload= function(){
    var data =JSON.parse(this.response);
    // for lat and long
    var lat = data[104].latlng[0]
    var long = data[104].latlng[1]
    // By city name 
    var city = data[104].capital
    weatherdata(lat,long,city)
}

function weatherdata(lat, long,city){
    var request = new XMLHttpRequest();
    // for lat and long

    var url ='http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=d0bf525d11d7f26410f59d1cb3441cb7'
    request.open("GET",url,true)

    request.send(); 

    request.onload = function(){
        var data2 = JSON.parse(this.response);
        console.log(data2)
    }
    // for city
    
    var url2 = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=d0bf525d11d7f26410f59d1cb3441cb7"
    request.open("GET",url2,true)

    request.send(); 
 
    request.onload = function(){
        var data3 = JSON.parse(this.response);
        console.log(data3)
    }
}
