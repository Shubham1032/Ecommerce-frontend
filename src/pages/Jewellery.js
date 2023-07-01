import React,{useEffect,useState} from 'react'
import axios from 'axios'
import ProductCards from '../Components/ProductCards';
import Head from '../Header/Head';
import Navbar from '../Header/navbar';
import Footer from '../footer/Footer';

const Jewellery = () => {
    const [data,setData] = useState([]);
  
    useEffect(()=>{
        const fun = async()=>{
            const {data}= await axios.get("http://localhost:4040")
             setData(data)}
             fun()

    },[])
  return (
    <>
         <Head/>
   <Navbar/>
   <div className='homeContainer'> 
                   {
                    data && data.filter((s)=>s.category === 'jewelery').map((data,index)=>(
                      <div key={index} className='homeFlexChild'>
                        <ProductCards data={data}/>
                      </div>
                    ))
                   }
             </div>
             {/* <div className='loadMoreBtncontainer'>
              {visible >= 10 ? <button className='loadMoreBtn' onClick={()=>{setVisible((v)=>v-6)}}>Show Less</button> :  <button onClick={showMore}  className='loadMoreBtn'>Load more</button>}
  
   </div> */}
   {/* <Banner1/> */}

<Footer/>
    </>
  )
}

export default Jewellery