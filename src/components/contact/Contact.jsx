import React from 'react'
import './Contact.css'
import contactBg from '../img/contactBg.jpg'
import { AiFillLinkedin } from 'react-icons/ai';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FaMapPin } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import {motion} from "framer-motion"





function Contact() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    className='contact'>
      <div className="lahiyeler">
        <div className="lahiyePadding">
          <p>ƏLAQƏ</p>
          <Link to="/">ƏSAS SƏHİFƏ</Link> <span style={{ color: "white" }}>/</span> <Link to="#">ƏLAQƏ</Link>
        </div>
      </div>
      <div className='elaqeFlex'>
        <div className='elaqeGrid'>
          <div className="contactInformation">
            {/* <h1>Əlaqə məlumatları</h1> */}
            <div className="address eyni">
              <div><FaMapPin/></div>
              <div>
                <p style={{ color: "#FF6400" }}>Adres</p>
                <p>(+994) 50 342 42 74</p>
              </div>
            </div>
            <div className="email eyni">
              <div ><BsFillTelephoneFill /></div>
              <div>
                <p style={{ color: "#FF6400" }}>Əlaqə nömrəsi</p>
                <p>+994 55 516 04 06</p>
              </div>
            </div>
            <div className="workTime eyni">
              <div ><AiOutlineMail /></div>
              <div>
                <p style={{ color: "#FF6400" }}>Email</p>
                <p>omarnngroup@mail.ru</p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <div className='formFullName'>
              <input type="text" placeholder='Adınız və soyadınız' />
              <input type="text" placeholder='Əlaqə nömrəniz' />
            </div>
            <div className="formEmail">
              <input type="email" placeholder='Email :' />
            </div>
            <div className="note">
              <textarea name="" id="" cols="30" rows="10" placeholder='Qeydləriniz'></textarea>
            </div>
            <button>Göndər</button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
