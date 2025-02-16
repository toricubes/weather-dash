


$(document).ready(function(){
    let apiKey = 'a8399274d821a66647513527414df9b0';
    let currentWeatherEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
    let fiveDayWeatherEndpoint = "https://api.openweathermap.org/data/2.5/onecall?";

    let submitBtn = $('#submit');
    let searchField = $('#city-search');
    let curTempDisp = $('.weather-data .current-temp');
    let curHumDisp =  $('.weather-data .current-humidity');
    let curUvDisp = $('.weather-data .current-uv');
    let curIconDisp = $('#current-image');
    let cityDisp = $('#current-weather-heading');
    let fiveDayWrapper = $('#forecast .wrapper');
    
    function handleSubmit(event) {
        event.preventDefault();
        let searchTerm = $(searchField).val();
        // get weather
        if (!searchTerm) {
            return;
        }
        getCurrentWeather(searchTerm);
        // display current
        // display forecast
    }

    function getCurrentWeather(searchTerm) {
        let url = `${currentWeatherEndpoint}q=${searchTerm}&appid=${apiKey}`;
        // get weather data
        // return weather data as json object
        let weatherJSON
        fetch(url)
        .then((res) => res.json())
        .then((jsonRes) => {
            displayCurrentWeather(jsonRes);
        })
    }

    function getFiveDay(lat, lon) {
        let url = `${fiveDayWeatherEndpoint}lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&appid=${apiKey}`;

        fetch(url)
        .then((res) => res.json())
        .then((jsonRes) => {
            let uv = jsonRes.daily[0].uvi;
            curUvDisp.html(uv);
            displayFiveDay(jsonRes);
        })
        
    }

    function displayCurrentWeather(weatherJSON) {
        let temp = weatherJSON.main.temp;
        let icon = `https://openweathermap.org/img/wn/${weatherJSON.weather[0].icon}@4x.png`;
        let city = weatherJSON.name;
        let humidity = weatherJSON.main.humidity;
        let lat = weatherJSON.coord.lat;
        let lon = weatherJSON.coord.lon;


        curTempDisp.html(temp);
        curHumDisp.html(humidity);
        curIconDisp.attr('src', icon);
        cityDisp.html(`Current weather in ${city}`);

        getFiveDay(lat,lon);

    }

    function displayFiveDay(weatherJSON) {
        $('#forecast .wrapper').empty();
        
        for (let i = 0; i < 5; i++) {
            let card = $('<div>').addClass('card');

            let dailyJSON = weatherJSON.daily[i];
            card.append($('<p>').addClass('date').html(dailyJSON.dt));

            card.append($('<img>').attr('src', `https://openweathermap.org/img/wn/${dailyJSON.weather[0].icon}@4x.png`));
            
            let inner = $('<div>').addClass('inner');

            inner.append($('<p>').html(`weather: ${dailyJSON.weather[0].main}`));

            inner.append($('<p>').html(`min: ${dailyJSON.temp.min}`));

            inner.append($('<p>').html(`max: ${dailyJSON.temp.max}`));

            card.append(inner);

            fiveDayWrapper.append(card);
        }

    }


    $(submitBtn).on('click', handleSubmit);

})