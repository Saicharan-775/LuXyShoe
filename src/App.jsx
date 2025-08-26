import { useState } from 'react'
import NavBar from './NavigationBar/NavBar.jsx'
import Products from './Products/Product.jsx'
import Recommended from './Recommended/Recommended.jsx'
import Sidebar from './Sidebar/Sidebar.jsx'
function App() {
  

  return (
    <>
     <Sidebar/>
    <NavBar/>
    <Recommended/>
    <Products/>
    
    
      </>
  )
}

export default App
