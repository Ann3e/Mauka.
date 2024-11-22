
// import React from 'react'
// import {Routes,Route} from 'react-router-dom'
// import Navbar from './components/Navbar';
// import Home from './pages/Home'
// import Collection from './pages/Collection'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Product from './pages/Product'
// import Cart from './pages/Cart'
// import Login from './pages/Login'
// import PlaceOrder from './pages/PlaceOrder'
// import Orders from './pages/Orders'


// const App = () => {
//   return (
//     <div>
  
//       <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
//        <Navbar/>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/collection' element={<Collection/>}/>
//         <Route path='/about' element={<About/>}/>
//         <Route path='/contact' element={<Contact/>}/>
//         <Route path='/product/:productId' element={<Product/>}/>
//         <Route path='/cart' element={<Cart/>}/>
//         <Route path='/login' element={<Login/>}/>
//         <Route path='/place-order' element={<PlaceOrder/>}/>
//         <Route path='/orders' element={<Orders/>}/>
//       </Routes>
//        </div>   
//     </div>
//   );
// }


    


// export default App


import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import LatestCollection from "./components/LatestCollection";
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Footer from './components/Footer';




const App = () => {
  return (
    <div>
 
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
       <Navbar/>
       {/* <LatestCollection/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
        <Route path='/orders' element={<Orders/>}/>
      </Routes>
      <Footer/>
       </div>  
    </div>
  );
}




   




export default App

