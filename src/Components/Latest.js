import React from "react";
import myCard from "../card/Card";
import LatestCard from "./LatestCard";

const Latest = () => {
  return (
    <section id="latest">
      <div className="container">
        <h2>Latest Episodes</h2>
        <div className="row g-4">
        {
          myCard.map(item=>(
            <LatestCard image={item.image} />
          ))
        }
        </div>
        
      </div>
    </section>
  );
};

export default Latest;
