import React from 'react'
import FooterTwo from './FooterTwo'
import Policy from './Policy'

const Footer = () => {
  return (
    <>
    <Policy/>
    <FooterTwo/>
    <div>
<table cellSpacing='10px'>
  <tbody>
    {/* <thead> */}
    <tr>
    <th style={{fontWeight:'bolder'}}>Informations</th>
    <th>Service</th>
    <th>Extra</th>
    <th>My Account</th>
    <th>Usefull Links</th>
    <th>Our Offers</th>
    </tr>
    {/* </thead> */}
    <tr>
      <td>About Us</td>
      <td>About Us</td>
      <td>About Us</td>
      <td>About Us</td>
      <td>About Us</td>
      <td>About Us</td>
    </tr>
    <tr>
      <td>Information</td>
      <td>Information</td>
      <td>Information</td>
      <td>Information</td>
      <td>Information</td>
      <td>Information</td>
    </tr>
    <tr>
      <td>Privacy policy</td>
      <td>Privacy policy</td>
      <td>Privacy policy</td>
      <td>Privacy policy</td>
      <td>Privacy policy</td>
      <td>Privacy policy</td>
    </tr>
    <tr>
      <td>Terms and Conditions</td>
      <td>Terms and Conditions</td>
      <td>Terms and Conditions</td>
      <td>Terms and Conditions</td>
      <td>Terms and Conditions</td>
      <td>Terms and Conditions</td>
    </tr>
    </tbody>
 </table>
<div>
  <div id='footerimgContainer'>
    <div className='western'>
      <img id='imgFooter' src='https://www.paypalobjects.com/digitalassets/c/website/marketing/apac/C2/logos-buttons/optimize/Full_Online_Tray_RGB.png' alt='404 Error' width='300px'/>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Footer