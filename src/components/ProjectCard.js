import React from 'react'
import './projectcard.css'
import { MyData } from '../Data'
const ProjectCard = () => {
  return (
    <div className='frame-cards'>
      {MyData.map((item, index) => {
        return (
          <div className='card' key={index}>
            <div className='flip-card'>
              <div className='flip-card-inner'>
                {/* <div className='flip-card-front'>
                  <img src={item.description.image_link} alt='Avatar' />
                </div> */}
                <div className='flip-card-backs'>
                  <h4>{item.description.title}</h4>
                  <p>{item.description.body}</p>
                  <p className='links-git'>link(s) to github repo:</p>
                  <div className='group-links'>
                    {item.data_link.map((dta, index) => {
                      return (
                        <div className='dlink' key={index}>
                          <a href={dta.link}>{dta.text}</a>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className='container'>
              <h4>
                <b>{item.description.title}</b>
              </h4>
              <div className='itms'>
                {item.tools.map((tool, index) => {
                  return <p key={index}>{tool.tool}</p>
                })}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectCard
