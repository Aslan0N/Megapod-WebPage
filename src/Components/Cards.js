import React from "react";

const Cards = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
        <div className="col-lg-12 my-3">
      <div className="my-card">
        <div className="card-l">
          <img src={props.image} alt="" />
        </div>
        <div className="card-r">
          <div className="i-con">
            <span>
              <i class="fa-regular fa-calendar"></i> 7 Jun 2019
            </span>
            <span>
              <i class="fa-solid fa-user"></i> by John Smith
            </span>
            <span>
              <i class="fa-solid fa-tags"></i> Radio, Musican, Camp
            </span>
          </div>
          <div className="title">
            Episode 01: 6 Powerful Tips To Creating 
            Testimonials That Sell Your
          </div>
          <div className="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor 
            incididunt ut labore et dolore magna <br /> aliqua. Quis ipsum suspendisse
            ultrices gravida.
            Risus commodo viverra maecenas accumsan lacus vel facilisis.
          </div>
          <div className="my-lg control">
            <i class="fa-solid fa-play"></i>
            <span>00:00</span>
            <div></div>
            <span>01:02</span>
            <i class="fa-solid fa-volume-high"></i>
          </div>
          <div className="my-lg th-col">
            <div className="th-con">
              <span>
                <i class="fa-solid fa-share-nodes"></i> Share
              </span>
              <span>
                <i class="fa-solid fa-download"></i> Download
              </span>
            </div>
          </div>
        </div>
      </div>
      </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
