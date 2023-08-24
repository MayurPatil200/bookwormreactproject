


import Home from './NavbarComponants/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom"

import MyLibrary from './NavbarComponants/MyLibrary';
import App from './App';

import Product from './NavbarComponants/Product';
import Subproject from './NavbarComponants/Subproduct';
import Singlepageproduct from './NavbarComponants/Singleproduct';
import Buy from './NavbarComponants/Buy';
import ParentComponent from './NavbarComponants/MyLibrary';


function Routing() {
  return (
       <BrowserRouter>
         <Routes>
            <Route path='/' element={<App/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/home' element={<Home/>}/> 
                <Route path='/product' element={<Product/>}/> 
                <Route path='/shop/:typedesc' element={<Subproject/>}/> 
                <Route path='/viewproduct/:productId' element={<Singlepageproduct/>}/> 
                <Route path='/Buy/:productId/:count' element={<Buy/>}/>
                <Route path='/Lending Library' element={<Home/>}/>
                <Route path='/Myshelf' element={<Home/>}/>
                <Route path='/MyLibrary' element={<ParentComponent/>}/>
                <Route path='/About Us' element={<Home/>}/>
                <Route path='/Feedback' element={<Home/>}/>
                <Route path='/Contactus' element={<Home/>}/>
                <Route path='/sign' element={<Home/>}/>
                <Route path ='/singleproject/:id' element={<singlepage/>}/>
            </Route>
         </Routes>
      </BrowserRouter> 
  );
}

export default Routing;
