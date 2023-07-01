import React,{useContext,useEffect, useState} from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import {store} from '../Context/CartValue'
import { stores } from '../Context/CartItems';
import axios from 'axios'

export default function CartDemo() {
  // const {itemno,setItmeno} = useContext(stores)
  // const [noitem,setNoitem] = useState(0)
  const [qty,setQty] = useState(1)
  const [data,setData] = useState({})
  const {user,setUser} = useContext(store)
  console.log("context- ",user._id)
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
  },[])
  console.log(data.cartDetail)
//   for(let i =0; i<data.cartDetail.length;i++){
// setNoitem(noitem+1)
//   }
//  setItmeno(noitem)
  return (
    <>
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
    {data.cartDetail && data.cartDetail.map((e,i)=>{
     
      return (
      <MDBTableBody>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src={e.image}
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{e.title.slice(0,25)}</p>
                {/* <p className='text-muted mb-0'>john.doe@gmail.com</p> */}
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>$ {e.price}</p>
            {/* <p className='text-muted mb-0'>IT department</p> */}
          </td>
          <td>
            {/* <MDBBadge  pill> */}
              <button onClick={()=>{
                if(qty<=0){
                  return
                }else if(qty > 1){
                  setQty(qty-1)
                }
              }} className='qtyButn' >-</button>&nbsp;
           
              <span style={{color:'red',fontSize:'large'}}>  {qty}  </span>         &nbsp;          
              <button onClick={()=>{setQty(qty+1) }} className='qtyButn'>+</button>
            {/* </MDBBadge> */}
          </td>
          <td>{e.price * qty}</td>
          <td>
            <MDBBtn outline color="danger" rounded size='sm'>
              delete
            </MDBBtn>
          </td>
        </tr>
     
      </MDBTableBody>
      )
    })}
    </MDBTable>
   
    </>
  );
}