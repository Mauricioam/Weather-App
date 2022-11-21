import React from "react";
import { dateConverter, timeConverterForecast } from "../../utils/timeConverter";

export function Forecast({ time, temp, icon, max, min }) {
  return (
    <>
      <div className="container d-flex  justify-content-center">           
           <div className="card forecast-card">
            <div className="card-body text-center">
              <p>{dateConverter(time)}</p>
              <p>{timeConverterForecast(time)}</p>
              <img
                src={`http://openweathermap.org/img/w/${icon}.png`}
                alt="icon_weather"
              />
              <p>{temp} °C</p>
             </div>
           </div>
           </div>
    </>
  );
}
