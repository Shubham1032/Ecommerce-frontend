import React from 'react'
import {useEffect,useState} from "react";
import Corousel1 from '../ImagesforFooter/corousel_1.png'
import Corousel2 from '../ImagesforFooter/corousel_2.png'
import Corousel3 from '../ImagesforFooter/corousel_3.png'
import Corousel4 from '../ImagesforFooter/corousel_4.jpg'
import Corousel5 from '../ImagesforFooter/corousel_5.jpg'
import Corousel6 from '../ImagesforFooter/corousel_6.jpg'
import Corousel7 from '../ImagesforFooter/corousel_7.png'

const Banner3 = () => {
    const [image,setImage] =useState(0);
    var [changeImages] =useState([Corousel1,Corousel7,Corousel2,Corousel3,Corousel4,Corousel5,Corousel6])
    
    useEffect(()=>{
        try {
            setInterval(async()=>{
             setImage(image => image <7 ? image + 1 : 0)
            }, 4000)
        } catch (error) {
            console.log(error)
        }
        }, [])
    return (
        <img className="image_banner3" src={changeImages[image]} alt="empty"/>
      )
}

export default Banner3