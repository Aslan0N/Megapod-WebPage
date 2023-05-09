import React from "react";
import Cards from "../Components/Cards";
import myData from "../data/Data";
import Bottom from "../Components/Bottom";
import SupportSection from "../Components/SupportSection";

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="container">
          <div className="row">
            <div className="first col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="date">
                <i class="fa-regular fa-calendar"></i>
                <p> 10 Dec 2019</p>
              </div>
              <h1>
                Ep 05: Astronomy <br />
                Binoculars A Great
              </h1>
              <div className="but-con">
                <button>Subscribe with iTunes</button>
                <button>Subscribe with RSS</button>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <img
                src="https://preview.colorlib.com/theme/megapod/img/hero/hero-video.png
"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
     <Bottom/>
      <section id="live">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <h2>Live & Upcoming</h2>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <ul>
                <li>All</li>
                <li>Entrepreneurship</li>
                <li>Media</li>
                <li>Tech</li>
                <li>Tutorials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {
          myData.map(item=>(
          
          <Cards image={item.image}  />

          ))
        }
        <SupportSection/>
    </>
  );
};

export default Home;
