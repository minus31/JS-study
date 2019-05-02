const API_KEY = "d47e770c609ae907ccaf9b3b07bd5f76";
const COORDS = "coords";

const weather = document.querySelector(".js-weather");


function getWeather(lat, lon){
    fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const temp = json.main.temp;
        const place = json.name;
        weather.innerText = `${temp} C at ${place}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}


function handleGeoSucess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const coordsObj = {
        latitude : lat,
        longitude : lon
    };
    saveCoords(coordsObj);
    getWeather(lat, lon);

}

function handleGeoError(){
    console.log("IT IS NOT AVAILABLE")
}
function askCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucess, handleGeoError);
}
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);

    if (loadedCoords === null){
        askCoords();
    } else {
        //get weather
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude)
    }
}

function init(){
    loadCoords();
}

init();
