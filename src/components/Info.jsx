import React from 'react'
import {personalInfo} from '../data';
const Info = () => {
  return (
    <>
    {personalInfo.map(({title, description}, index) => {
        return(
            <li className="inforitem" key={index}>
                <span className="infotitle">{title}</span>
                <span className="infodescription">{description}</span>
            </li>
        )
    })}
    </>
  )
}

export default Info