import React from "react";
import { dateConverter, timeConverter } from "../../utils/timeConverter";

export function Forecast({ time, temp, icon, max, min }) {
  return (
    <>
      <div className="container d-flex  justify-content-center">           
           <div className="card">
            <div className="card-body text-center">
              <p>{dateConverter(time)}</p>
              <p>{timeConverter(time)}</p>
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
