import React, { useEffect, useRef } from 'react'
import FromOurBlog from './fromOurBlog/FromOurBlog'
import './Main.css'
import Together from './sliderCompany/companySliders'
import AOS from 'aos'
import "aos/dist/aos.css"
import SiteTypes from './siteTypes/SiteTypes'
import { Link } from 'react-router-dom'
import { BsWhatsapp } from 'react-icons/bs';
import Projects from './projects/Projects'
import BizKimik from './BizKimik/BizKimik'
import {motion} from "framer-motion"



function Main() {
  const aRef = useRef();
  window.onscroll = function () { myFunction() };
  function myFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      aRef.current.style.display = "block"
    } else {
      aRef.current.style.display = "none"
    }
  }
  useEffect(() => {
    AOS.init();
  });

  return (

    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    className='main'>
      <div >
        <Together />
      </div>
      <BizKimik />
      {/* <Projects /> */}
      <SiteTypes />
      {/* <FromOurBlog /> */}
      <Link id="scrollUp" ref={aRef} target='_blank' to="https://wa.me/+994555160406" className='wp'><BsWhatsapp style={{ color: "black" }} /></Link>
    </motion.div>
  )
}

export default Main
