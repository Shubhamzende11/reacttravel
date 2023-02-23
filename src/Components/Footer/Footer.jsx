import React ,{useEffect} from 'react'
import './footer.css'
import {FiChevronRight, FiSend} from "react-icons/fi"
import {MdOutlineTravelExplore} from "react-icons/md"
import {AiFillInstagram} from "react-icons/ai"
import {AiFillYoutube} from "react-icons/ai"
import {FaTripadvisor} from "react-icons/fa"
import video2 from '../../Assets/video2.mp4'
import { AiOutlineTwitter } from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <section className="footer">
      <div className="videoDiv">
      <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="seeContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
          <h6>KEEP IN TOUCH</h6>
          <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
          <input data-aos="fade-up"type="text" className='inputinner' placeholder='Enter Email Address'/>
          <button data-aos="fade-up" className="btn flex" type='submit'>
            SEND<FiSend className="icons" />
          </button>
        </div>
          
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore className='icontravel'/> Travel.
              </a>
            </div>
            <div data-aos="fade-up" className="footerParagraph">
            The meaning of TRAVEL is to go on or as if on a trip or tour : journey. How to use travel in a sentence.
            </div>
            <div data-aos="fade-up"className="footerSocials flex">
              <AiOutlineTwitter className='iconsocial'/>
              <AiFillYoutube className='iconsocial'/>         
              <AiFillInstagram className='iconsocial'/>
              <FaTripadvisor className='iconsocial'/>

            </div>
          </div>
          
          <div className="footerLinks grid">
            {/* group one */}
            <div data-aos="fade-up" data-aos-duration="3000"className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Payment
              </li>
            </div>
              {/* group two */}
              <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Booking
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                TripAdvisor
              </li>
            </div>
            {/* group three */}
            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                London
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Califonia
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Indonesia
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Europe
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Oceania
              </li>
            </div>


          </div>

          <div className="footerDiv flex">
            <small>TRAVEL WEBSITE</small>
            <small>COPYRIGHTS RESERVED -2023</small>
          </div>
        </div>

        
      </div>
  
     
    </section>
  )
}

export default Footer
