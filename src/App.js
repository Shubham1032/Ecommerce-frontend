import React, { useState } from 'react'
import Routess from './Routes/Routes';
import Navbar from './Header/navbar';
import Head from './Header/Head';
import {store} from './Context/CartValue'
import {stores} from './Context/CartItems'
const App = () => {
  const [user,setUser] = useState({});
  const [itemno,setItemno] = useState(0);
  return (
  <div>
   <store.Provider value={{user,setUser}}>
    <stores.Provider value={{itemno,setItemno}}>
    <Routess/>
    </stores.Provider>
    </store.Provider>
  </div>
  )
}

export default App