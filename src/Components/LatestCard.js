import React from 'react'

const LatestCard = (props) => {
  return (
    <>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4">
            <div className="card text-bg-dark ">
              <img src={props.image} className="card-img" alt="..." />
              <div className="card-img-overlay">
                <div className="p-con">
                <p className="card-text">
                <i class="fa-solid fa-tags"></i>
                  Music, Radio
                </p>
                <p className="card-text">
                <i class="fa-regular fa-clock"></i>
                  40 mins
                </p>
                </div>
                <div className="title-con">
                <h5 className="card-title">Episode 02: Dealing With Technical Support 10</h5>
                <p className="card-text">
                <i class="fa-regular fa-calendar"></i>
                16 Feb 2019
                </p>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default LatestCard