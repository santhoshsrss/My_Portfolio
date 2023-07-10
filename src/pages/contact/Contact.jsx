import React from 'react'
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import {FiSend} from "react-icons/fi";
import './contact.css';


const Contact = () => {
  return (
    <section className="contact section">
      
      <h2 className="sectiontitle">Let's Get In <span>Touch</span>

      </h2>

      <div className="contactcontainer container grid">
        <div className="contactdata">
          <h3 className="contacttitle">Contact Soon !</h3>

          <p className="contactdescription">Feel free to Contact with me any time. </p>

          <div className="contactinfo">
            <div className="infoitem">
              <FaEnvelopeOpen className='infoicon'/>
              <div>
                <span className="infotitle">Mail Me</span>
                <h4 className="infodesc">santhoshfsd2023@gmail.com</h4>
              </div>
            </div>

            <div className="infoitem">
              <FaPhoneSquareAlt className='infoicon'/>
              <div>
                <span className="infotitle">Call Me</span>
                <h4 className="infodesc">8072127851</h4>
              </div>
            </div>

          </div>

          <div className="contactsocial">
            
            <a href="http://facebook.com" 
             rel="noreferrer" 
             target="_blank" 
             className="contactsocial-link">
              <FaFacebookF />
            </a>
            
            <a href="http://twitter.com"
             rel="noreferrer" 
             target="_blank" 
             className="contactsocial-link">
              <FaTwitter />
            </a>
            
            <a href="https://github.com/" 
             rel="noreferrer" 
             target="_blank" 
             className="contactsocial-link">
              <FaGithub />
            </a>
            
            <a href="https://www.linkedin.com/" 
             rel="noreferrer"
             target="_blank" 
             className="contactsocial-link">
              <FaLinkedin />
            </a>
          
          </div>
        </div>

          <form className="contactform">
            <div className="forminput-group">
              
              <div className="forminput-div">
                <input type="text" placeholder='Your Name' className="formcontrol" />
              </div>
              
              <div className="forminput-div">
                <input type="email" placeholder='Your Email' className="formcontrol" />
              </div>
              
              <div className="forminput-div">
                <input type="text" placeholder='Subject' className="formcontrol" />
              </div>
            
            </div>
          
              <div className="forminput-div">
                
                <textarea placeholder='Your Message' className="formcontrol textarea"></textarea>
              
              </div>
                <button className="button">
                  Send Message 
                  <span className="buttonicon contactbutton-icon">
                    <FiSend />
                  </span>
                </button>
          </form>

      </div>
    </section>
  )
}

export default Contact