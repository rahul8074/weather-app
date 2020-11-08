import React,{useState} from 'react';
import './App.css';
//importing form component
import Form from  './Components/Form';
//importing weather component
import Weather from './Components/Weather';
import Footer from './Components/Footer';

function App() {
  
  const [weather,setWeather]=useState([])
  const APIKEY=`c2fed4fe33c1964c15142f432a767ff6`;

  async function fetchData(e){
    
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    e.preventDefault()
    //fetching data from api
    const apiData=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIKEY}`)
    .then(res=>res.json())
    .then(data=>data)
    if(city && country){     //checking city and country 
    setWeather({
      data:apiData,
      city:apiData.city,
      country:apiData.sys.country,
      description:apiData.weather[0].description,
      temperature:Math.round(apiData.main.temp- 273.15),  //coverting temperature to celcius
      error:''   
    })
  }
  //handling errors
  else{
     setWeather({
        data:'',
        city:'',
        country:'',
        description:'',
        temperature:'',
        error:<div class="alert alert-warning" role="alert">
       Please Enter City and Country Name
      </div>
        
     })
  }
  }
  return (
    <div className="App">
       <h1><i class="fa fa-bolt" /> <b> FIND WEATHER</b> </h1>
       
     <Form getWeather={fetchData} />
      <Weather
      city={weather.city}
      country={weather.country}
      description={weather.description}
      temperature={weather.temperature}
      error={weather.error}
      />
      {console.log(weather.data)}
      <Footer/>
    </div>
  );
}

export default App;
