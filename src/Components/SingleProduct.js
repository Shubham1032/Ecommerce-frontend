import React,{useEffect,useState,useContext} from 'react'
import {Row,Col,ListGroup,ListGroupItem} from 'react-bootstrap'
import {useParams,Link, useNavigate} from 'react-router-dom'
import Rating from './Rating'
import axios from 'axios'
import Head from '../Header/Head'
import Navbar from '../Header/navbar'
import ProductCards from './ProductCards'
import Footer from '../footer/Footer'
import { store } from '../Context/CartValue'

const SingleProduct = () => {
  const {user,setUser} = useContext(store)
  // console.log(user)
   const Navigate = useNavigate()
  // console.log(user)
  const singleProductID = useParams();
// console.log(singleProductID)
  const [data,setData] = useState([])
  const [fam,setFam] = useState([])
  useEffect(()=>{
      const fetchProduct = async ()=>{
        try {
          console.log(singleProductID)
          const {data} = await axios.get(`http://localhost:4040/singleProduct/${singleProductID._id}`)
        console.log(data)
        setData(data)  
        console.log(data.category)
        const send =await axios({
          method: 'post',
          url: 'http://localhost:4040/getBycategory',
          data: {category:data.category} }        );
        const response = await send.data
        setFam( response)
        } catch (error) {
          console.log(error.message)
        }
        
      }
      fetchProduct()
      console.log(fam)
  },[singleProductID._id])
 
const calcOfPriceDis = ()=>{
  let price = data.price
  let Realprice = price + 25/100 *price
  return Realprice
}
const performCart = async()=>{
  console.log("user ID:",user._id,"product ID :",singleProductID._id)
const {data} = await axios({
  method:'put',
  url:"http://localhost:4040/cartProduct",
  data:{userId:user._id,
        productID:singleProductID._id
       }
      })
      console.log(data)
Navigate('/cartPage')
}
  return (
    <div>
      <Head/>
      <Navbar/>
      {/* <Link to='/home' className='btn'>
      <i className="fa-solid fa-arrow-left"></i>Go Back</Link> */}
    <Row>
      <Col md={5} style={{marginLeft:'20px'}}>
      <img src={data.image} alt={data.title} width='350px' />
      </Col>
      <Col>
     <h1>
      {data.title}
      </h1>
      <Row>
        <Col>
        <ListGroup>
          <ListGroupItem>
        <Rating value={data.rating}/>

          </ListGroupItem>
        </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col>
        <ListGroup>
          <ListGroupItem>
        $ {data.price}<span id='realPrice'>{calcOfPriceDis()}</span>
          </ListGroupItem>
          <ListGroupItem>
            <strong>About Product:</strong><br/>
            {data.description}
          </ListGroupItem>
        </ListGroup>
        <ListGroup>
          <ListGroupItem style={{marginTop:"20px"}}>
            <Row>
            <Col><h4>Status:</h4></Col>
            <Col>{data.Stock} {data.Stock > 0 ? "in Stock" : "out of stock"}</Col>
            </Row> 
          </ListGroupItem>
          <ListGroupItem>
            <button className='btn-block' onClick={performCart}>Add to Cart</button>
          </ListGroupItem>
        </ListGroup>
        </Col>
      </Row>
      </Col>
      <Col></Col>
    </Row>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
        <h1>&nbsp; &nbsp; &nbsp; &nbsp;Similiar Products</h1>
        <div className='homeContainer'> 
                   {
                    fam && fam.map((data,index)=>(
                      <div key={index} className='homeFlexChild'>
                        <ProductCards data={data}/>
                      </div>
                    ))
                   }
             </div>
<Footer/>
    </div>

  )
}

export default SingleProduct
