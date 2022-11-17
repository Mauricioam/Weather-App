import React from "react";
import { timeConverter,actualDate } from "../../utils/timeConverter";


export function Card({name,country,humidity,feel,current,max,min,pressure,img,description,sunrise,sunset}){

    
    return(
        <>
        <div class="container d-flex-column justify-content-center text-center">
        <h1 className="display-6">{name},<span>{country}</span></h1>
        <p className="fs-4">{description}</p>
        <h1 className="display-3 fw-bold">{current}°C</h1>
        <p className="fs-5"><span className="fw-bold">Feels like:</span> {feel}°C</p>
        <div className="d-flex justify-content-center">
        <p className="me-3 fs-6"><span className="fw-bold">Sunrise:</span> {timeConverter(sunrise)} AM</p>
        <p className="fs-6"><span className="fw-bold">Sunset:</span>  {timeConverter(sunset)} PM</p>
        </div>
        <p>Updated:{actualDate()}</p>
         </div>
        </>
    )
}