import React from 'react'
import {Link} from 'react-router-dom'
const DisplayPage = () => {
  return (
    <div style={{backgroundColor:'pink',height:'100vh'}}>
      <div className='mainPage'>
        <Link to='/registerUser'>
        <div className='main-signup'> Sign up </div>
        </Link>
        <Link to='/loginPage'>
        <div className='main-signup'> Login </div>
        </Link>

      </div>
      <div style={{display:'flex',justifyContent:'space-evenly'}}>
      <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9b93db1d-b19d-4c04-9aad-27dfa109f970/df1s6y5-a09f860d-2178-43b5-824c-6af6a0f7a0e2.png/v1/fill/w_1280,h_720,strp/ishop__april_november_2012__pre_launch_by_kyleartwu88_df1s6y5-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvOWI5M2RiMWQtYjE5ZC00YzA0LTlhYWQtMjdkZmExMDlmOTcwXC9kZjFzNnk1LWEwOWY4NjBkLTIxNzgtNDNiNS04MjRjLTZhZjZhMGY3YTBlMi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.CIEHuc00CxDZEx9gJO9WgHe_SeDlA_PxbAoKYZeRNXg' alt='not found' width='280px' />
      </div>
      <div style={{width:'900px',fontFamily:'monospace'}}>
        <h4>E-commerce (electronic commerce) is the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet. These business transactions occur either as business-to-business (B2B), business-to-consumer (B2C), consumer-to-consumer or consumer-to-business.<br></br><br></br>

The terms e-commerce and e-business are often used interchangeably. The term e-tail is also sometimes used in reference to the transactional processes that make up online retail shopping.</h4>
      </div>
    </div>
  )
}

export default DisplayPage