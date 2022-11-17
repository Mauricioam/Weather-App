import React from "react"
import { createContext } from "react";
import { useState } from "react";
import  Navbar  from "./Navbar";
import { Card } from "../Card/Card";
import { useEffect } from "react";
import axios from "axios";
import { API_KEY } from "./SearchInput";

export const context = createContext(null);

export default function Home() {

  const [city, setCity ] = useState();
  const [weather,setWeather] = useState([]);


    useEffect(()=>{
     let present = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${city && city[0].lat}&lon=${city && city[0].lon}&appid=${API_KEY}&units=metric`)
     let forecast =  axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${city && city[0].lat}&lon=${city && city[0].lon}&appid=${API_KEY}&units=metric`)
     Promise.all([present,forecast]).then(response => setWeather(response))
    },[city])
  




console.log(weather.length > 0 && weather)
return(
  <>
  <context.Provider value={setCity}>
   <Navbar/>
  </context.Provider>
  <div className="bg-img my-5">
 {weather.length > 0 && <Card
     name={weather[0].data.name}
     country={weather[0].data.sys.country} 
     humidity={weather[0].data.main.humidity}
     feel={weather[0].data.main.feels_like}
     current={weather[0].data.main.temp}
     max={weather[0].data.main.temp_max}
     min={weather[0].data.main.temp_min}
     pressure={weather[0].data.main.pressure}
     img={weather[0].data.weather[0].icon}
     description={weather[0].data.weather[0].description}
     sunrise={weather[0].data.sys.sunrise}
     sunset={weather[0].data.sys.sunset}/>} 
     </div>
  </>


)

}

