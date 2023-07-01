import React from 'react'
import ImagesRefund from '../ImagesforFooter/refund.svg'
import ImageSupport from '../ImagesforFooter/support.jpg'
import ImageShipping from '../ImagesforFooter/shipping.svg'
const Policy = () => {
    const imageForRefund = ImagesRefund
    const imageForSupport = ImageSupport
    const imageForShipping = ImageShipping
  return (
    <>
    <div className='flex-Policy'>
        <div className='plicyChild1'>
            <div style={{margin:'10px'}}>
                <img src={imageForShipping}/>
                </div>
            <h5 style={{margin:'10px'}}>FREE SHIPPING</h5>
            <div style={{margin:'20px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
        </div>
        <div className='plicyChild1'>
            <div style={{margin:'10px'}}>
            <img src={imageForRefund} alt='not works'></img>
</div>
            <h5 style={{margin:'10px'}}>100% REFUND</h5>
            <div style={{margin:'20px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
        </div>
        <div className='plicyChild1'>
            <div style={{margin:'10px'}}>
            {/* <i class="fas fa-user-headset fa-lg"></i> */}
            <img src={imageForSupport} alt='not found'></img>
            </div>
            <h5 style={{margin:'10px'}}>SUPPORT 24/7</h5>
            <div style={{margin:'20px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
        </div>
    </div>
    </>
  )
}

export default Policy