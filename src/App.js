


import Home from './NavbarComponants/Home';
import {BrowserRouter,Routes,Route, Outlet} from "react-router-dom"
import Navbar_01 from './Navbar_01';

function App() {
  return (
    <>
      <Navbar_01></Navbar_01>
      <Outlet></Outlet>
    </>
  );
}

export default App;
