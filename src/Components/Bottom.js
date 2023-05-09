import React from 'react'

const Bottom = () => {
  return (
    <>
         <div className="section-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <img
                src="https://preview.colorlib.com/theme/megapod/img/hero/hero-track.jpg"
                alt=""
              />
              <div className="con">
                <h5>Understanding Operating</h5>
                <p>Kyle Hawkins</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 control">
              <i class="fa-solid fa-play"></i>
              <span>00:00</span>
              <div></div>
              <span>01:02</span>
            <i class="fa-solid fa-volume-high"></i>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 th-col">
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
    </>
  )
}

export default Bottom