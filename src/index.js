import './style.css'
async function getData(city) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=615551c297cc4d3986e134300242401&q=${city}`,{mode:'cors'})
    const data = await response.json();


    console.log(data.current.temp_c)

}

getData('london')