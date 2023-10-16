import React from 'react'
import './Footer.css'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { BsWhatsapp } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { SlSocialLinkedin } from 'react-icons/sl';
import { IoIosArrowForward } from 'react-icons/io';


function Footer() {
    return (
        <>
            <div className='footer'>
                <div className="footerAll">
                    <div className="footerLeft">
                        <h1>Əlaqə</h1>
                        <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}><p><FaMapMarkerAlt /></p><p> Bakı şəhəri, Xətai Rayonu, Babək prospekti , Babək Plaza B blok 10-cu mərtəbə</p></div>
                        <div style={{ display: "flex", gap: "5px" }}><p><BsFillTelephoneFill /></p><p>+99412 488 08 56  +99451 618 24 50</p></div>
                        <div style={{ display: "flex", gap: "10px" }}><p><SiGmail /></p><p>omarnngroup@mail.ru</p></div>
                        <div className="footerIcons">
                            {/* <Link target='_blank' to="#" className='wp'><AiOutlineFacebook  /></Link> */}
                            <Link target='_blank' to="https://www.instagram.com/codnest.az/"><BsInstagram /></Link>
                            <Link target='_blank' to="https://wa.me/+994555160406" className='wp'><BsWhatsapp /></Link>
                            <Link target='_blank' to="#" ><SlSocialLinkedin /></Link>
                        </div>
                    </div>
                    <div className="footerRight">
                        <div className='xidmetler'>
                            <h1>Xidmətlərimiz</h1>
                            <ul>
                                <li><Link to="#"><IoIosArrowForward />Səhifələrin hazırlanması</Link></li>
                                <li><Link to="#"><IoIosArrowForward />Texniki dəstək</Link></li>
                                <li><Link to="#"><IoIosArrowForward />Dizayn Xidmətlərimiz</Link></li>
                                <li><Link to="#"><IoIosArrowForward />Çap Xidmətlərimiz</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <p style={{textAlign:'center'}}><a href="#">
                    Copyright ©{new Date().getFullYear()} All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by </a><a href="https://colorlib.com" target="_blank">CODNEST MMC</a>
                </p>
            </div>
        </>
    )
}

export default Footer
