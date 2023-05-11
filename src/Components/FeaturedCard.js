import React from 'react'

const FeaturedCard = (props) => {
  return (
    <>
    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
            <div className="card text-bg-dark ">
              <img src={props.image} className="card-img" alt="..." />
            </div>
            <div className="card-text">
                <h4>{props.name}</h4>
                <p>{props.job}</p>
            </div>
          </div>
    </>
  )
}

export default FeaturedCard