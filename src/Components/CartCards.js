import React,{useState,useContext,useEffect} from 'react'
import {  MDBBtn,  MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import { store } from '../Context/CartValue';
import { stores } from '../Context/CartItems';

const CartCards = ({data}) => {
  const {user,setUser} = useContext(store)
  const {itemno,setItemno} = useContext(stores)
  const [count,setCount] = useState(0);
useEffect(()=>{
console.log("rendered")
},[])
  console.log(data)
  const [qty,setQty] = useState(1)

 async function deleteCartobj(){
 console.log("working") 
  const response = await axios({
    method:'post',
    url:'http://localhost:4040/deleteCartObj',
    data:[user._id,data]
  })
  const result = response.data;
  console.log(result)
  const updatedUser = await axios({
    method:'post',
    url:'http://localhost:4040/getUserDetails',
    data:user._id
  })
  setItemno(itemno+1)
//   console.log(updatedUser.data)
//  setUser(updatedUser.data);
setCount(count+1)
console.log(count)
}
  return (
    <>

<MDBTableBody>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src={data && data.image}
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{data && data.title}</p>
            
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>$ {data && data.price}</p>
        
          </td>
          <td>
         
              <button onClick={()=>{
                if(qty<=0){
                  return
                }else if(qty > 1){
                  setQty(qty-1)
                }
              }} className='qtyButn' >-</button>&nbsp;
           
              <span style={{color:'red',fontSize:'large'}}>  {qty}  </span>         &nbsp;          
              <button onClick={()=>{setQty(qty+1) }} className='qtyButn'>+</button>
        
          </td>
          <td>{data.price * qty}</td>
          <td>
            <MDBBtn outline color="danger" rounded size='sm' onClick={deleteCartobj}>
              delete
            </MDBBtn>
          </td>
        </tr>
     
      </MDBTableBody> 
     
    </>
  )
}

export default CartCards