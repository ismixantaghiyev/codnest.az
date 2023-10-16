import React from 'react'
import './FromOurBlog.css'
function FromOurBlog() {
    return (
        <div className='container'>
            <div className='fromOurBlog '>
                <h1 className='blog'>From Our Blog</h1>
                <div className="cards">
                <div className='card'>
                    <div className="img">
                        <img width='100%' src="https://preview.colorlib.com/theme/clever/img/blog-img/1.jpg.webp" alt="" />
                    </div>
                    <div className="text">
                        <h1>English Grammer</h1>
                        <div>
                            <a href="#">Sarah Parker</a>
                            <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                            <a href="#">Art &amp; Design</a>
                        </div>
                        <p className='textContent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis</p>
                    </div>
                </div>
                <div className='card'>
                    <div className="img">
                        <img width='100%' src="https://preview.colorlib.com/theme/clever/img/blog-img/2.jpg.webp" alt="" />
                    </div>
                    <div className="text">
                        <h1>English Grammer</h1>
                        <div>
                            <a href="#">Sarah Parker</a>
                            <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                            <a href="#">Art &amp; Design</a>
                        </div>
                        <p className='textContent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default FromOurBlog
