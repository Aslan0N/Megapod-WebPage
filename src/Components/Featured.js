import React from 'react'
import FeaturedCard from './FeaturedCard'
import CardFeatured from '../featured/CardFeatured'

const Featured = () => {
  return (
    <>
    <section id='featured'>
        <div className="container">
            <div className="row">
                {
                    CardFeatured.map(item=>(
                       <FeaturedCard image={item.image} name={item.name} job={item.job} /> 
                    ))
                }
            </div>
        </div>
    </section>
    </>
  )
}

export default Featured