import React from 'react'
import { motion } from "framer-motion"


function Site({ img, title }) {

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

  return (

    <motion.div
    variants={itemisi}
    className="site">
      <div className="img" >
        <img src={img} alt="" />
      </div>
      <p>{title}</p>
    </motion.div>
  )
}

export default Site
