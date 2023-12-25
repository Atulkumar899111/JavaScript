
const searchButton = document.querySelector('#searchButton')
const cityValue = document.querySelector('#cityValue')
const temp = document.querySelector('#temp')
const feelsLike = document.querySelector('#feelsLike')
const windSpeed = document.querySelector('#windSpeed')
searchButton.addEventListener('click',(e)=>{
    e.preventDefault()
    let city = document.getElementById('cityName').value
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0ba6cbcbccmsh2b9a04ffc048a25p14b964jsn532ea254ffc5',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    async function fetchData() {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            cityValue.innerHTML = city.toUpperCase();
            feelsLike.innerHTML = result.feels_like
            windSpeed.innerHTML = result.wind_speed
            temp.innerHTML = result.temp
            console.log(temp);
        } catch (error) {
            console.error(error);
        }
    }
    
    fetchData()
})




