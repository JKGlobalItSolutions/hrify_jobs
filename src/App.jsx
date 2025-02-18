

import React ,{useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import AboutUs from "./pages/AboutUs";
import Herosection from "./pages/Herosection";
import Addjobpost from "./pages/Addjobpost";
import Favorites from "./pages/Favorites";
import Notifications from "./pages/Notifications"

import './stylesheet/style.css';
import Footer from "./component/Footer";



const App = () => {

 // State to manage visibility of the user profile
 const [isvisible, setisvisible] = useState(false);

 // Function to toggle visibility
 const usertoggle = () => {
   setisvisible(!isvisible);
 };



// -----------------------------------------------------------------------------------------------------------------

 // State to manage visibility of the user profile

 const [isvisibleform, setisvisibleform] = useState(false);


 // Function to toggle visibility

 const userformtoggle = () => {
  setisvisibleform(!isvisibleform);
};






  return (


<>


      <Navbar  usertoggle={usertoggle}  userformtoggle={userformtoggle}/>
      <Routes>
        <Route path="/" element={<Herosection  isvisible={isvisible}  setisvisible={setisvisible}     isvisibleform={isvisibleform}  setisvisibleform={setisvisibleform} />} />
        <Route path="/addjobpost" element={<Addjobpost />} />
        <Route path="/aboutus" element ={<AboutUs />} />
        <Route path="/notifications" element ={<Notifications />} />
        <Route path="/Favorite" element ={<Favorites/>} />
        
      </Routes>
      <Footer />


</>




   





  );
};

export default App;
