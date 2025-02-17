# Weather Dash

## Description

A weather dashboard that queries the OpenWeather API to deliver the current weather and a five-day forecast. 

On load, the dashboard gets user location and displays current conditions.

Saves the five most recent locations that a user searches.

Populates a responsive slider with a five-day forecast.

## Technologies

- [OpenWeather API](https://openweathermap.org)
- [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Splide](https://splidejs.com/)
- [jQuery](https://jquery.com/)
- [Bootstrap](https://getbootstrap.com/)

### Future Development
- Add buttons to the recently searched locations that will clear them from the history
- Allow different temperature units
- Add more weather data, sunrise, sunset
- Show hourly weather for current day
- Use more icons for weather data
- Consider loading more than 5 days in the slider on desktop view