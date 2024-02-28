
function getCurrentPosition()
{
    if(confirm("Allow location access to display weather"))
    {
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                displayCurrentWeather(position.coords.latitude , position.coords.longitude )
            })
    }
}
getCurrentPosition();


async function displayCurrentWeather(lat , long)
{
    console.log(lat , long);

    const api = `https://open-weather13.p.rapidapi.com/city/latlon/${lat}/${long}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'da3e9d6194msh99ca5a70f09bf66p1531afjsncb0199344067',
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(api, options);
        const result = await response.json();
        console.log(result);

        document.getElementById("temp").innerText = result.main.temp - 273.15;
        document.getElementById("city").innerText = result.name;
        document.getElementById("h-desc").innerText = result.main.humidity;
        document.getElementById("c-desc").innerText = result.weather[0].description;
        document.getElementById("w-desc").innerText = result.wind.speed + "km/hr";
    } catch (error) {
        console.error(error);
    }
}

async function displayWeatherByCity()
{

    const api = 'https://open-weather13.p.rapidapi.com/city/' + document.getElementById("inp").value;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'da3e9d6194msh99ca5a70f09bf66p1531afjsncb0199344067',
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(api, options);
        const result = await response.json();
        console.log(result);

        document.getElementById("temp").innerText = Math.round(result.main.temp - 32);
        document.getElementById("city").innerText = result.name;
        document.getElementById("h-desc").innerText = result.main.humidity;
        document.getElementById("c-desc").innerText = result.weather[0].description;
        document.getElementById("w-desc").innerText = result.wind.speed + "km/hr";
    } catch (error) {
        console.error(error);
    }
}