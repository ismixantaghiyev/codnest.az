import React from 'react'
import "./About.css"
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"


function About() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    className='about'>
      <div className="haqqimizda">
        <div className="haqqimizdaPadding">
          <p>HAQQIMIZDA</p>
          <Link to="/">ƏSAS SƏHİFƏ</Link> <span style={{color:"white"}}>/</span> <Link to="/projects">HAQQIMIZDA</Link>
        </div>
      </div>
    </motion.div>
  )
}

export default About
