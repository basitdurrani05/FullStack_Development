const button = document.getElementById("search-button");
const cityInput = document.getElementById("city-input");

const cityName = document.getElementById("city-namee");

const cityTime = document.getElementById("city-time");

const cityTemp = document.getElementById("city-temp");


async function getdata(cityname){

    const p = await fetch(`http://api.weatherapi.com/v1/current.json?key=4e0aac86f7684eee83b191921241811&q=${cityname}&aqi=no`);
    return await p.json();


}


button.addEventListener("click", async ()=>{

    const value = cityInput.value;

    const result = await getdata(value);


    cityName.innerText = `${result.location.name},- ${result.location.country}`;
    cityTime.innerText = `${result.location.localtime}`;
    cityTemp.innerText = `${result.current.temp_c}°C`;


    
})