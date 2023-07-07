import React from 'react'
import {stats} from '../data';
import parse from 'html-react-parser';
const Stats = () => {
  return (
    <>
    {stats.map(({no, title}, index) => {
        return (
            <div className="statsbox" key={index}>
                <h3 className="statsno">{no}</h3>
                <p className="statstitle">{parse(title)}</p>
            </div>
        )
    })}
    </>
  )
}

export default Stats