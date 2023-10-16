import React, { createContext, useContext, useEffect } from 'react'
import Site from './Site'
import './SiteTypes.css'

import { Link } from 'react-router-dom'
import { Context } from '../../../App'
import {motion} from "framer-motion"



function SiteTypes() {
  
  const { events } = useContext(Context)
  useEffect(()=> window.scrollTo(0,0))

  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    className='container'>
      <div className='siteTypes'>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div className='work'><h1>Görülən işlər</h1></div>
          <div className='seeall'><Link to="/projects">Hamısına bax→</Link></div>
        </div>
        <div className="sites">
          {
            events.slice(0, 4).map((item) => {
              return <Site
                key={item.id}
                {...item}
              />
            })
          }
        </div>
      </div>
    </motion.div>
  )
}

export default SiteTypes
