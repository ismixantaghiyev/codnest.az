import React from 'react'
import Project from './Project'
import './Projects.css'
function Projects() {
    const courses=[
        {
            img:"https://preview.colorlib.com/theme/clever/img/bg-img/c1.jpg.webp",
            title:"English Grammar",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis",
            price:0
        },
        {
            img:"https://preview.colorlib.com/theme/clever/img/bg-img/c2.jpg.webp",
            title:"Vocabulary",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis",
            price:20
        },
        {
            img:"https://preview.colorlib.com/theme/clever/img/bg-img/c3.jpg.webp",
            title:"Expository writing",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis",
            price:45
        }
    ]
  return (
    <div className="onlineCoursesBg">
  
    <div className="container">
    <h1 className='popular'>Popular Online Courses</h1>
    <div className='onlineCourses'>
      {
        courses.map((course,index)=>{
            return <Project
            key={index}
            img={course.img}
            title={course.title}
            content={course.content}
            price={course.price}
            />
        })
      }
    </div>
    </div>      
    </div>
  )
}

export default Projects
