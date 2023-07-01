import React,{ useState,useContext} from 'react'
import { store} from '../Context/CartValue'
import { stores } from '../Context/CartItems'
import { Link,useNavigate } from 'react-router-dom'
import CartImage from '../ImagesforFooter/add_cart_icon.svg'
const Head = () => {
 const {itmeno,setItemno} = useContext(stores);
  const {user,setUser} = useContext(store)
  // console.log(user)
 const Navigate = useNavigate()

  const [noitem,setNoitem] = useState(0)

 function cartPage(){
  Navigate('/cartPage')
 }
  return (
  <>
    <div className='flexContainer'>
    <div>
  <select name="lang" id="lang">
     <option value="">Choose a language:</option>
     <option value="eng">English</option>
     <option value="spn">Spanish</option>
  </select>
    </div>
    <div onClick={cartPage}>
    {/* <Link to={'/cartPage'} style={{textDecoration:'none'}}> */}
    <i className="fa-solid fa-user"></i> &nbsp;
    {user.name}
    {/* </Link> */}
    </div>
    <div className='cartImageHeader' onClick={cartPage}>
    <img src={CartImage} alt='not found' className='cartImageHead'/>
    {/* <div className='noOfitemIncart'>{itmeno ? itmeno : noitem }</div> */}
    </div>
    </div>
    </>
  )
}

export default Head