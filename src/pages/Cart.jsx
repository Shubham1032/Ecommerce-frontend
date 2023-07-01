import React,{useContext,useEffect, useState} from 'react'
import {  MDBTable, MDBTableHead } from 'mdb-react-ui-kit';
import Head from '../Header/Head'
import Navbar from '../Header/navbar'
import {store} from '../Context/CartValue'
import { stores } from '../Context/CartItems';
import axios from 'axios'
import CartCards from '../Components/CartCards'

const Cart = () => {
  const {user,setUser} = useContext(store)
  const {itemno,setItemno} = useContext(stores)
  console.log(user)
  const [data,setData ] = useState({})
  console.log("context- ",user._id);
  
  useEffect(()=>{
     const fun = async()=>{
      try {
        const {data} = await axios({
          method:'post',
          url:'http://localhost:4040/getUserDetails',
          data:user
        })        
        console.log(data)
        setData(data)
      } catch (error) {
        console.log(error.message)
      }
    }
    fun()
  },[itemno])
  console.log(data && data.cartDetail)

  return (
    <>
    <Head/>
     <Navbar/>
<MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Product</th>
          <th scope='col'>Price</th>
          <th scope='col'>Quantity</th>
          <th scope='col'>total</th>
          <th scope='col'>Action</th>
        </tr>
      </MDBTableHead>
      

      
{data.cartDetail && data.cartDetail.map((data,index)=>(
 
    // {console.log(data)}
<CartCards data={data}/>

))}

    </MDBTable>
    {/* <CartCards data={data.cartDetail}/> */}

    </>
  )
}

export default Cart