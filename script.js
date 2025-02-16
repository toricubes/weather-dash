


$(document).ready(function(){
    let apiKey;
    let currentWeatherEndpoint;
    let fiveDayWeatherEndpoint;

    let submitBtn = $('#submit');
    let searchField = $('#city-search');
    
    function handleSubmit(event) {
        event.preventDefault();
        let searchTerm = $(searchField).val();
        // get weather
        if (!searchTerm) {
            return;
        }
        let currentWeatherData = getCurrentWeather(searchTerm);
        // display current
        // display forecast
    }

    function getCurrentWeather(searchTerm) {
        let url = `${currentWeatherEndpoint}q=${searchTerm}&appid=${apiKey}`;
        // get weather data
        // return weather data as json object
    }

    $(submitBtn).on('click', handleSubmit);

})