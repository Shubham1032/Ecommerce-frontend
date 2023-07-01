import React, { useEffect,useState,useContext } from 'react'
import axios from 'axios'
// import {Row,Col} from 'react-bootstrap'
// import { store } from '../Context/Details'
import ProductCards from '../Components/ProductCards'
import Banner1 from '../Banners/Banner1'
import Banner3 from '../Banners/Banner3'
import Navbar from '../Header/navbar'
import Head from '../Header/Head'
import Footer from '../footer/Footer'
import {store} from '../Context/CartValue'
// import UncontrolledExample from '../Banners/Banner4'

const Home = () => {
  const {user,setUser} = useContext(store)
  console.log("context- ",user)
  const [data,setData]=useState([])
  const [visible,setVisible] = useState(6)
  const showMore = ()=>{
    setVisible((v)=>v+2)
  }
  useEffect(()=>{
    const fetch=async()=>{
      const {data}= await axios.get("http://localhost:4040")  
      setData(data)
    }
    fetch()
  },[])
    console.log(data)
  return (
    <>
     <Head/>
   <Navbar/>
   <Banner3/>
  {/* <UncontrolledExample/> */}
                <div className='homeContainer'> 
                   {
                    data && data.slice(0,visible).map((data,index)=>(
                      <div key={index} className='homeFlexChild'>
                        <ProductCards data={data}/>
                      </div>
                    ))
                   }
             </div>
             <div className='loadMoreBtncontainer'>
              {visible >= 10 ? <button className='loadMoreBtn' onClick={()=>{
                setVisible((v)=>v-6)
                window.scrollTo({
                  top: 100,
                  behavior: "smooth",
                });
                }}>Show Less</button> 
                :  <button onClick={showMore}  className='loadMoreBtn'>Load more</button>}
  
   </div>
   {/* <Banner1/> */}

<Footer/>
    </>
  )
}

export default Home