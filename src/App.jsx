import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Component, NavBar, Text } from './assets/style'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { useNavigate } from "react-router";
import Home from './assets/Pages/Home.jsx'
import { Link } from 'react-router-dom'
import Step2 from './assets/Pages/Steps/Step2.jsx'
import Step3 from './assets/Pages/Steps/Step3.jsx'
import Tickets from './assets/Pages/Tickets.jsx'

function App() {

  useEffect(() => {
    const headOne = document.querySelector('#events')
    const Links = document.querySelectorAll('a')

    headOne.checked=true

    Links.forEach(element => {
      element.addEventListener('click', () => {
        element.parentElement.click()
      })
    });

  });


  return (
      <Component size={100} className='h-100'>
        <div className="d-justify">
        <div className="glow"></div>
        </div>
        <BrowserRouter>
        <Component px={2.5} className="h-10 d-align-start">
          <NavBar size={100} radius={1.2} px={.9} py={.6} className='d-center'>
            
            <Component className='d-center ticket-icon'>
            <svg width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_429_11100)"> <path d="M10 5H5C3.89543 5 3 5.89543 3 7V10C3.51184 10 4.02369 10.1953 4.41421 10.5858C5.19526 11.3668 5.19526 12.6332 4.41421 13.4142C4.02369 13.8047 3.51184 14 3 14V17C3 18.1046 3.89543 19 5 19H10M10 5H19C20.1046 5 21 5.89543 21 7V10C20.4882 10 19.9763 10.1953 19.5858 10.5858C18.8047 11.3668 18.8047 12.6332 19.5858 13.4142C19.9763 13.8047 20.4882 14 21 14C21 14.75 21 15.8787 21 17C21 18.1046 20.1046 19 19 19H10M10 5V19" stroke="#ffffff" stroke-width="1.8" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11100"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
            </Component>

            <Component ml={.5} className='d-align d-justify-start' size={50}>
              <Text className='ticz' size={1.5}>ticz</Text>
            </Component>

            <Component className='d-center absolute' mr={3}>
              <div className="header-items">
                <input type="radio" name="head-items" id="events" />
                <label htmlFor="events"><Link to={'/'}><Text>Events</Text></Link></label>
              </div>

              <div className="header-items">
                <input type="radio" name="head-items" id="tickets" />
                <label htmlFor="tickets"><Link to={'/tickets'}><Text>My Tickets</Text></Link></label>
              </div>

              <div className="header-items">
                <input type="radio" name="head-items" id="about" />
                <label htmlFor="about"><Link to={'about'}><Text>About Project</Text></Link></label>
              </div>
            </Component>

            <Component className='d-justify-end' mr={.2} size={50}>
              <button className="btn-primary d-align">
                <Text>MY TICKETS</Text>
                <Component className='d-align' ml={.5}><svg width={13} viewBox="0 -4.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow_right [#fffffffffff]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -6643.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <polygon id="arrow_right-[#fffffffffff]" points="264 6488.26683 258.343 6483 256.929 6484.21678 260.172 6487.2264 244 6487.2264 244 6489.18481 260.172 6489.18481 256.929 6492.53046 258.343 6494"> </polygon> </g> </g> </g> </g></svg></Component>
              </button>
            </Component>

          </NavBar>
        </Component>
        <br />
        <Component size={100} className="h-90 d-center" scrollY={'auto'}>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/step2' element={<Step2 />} />
        <Route path='/step3' element={<Step3 />} />
        <Route path='/tickets' element={<Tickets />} />
        </Routes>
        <br /><br />
        </Component>
        </BrowserRouter>
        </Component>
      
  )
}

export default App
