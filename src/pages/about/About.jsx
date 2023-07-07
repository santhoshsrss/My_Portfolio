import React from 'react'
import Info from '../../components/Info';
import Stats from '../../components/Stats';
import {FaDownload} from 'react-icons/fa';
import CV from '../../assets/santhosh-Cv.pdf';
import './about.css';
import Skills from '../../components/Skills';
import { resume } from '../../data';
import Resumeitem from '../../components/Resumeitem';

const About = () => {
  return (
    <main className="secation container">
      <section className="about">
        <h2 className="sectiontitle">About <span>Me</span>
        </h2>
        <div className="aboutcontainer grid">
          <div className="aboutinfo">
            <h3 className="sectionsubtitle">Personal Info</h3>

             <ul className="infolist grid">
              <Info/>
             </ul>
             <a href={CV} download='' className="button">
                 Download Cv
              <span className="buttonicon">
                <FaDownload/></span>
              </a>
          </div>

            <div className="stats grid">
                <Stats/>
            </div>


        </div>
      </section>

      <div className="separator"></div>

      <section className="skills">
        <h3 className="sectionsubtitle subtitlecenter">My Skills</h3>

        <div className="skillscontainer grid">
          <Skills/>
        </div>
        
      </section>
      <div className="separator"></div>
 
      <section className="resume">
      <h3 className="sectionsubtitle subtitlecenter">Education</h3>

      <div className="resumecontainer grid">
        <div className="resumedata">
        {resume.map((val) => {
          if(val.category === 'experience'){
            return <Resumeitem key={val.id} {...val}/>
          }
        })}
        </div>

        <div className="resumedata">
        {resume.map((val) => {
          if(val.category === 'education'){
            return <Resumeitem key={val.id} {...val}/>
          }
        })}
        </div>
      </div>
      <div className="smallgap"></div>
      </section>
  
  
  
    </main>
  )
}

export default About