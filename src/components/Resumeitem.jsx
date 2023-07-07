import React from 'react'
import parse from 'html-react-parser'
const Resumeitem = ({icon, year, title, desc}) => {
  return (
    <div className="resumeitem">
        <div className="resumeicon">{icon}</div>

        <span className="resumedate">{year}</span>
        <h3 className="resumesubtitle">{parse(title)}</h3>
        <p className="resumedescription">{desc}</p>
    </div>
  )
}

export default Resumeitem