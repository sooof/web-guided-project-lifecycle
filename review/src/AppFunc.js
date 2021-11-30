import React, { useState, useEffect } from "react";

const AppFunc = () => {
  console.log("AppFunc: Setup State")
  const [name, setName] = useState("Warren");

  useEffect(() => {
    console.log("AppFunc: Component Had Mounted")
    
  }, [])

  useEffect(() => {
    console.log("AppFunc: Component Had Updated")
    
  }, [name])
  
  const handleClick = () => {
    console.log("AppFunc: handleClick -- Change  State")
    setName("Allison");
  };
  console.log("AppFunc:  End!!!")
  return (
    <div>
      <h1>Hello {name}!</h1>
  
      <button onClick={handleClick}>MAKE IT ALLISON!</button>
    </div>
  );
};

export default AppFunc;
