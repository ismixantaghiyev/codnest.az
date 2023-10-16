import React, { useContext, useEffect } from 'react'
import "./Projects.css"
import { Context } from '../../App'
import Site from '../main/siteTypes/Site'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"


function Projects() {

  const { events } = useContext(Context)
  useEffect(() => window.scrollTo(0, 0))


  const itemisi = {
    hidden: {
      opacity: 0,
      translateY: 20
    },
    visible: {
      opacity: 1,
      translateY: 0
    }
  }

  const containerisi = {
    visible: {
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
}

  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      initial="hidden"
      animate="visible"
      variants={containerisi}
      className='projects'>
      <div className="lahiyeler">
        <div className="lahiyePadding">
          <p>LAYİHƏLƏRİMİZ</p>
          <Link to="/">ƏSAS SƏHİFƏ</Link> <span style={{ color: "white" }}>/</span> <Link to="/projects">LAYİHƏLƏRİMİZ</Link>
        </div>
      </div>
      <div className="proContainer">
        {
          events.map((item) => {
            return <Site
              key={item.id}
              {...item}
            />
          })
        }
      </div>
    </motion.div>
  )
}

export default Projects
