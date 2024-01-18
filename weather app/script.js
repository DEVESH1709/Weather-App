
const searchbox =document.querySelector("input");
const searchbtn =document.querySelector(".icon")

const weathericon =document.querySelector(".weather-icon")

// let cityname= document.querySelector(".city")
async function checkweather(location){

      const response =await fetch( `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location} ?unitGroup=metric&key=SQFD6DBPUQT5YA863UXBBPCWD&contentType=json`)
   
  const data =await response.json();
    console.log(data);
  

    let temp = document.querySelector(".temp")
temp.innerHTML="Temperature"+"="+data.currentConditions.temp + "°C ";

document.querySelector(".conditions").innerHTML= data.currentConditions.conditions

let cityname= document.querySelector(".city")
cityname.innerHTML =data.resolvedAddress;



let humidity = document.querySelector(".humidity")
humidity.innerHTML= data.currentConditions.humidity +"%";

let windspeed =document.querySelector(".wind")
windspeed.innerHTML=data.currentConditions.windspeed +"Km/h";


if(data.currentConditions.conditions==="Clear"){
   weathericon.src="https://tse2.mm.bing.net/th?id=OIP.YKvFSocKFQaoo-56XlWNMwHaHa&pid=Api&P=0&h=180"
}
else if(data.currentConditions.conditions==="Rain"){
    weathericon.src="https://tse4.mm.bing.net/th?id=OIP.7r177H86gU6QLzJ6w8reQwHaHa&pid=Api&P=0&h=180"
}
else if(data.currentConditions.conditions==="Partially cloudy"){
    weathericon.src="https://tse4.mm.bing.net/th?id=OIP.85jGjbGPCJDGteJRzQu78AHaEK&pid=Api&P=0&h=180"

}
}
  
     


searchbtn.addEventListener("click",()=>{
   
    checkweather(searchbox.value)

})


checkweather(city)


