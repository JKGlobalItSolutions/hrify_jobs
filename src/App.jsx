

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// componenet
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

// pages
import AboutUs from "./pages/AboutUs";
import Herosection from "./pages/Herosection";
import Addjobpost from "./pages/Addjobpost";
import Favorites from "./pages/Favorites";
import Notifications from "./pages/Notifications"
import Jobspage from "./pages/Jobspage";
import Jobdetailspage from "./pages/Jobdetailspage";
import Jobapplypage from "./pages/Jobapplypage";



// stylesheet

import './stylesheet/navbar.css';
import './stylesheet/style.css';
import './stylesheet/Footer.css';
import './stylesheet/Favorties.css'
import './stylesheet/jobpage.css'



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



  // jobpage send the props
  const notifications = [
    { category: "IT Jobs", message: "Software Engineer Opening", time: "2 hours ago" },
    { category: "Marketing", message: "Digital Marketing Role", time: "5 hours ago" },
  ];





  return (


    <>


      <Navbar usertoggle={usertoggle} userformtoggle={userformtoggle} />
      <Routes>
        <Route path="/" element={<Herosection isvisible={isvisible} setisvisible={setisvisible} isvisibleform={isvisibleform} setisvisibleform={setisvisibleform} />} />
        <Route path="/addjobpost" element={<Addjobpost />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/Favorite" element={<Favorites />} />
        < Route path="/jobspage" element={<Jobspage />} />
        < Route path="/jobdetailspage" element={<Jobdetailspage />} />
        < Route path="/jobapplypage" element={< Jobapplypage />} />


      </Routes>
      <Footer />


    </>










  );
};

export default App;
