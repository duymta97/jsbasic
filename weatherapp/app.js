// https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid&lang=vi&units=metric

const APP_ID="=790779f1043f9e002b7c3de3cf6068f8";
const DEFAULT_VALUE = "___";
const searchInput = document.querySelector(".city_search");
const cityName = document.querySelector(".city_name");
const temporature = document.querySelector(".temperature");

const setData = (rest)=>{
    cityName.innerHTML = rest.name || DEFAULT_VALUE;
    temporature.innerHTML = Math.round(rest.main.temp) || DEFAULT_VALUE;
}

searchInput.addEventListener('change', (e)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid${APP_ID}&lang=vi&units=metric
    `)
    .then(async res =>{
        const data = await res.json();
        setData(data);
    })
    .catch(()=>{
        alert("Thanh pho ko co");
    })
});
