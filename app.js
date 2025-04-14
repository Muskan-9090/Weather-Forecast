const api_key = "3529e07b82a91b2461d3c8a3287d0d7b" ;
const button = document.querySelector("#btn");
function loadInformation(){
    const city = document.querySelector("#location").value;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(this.responseText);
            document.querySelector("#temp").innerHTML = "Feels like : " + response.main.feels_like + " k";
            document.querySelector("#wind").innerHTML = "Wind Speed : " +response.wind.speed + " m/s";
            document.querySelector("#humid").innerHTML = "Humidity : " + response.main.humidity + " %";

        }
    }
}
button.addEventListener("click" , loadInformation);