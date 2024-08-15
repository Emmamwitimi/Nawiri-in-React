import React, { useEffect,useState } from "react";
import HouseCard from "./components/HouseCard"

function App(){
const [houses,setHouses]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:3000/houses")
    .then((response) => response.json()) // Make sure response.json() is called
    .then((data) => setHouses(data))
    .catch((error) => console.error("Error fetching houses:", error));
  },[])

  return(
    <>
      <p>Emma</p>
      <HouseCard houses={houses}/>
    </>
  );
}
export default App;