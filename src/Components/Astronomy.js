import React from 'react'

const Astronomy = () => {
  return (
    <>
         <section id="astronomy">
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
    </>
  )
}

export default Astronomy