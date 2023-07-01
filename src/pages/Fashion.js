import React,{useState,useEffect} from 'react'
import ProductCards from '../Components/ProductCards'
import axios from 'axios'
import Head from '../Header/Head'
import Navbar from '../Header/navbar'
import Footer from '../footer/Footer'
// import UncontrolledExample from '../Banners/Banner4'
const Fashion = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        const fun = async()=>{
            const {data} = await axios.get("http://localhost:4040")
            setData(data)
        }
    fun()
    },[])
  return (
    <>
    <Head/>
   <Navbar/>
   {/* <UncontrolledExample/> */}
      <div className='homeContainer'> 
                   {
                    data && data.filter((s)=>s.category === "men's clothing" || s.category === "women's clothing").map((data,index)=>(
                      <div key={index} className='homeFlexChild'>
                        <ProductCards data={data}/>
                      </div>
                    ))
                   }
             </div>
             <Footer/>
    </>
  )
}

export default Fashion