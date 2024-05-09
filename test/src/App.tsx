import React from "react";

import { BrowserRouter as Walkway,
  Route as Room,
  Routes as Rooms 
} from "react-router-dom";

import Livingroom from "./pages/livingroom";
import Kidsroom from "./pages/kidroom";
import ParentRoom from "./pages/parentroom";


function House():React.ReactNode {
  return(
    <>
      <Walkway>
        <Rooms>
          <Room path="/" element={<Livingroom/>} />
          <Room path="/kidsroom" element={<Kidsroom/>} />
          <Room path="/parentroom" element={<ParentRoom/>}/>
        </Rooms>
      </Walkway>
    </>
  )
}

export default House;
