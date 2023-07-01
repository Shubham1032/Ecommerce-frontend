import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';
const Navbar = () => {
  const Navigate = useNavigate()
  const [showNavExternal, setShowNavExternal] = useState(false);
  return (
    <>
    <center>
      {/* <a href='/' className='aHome'> */}
<div>
<img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9b93db1d-b19d-4c04-9aad-27dfa109f970/df1s6y5-a09f860d-2178-43b5-824c-6af6a0f7a0e2.png/v1/fill/w_1280,h_720,strp/ishop__april_november_2012__pre_launch_by_kyleartwu88_df1s6y5-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvOWI5M2RiMWQtYjE5ZC00YzA0LTlhYWQtMjdkZmExMDlmOTcwXC9kZjFzNnk1LWEwOWY4NjBkLTIxNzgtNDNiNS04MjRjLTZhZjZhMGY3YTBlMi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.CIEHuc00CxDZEx9gJO9WgHe_SeDlA_PxbAoKYZeRNXg' alt='not found' width='80px' />

</div>
{/* </a> */}
</center>
<div className='navbarContainer'>
    <div className='flexChild flexChild1'  onClick={()=>Navigate('/home')}>HOME</div>
    <div className='flexChild'  onClick={()=>Navigate('/store')}>STORE</div>
    <div className='flexChild' onClick={()=>Navigate('/fashion')}>FASHION</div>
    <div className='flexChild'  onClick={()=>Navigate('/jewellery')}>JEWELLERY</div>
    <div className='flexChild'  onClick={()=>Navigate('/electronics')}>Electronics</div>
</div>
<div className='navHam'>
<MDBNavbar>
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarToggleExternalContent'
            aria-controls='navbarToggleExternalContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavExternal(!showNavExternal)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
        </MDBContainer>
      </MDBNavbar>

      <MDBCollapse show={showNavExternal}>
        <div className='bg-light shadow-3 p-4'>
          <MDBBtn block className='border-bottom m-0' color='link'  onClick={()=>Navigate('/home')}>
            HOME
          </MDBBtn>
          <MDBBtn block className='border-bottom m-0' color='link' onClick={()=>Navigate('/store')}>
            STORE
          </MDBBtn>
          <MDBBtn block className='border-bottom m-0' color='link' onClick={()=>Navigate('/fashion')}>
            FASHION
          </MDBBtn>
          <MDBBtn block className='border-bottom m-0' color='link' onClick={()=>Navigate('/jewellery')}>
            JEWELLERY
          </MDBBtn>
          <MDBBtn block className='border-bottom m-0' color='link' onClick={()=>Navigate('/electronics')}>
            ELECTRONICS
          </MDBBtn>
        </div>
      </MDBCollapse>
</div>
    </>
  )
}

export default Navbar