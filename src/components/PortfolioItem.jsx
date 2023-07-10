import React, { useState } from 'react'
import Close from '../assets/close.svg';


const PortfolioItem = ({img, title, details}) => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }
  return (
    <div className="portfolioitem">
        
        <img 
        src={img} 
        alt=""  
        className='portfolioimg'
        />

        <div className="portfoliohover"  onClick ={toggleModal}>
         
            <h3 className="portfoliotitle">{title}</h3>
        
        </div>
       {modal && (
         
         <div className="portfoliomodal">
           
           <div className="portfoliomodal-content">
             
             <img 
             src={Close} 
             alt="" 
             className="modalclose" 
             onClick={toggleModal} 
             />
             
             <h3 className="modaltitle">{title}</h3>
             
             <ul className="modallist grid">
                 {details.map(({icon, title, desc}, index) => {
                  return(
                     <li className="modalitem" key={index}>
                         <span className='itemicon'>{icon}</span>

                         <div>
                             <span className="itemtitle">{title}</span>
                             <span className="itemdetails">{desc}</span>
                         </div>
                     </li>
                  )   
                 })}
               </ul>
             <img src={img} alt="" className="modalimg" />
           </div>
        </div>
    )}
    </div>
  )
}

export default PortfolioItem