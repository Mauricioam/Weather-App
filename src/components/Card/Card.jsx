import React from "react";
import { timeConverter,actualDate } from "../../utils/timeConverter";
import  image  from "../../assets/images/25501.jpg"


export function Card({name,country,humidity,feel,current,max,min,pressure,img,description,sunrise,sunset}){

    
    return(
        <>
        <div class="container-fluid p-0 d-flex-column text-center">
        <div className="card-container">
        <div className="card-body">
        <h1 className="display-6">{name},<span>{country}</span></h1>
        <p className="fs-4">{description}</p>
        <h1 className="display-3 fw-bold">{current}°C</h1>
        <p className="fs-5"><span className="fw-bold">Feels like:</span> {feel}°C</p>
       
        <p className="me-3 fs-6"><span className="fw-bold">Sunrise:</span> {timeConverter(sunrise)} AM</p>
        <p className="fs-6"><span className="fw-bold">Sunset:</span>  {timeConverter(sunset)} PM</p>
        
        <p>Updated:{actualDate()}</p>
        </div>
        </div>
         </div>
        </>
    )
}