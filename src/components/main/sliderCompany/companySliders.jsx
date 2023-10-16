import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './companySliders.css'
import { Link } from 'react-router-dom';
import vebMaking from '../../img/vebmaking.png'
import textniki from '../../img/texniki.png'
import dizayn from '../../img/dizayn2.webp'

function CompanySliders() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className='
    companySliders' >

      <Carousel responsive={responsive}
        draggable={false}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={3000}>
        <div className='slide'>
          <div className="slideText">
            <h2>Veb-saytların hazırlanması</h2>
            <p>Biznesinizə uyğun tam funksiyonal saytların hazırlanması</p>
            <Link to='/contact'><button class="button-59" role="button">Sifariş edin</button></Link>
          </div>
          <div className="slideImg">
            <img src={vebMaking} alt="" />
          </div>
        </div>

        <div className='slide'>
          <div className="slideText">
            <h2>Veb-saytlara texniki dəsdək</h2>
            <p>7/24 veb-saytlara texniki dəsdək və veb-saytınızın mövcud dizaynının yenidən qurulması</p>
            <Link to='/contact'><button class="button-59" role="button">Sifariş edin</button></Link>
          </div>
          <div className="slideImg">
            <img src={textniki} alt="" />
          </div>
        </div>  
        <div className='slide'>
          <div className="slideText">
            <h2>Dizayn xidmətləri</h2>
            <p>Logo dizaynı, korporativ stil, dizayn işləri və bir çox işləri bizə əmanət edə bilərsiz</p>
            <Link to='/contact'><button class="button-59" role="button">Sifariş edin</button></Link>
          </div>
          <div className="slideImg">
            <img src={dizayn} alt="" />
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default CompanySliders
