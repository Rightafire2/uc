import { useState } from "react";
import image from "../Images/davies-designs-studio-kyvuAx-kEDI-unsplash.jpg"

export const NutritionImg = () => {
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
            class="col-md-6 float-md-end mb-3 ms-md-3"
            alt="Healthy Vegetable"
            onMouseEnter={onOver}
            onMouseLeave={offOver}
            style={{ scale: over ? "120%" : "100%" }} />
    )


  } 
  