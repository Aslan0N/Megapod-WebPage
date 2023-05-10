import React from 'react'
import Cards from "../Components/Cards";
import myData from "../data/Data";
const MusicCard = () => {
  return (
    <div>
         {
          myData.map(item=>(
          
          <Cards image={item.image}  />

          ))
        }
    </div>
  )
}

export default MusicCard