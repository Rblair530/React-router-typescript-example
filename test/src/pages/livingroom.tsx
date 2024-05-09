import React from "react";


function Livingroom(): React.ReactNode {
  const message: string = "We're in the living room"
  return (
    <>
      <h1>We're in the living room</h1>
      <h1>{message}</h1>
    </>
  )
}

export default Livingroom;
