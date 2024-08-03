import { useState } from "react";
import image from "../Images/keegan-houser--Q_t4SCN8c4-unsplash.jpg"

export const HealthImg = () => {
    const [ over, state] = useState(false);
  
    const onOver = () => {
      state(true);
    };
  
    const offOver = () => {
      state(false);
    };

    return (
        <img
            src={image}
            class="col-md-6 float-md-end mb-3 ms-md-3 img-fluid"
            alt="Mental Health"
            onMouseEnter={onOver}
            onMouseLeave={offOver}
            style={{ scale: over ? "120%" : "100%" }} />
    )


  } 
  