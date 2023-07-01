import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Button from '@mui/material/Button'
import Rating from '../Components/Rating'
import { useNavigate } from 'react-router-dom'


const Banner2 = () => {
  const [CurrentImage,setCurrentImage] = useState("");
  const [data,setData]= useState([]);
  const Navigate = useNavigate();
  const images =[]
  
useEffect(()=>{
    const apiFun=async()=>{
    const DataObj = await axios.get("http://localhost:4040/");
    const products =await DataObj.data
    setData(products)
  }    
   apiFun()
  },[])
// console.log(data)
for(let i=0;i<data.length;i++){
  images.push(data[i].image)
}

useEffect(() => {
  const intervalId = setInterval(async() => {
  setCurrentImage(await images[(Math.floor(Math.random() * images.length)% images.length)]);
      // console.log("image",CurrentImage);
  }, 2500)
  
  return () => clearInterval(intervalId);
}, [CurrentImage])
// console.log(CurrentImage)
 var detailOfProduct 

const asyncFun=()=>{
  detailOfProduct = data.find((p)=> p.image === CurrentImage)
  
}
asyncFun()

useEffect(()=>{
  const apifun = async()=>{
        const send =await axios({
      method: 'post',
      url: 'http://localhost:4040/getByimage',
      data: {CurrentImage }
    });
    const response = await send.data
    // console.log(response)
    // detailOfProduct=response
  }
  apifun()
},[CurrentImage])

// console.log(detailOfProduct)
const PushtoSingleProduct = ()=>{
  Navigate(`/singleProduct/${detailOfProduct._id}`)
  console.log(detailOfProduct._id)
}
  return (
    <>
    <div className='carousel-banner2'>
<div className='banner2grid'>
<div className='b2Child-1'>
{detailOfProduct && detailOfProduct.title.slice(0,20)}
</div>
<div className='b2Child-2'>
<img src={`${CurrentImage}`} alt="go away" height='180px'/> 
</div>
<div className='b2Child-3'>
 $ {detailOfProduct && detailOfProduct.price}
</div>
<div className='b2Child-4'>
<Rating value={detailOfProduct && detailOfProduct.rating}/>
</div>
<div className='b2Child5'>

 {/* <button onClick={PushtoSingleProduct}> Shop Now</button> */}
 <Button variant='contained' onClick={PushtoSingleProduct}>Shop Now</Button>

</div>
</div>
</div>
   </>
  )
}

export default Banner2
      /*
 
      */