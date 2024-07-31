import { useState } from "react";
import image from "../Images/IMG_0577.jpg"

export const StoryImg = () => {
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
            alt="My Story | Amogh Bharadwaj"
            onMouseEnter={onOver}
            onMouseLeave={offOver}
            style={{ scale: over ? "120%" : "100%" }} />
    )


  } 
  