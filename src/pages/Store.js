import React, {useState,useEffect } from 'react'
import Navbar from '../Header/navbar'
import ProductCards from '../Components/ProductCards'
import Head from '../Header/Head'
import Banner2 from '../Banners/Banner2'
import axios from 'axios'

// import Footer from '../footer/Footer'

const Store = () => {
  const [noofitem,setNoofitem] = useState(4);
  // const [totalitem,setTotalitem] = useState(0);
  const [data,setData] = useState([]);
  const [rate,setRate] = useState(1);
  const [cat,setCat] = useState('');
  const [render,setRender] = useState(0);
  const [priceF,setPriceF] = useState(1000);
  const [sortprice,setSortprice]  = useState('');
  const [sortname,setSortname]  = useState('');
useEffect(()=>{
const products = async ()=>{
   const {data} = await axios.get('http://localhost:4040/')
   setData(data)
}
products()
},[])
useEffect(()=>{

  const checkCategoryrun = ()=>{
  const categories = document.getElementById('category').value
  console.log(categories)
  setCat(categories)

}
  checkCategoryrun()
},[render])

const updatePrice = ()=>{
  const newPrice = document.getElementById('priceFilter').value;
  // console.log(newPrice);
  setPriceF(newPrice)
  // console.log(priceF);
}
const updateRating = ()=>{
  const rating = document.getElementById('ratingFilter').value;
  setRate(rating)
}
const checkCategory= (data)=>{
if(cat === 'all'){
  return data.price < priceF && data.rating >= rate  
}
else {
  return (data.category === cat && data.price < priceF && data.rating >= rate)
}
}
const sortBypricefun = (a,b)=>{
  const way = document.getElementById('sortByprice').value;
  console.log(way)
  if(way === "low"){
    // console.log('way')
    // console.log(a.price)
    return a.price - b.price
  }else{
    return b.price - a.price
  }
}
     return (
    <>
   <Head/>
   <Navbar/>
   <Banner2/>

<div style={{display:'flex',backgroundColor:'peachpuff',margin:'10px',justifyContent:'space-around'}}>
  <div>
  <p className='filterTags'> Price Range : {priceF}</p>
<input type='range' id='priceFilter' name='price' max={1000} step='10' defaultValue={1000} onChange={updatePrice}/>
</div>
  <div>
  <p className='filterTags'> Rating atleast : {rate}</p>&nbsp;
<input type='range' id='ratingFilter' name='rating' max={5} step='.5' defaultValue={1} onChange={updateRating}/>
</div>

<div>
  <p className='filterTags'>Select Category:</p>
      <select name='category' id='category' onChange={()=>{setRender(render+1)}}>
        <option value='all'>All</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">women's Clothing</option>
        <option value='jewelery'>Jewellery</option>
        <option value="electronics">Electronics</option>
      </select>
    </div>
   <div className='noOfItem'>
  <p className='filterTags'>Show:</p>
    <button onClick={()=>{if(noofitem > 1){setNoofitem(noofitem=>noofitem-1)}}}>-</button>
    {noofitem}
    <button onClick={()=>{setNoofitem(noofitem=>noofitem+1)}}>+</button>
   </div>
   <div>
     <p className='filterTags'>Sort by :</p>
    {/* 
   Price:&nbsp;
   <select name='sortByprice' id='sortByprice' onChange={()=>{setRender(render+1)}}>
    <option value='low'>Low to High</option>
    <option value='high'>High to Low</option>
   </select> */}
 &nbsp;  Name:&nbsp;<select name='sortByname' id='sortByname' onChange={()=>{setRender(render+1)}}>
    <option value='ascending'>a - z</option>
    <option value='decending'>z - a</option>
   </select>
   </div>
   </div>
   <div className='homeContainer'> 
                   {
                    data && data.filter(checkCategory).sort((a,b)=>{
                          const way = document.getElementById('sortByname').value;
                          console.log(way)
                          if(way === 'ascending'){

                            return a.title.localeCompare(b.title)
                          }else{
                            return b.title.localeCompare(a.title)

                          }
                    }).slice(0,noofitem).map((data,index)=>(
                   
                    <div key={index} className='homeFlexChild'>
                    <ProductCards data={data}/>
                  </div>
                                   
                    ))
                   }
             </div>
    </>
  )
}

export default Store