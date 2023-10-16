import React from 'react'

function Project({ img, title }) {
    return (
        <div className='course'>
            <div className="img">
                <img width='100%' src={img} alt="" />
            </div>
            <div className="text">
                <h1>{title}</h1>
                <div className='toSite'>
                    <button>Sayta keçid</button>
                </div>
            </div>
        </div>
    )
}

export default Project
