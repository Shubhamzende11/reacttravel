import React ,{useEffect} from 'react'
import './main.css'
import {HiOutlineLocationMarker} from "react-icons/hi"
import {HiOutlineClipboardCheck} from "react-icons/hi"

import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

 
const Main = () => {
  const Data = [
    {
      id:1,
      imgSrc: img1,
      destTitle: 'Bora Bora',
      location: 'New Zealand',
      grade: 'CULTURAl RELAX',
      fees: '&700',
      description:'the epitome gfxcgfcgf'
    },
    {
      id:2,
      imgSrc: img2,
      destTitle: 'Machu Picchu',
      location: 'Peru',
      grade: 'CULTURAl RELAX',
      fees: '&600',
      description:'the epitome gfxcgfcgf'
    },
    {
      id:3,
      imgSrc: img3,
      destTitle: 'Great Barrier reef',
      location: 'Australia',
      grade: 'CULTURAl RELAX',
      fees: '&700',
      description:'the epitome gfxcgfcgf'
    },
    {
      id:4,
      imgSrc: img4,
      destTitle: 'Cappadocia',
      location: 'Turkey',
      grade: 'CULTURAl RELAX',
      fees: '&800',
      description:'the epitome gfxcgfcgf'
    },
    {
      id:5,
      imgSrc: img5,
      destTitle: 'Guanajuato',
      location: 'Mexico',
      grade: 'CULTURAl RELAX',
      fees: '&1100',
      description:'the epitome gfxcgfcgf'
    },
    {
      id:6,
      imgSrc: img6,
      destTitle: 'Bali Island',
      location: 'Indonesia',
      grade: 'CULTURAl RELAX',
      fees: '&500',
      description:'the epitome gfxcgfcgf'
    },
    {
      id:7,
      imgSrc: img7,
      destTitle: 'Cinque Terre',
      location: 'Italy',
      grade: 'CULTURAl RELAX',
      fees: '&600',
      description:'the epitome gfxcgfcgf'
    },
    {
      id:8,
      imgSrc: img8,
      destTitle: 'Angkor-wat',
      location: 'Cambodia',
      grade: 'CULTURAl RELAX',
      fees: '&600',
      description:'the epitome gfxcgfcgf'
    }
  ]
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right"className="title">
          Most visited destinations
        </h3>
      </div>
      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description })=>
          {
            return(
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='iconloc'/>
                    <span className='name'>{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    DETAILS<HiOutlineClipboardCheck className='iconcheck'/>
                  </button>
                </div>

              </div>
            )
          })
        }

      </div>





    </section>
  )
}

export default Main