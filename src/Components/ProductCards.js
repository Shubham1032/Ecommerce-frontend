import React from 'react'
import {Link} from 'react-router-dom'
import Rating from './Rating'
// import { Card } from 'react-bootstrap'

const ProductCards = ({data}) => {
    // console.log(data)
  return (
    <>            
      <Link to={`/singleProduct/${data._id}`}>
      <div className='productCard-flex' style={{display:'flex'}}>
       <div>
         <img src={data.image} alt='not found' width='150px' height='210px'/>
      </div>
      <div>     {data.title.slice(0,20)}               </div>  
       <div>    {<Rating value={data.rating}/>}        </div>
            <div>
              ${data.price}
            </div>
        </div>
        </Link>
    </>
  )
}

export default ProductCards