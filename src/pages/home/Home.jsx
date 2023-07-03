import React from 'react'
import Profile from "../../assets/home.jpg";
import {Link} from 'react-router-dom';
import {FaArrowRight} from "react-icons/fa";
import "./home.css"
const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className='homeimg' />

      <div className="homecontent">
        <div className="homedata">
          <h1 className="hometitle">
            <span>Hi, I'm Santhosh. </span>Full Stack Developer
          </h1>
          <p className="homedescription">
          Proficient MERN stack developer with strong problem-solving skills and 
          hands-on experience in HTML, Tailwind CSS, React JS, Material UI, RestApi, Git, Node JS, MongoDB, Express JS. 
          Passionate about implementing and executing new challenges. Ability to translate business 
          requirements into technical solutions. Started career as an entry-level web developer 
          with a reputed firm driven by technology.
          </p>
          <Link to = '/about' className='button'>
            More About Me <span className="buttonicon"><FaArrowRight/></span>
          </Link>
        </div>
      </div>
      <div className="colorblock">
        
      </div>
    </section>
  )
}

export default Home