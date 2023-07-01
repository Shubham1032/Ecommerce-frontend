import React,{useEffect,useState} from 'react'
import Head from '../Header/Head'
import axios from 'axios'
import Navbar from '../Header/navbar'
import ProductCards from '../Components/ProductCards'
import Footer from '../footer/Footer'
const Electronics = () => {
    const [data,setData]  = useState([]);
    useEffect(()=>{
            const fun = async()=>{
            const {data} = await axios.get("http://localhost:4040");
            setData(data)
            }
            fun()
    },[])
  return (
    <>
        <Head/>
   <Navbar/>
   <div className='homeContainer'> 
                   {
                    data && data.filter((s)=>s.category === 'electronics').map((data,index)=>(
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

export default Electronics