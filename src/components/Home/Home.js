import React from 'react';

import homeStyle from '../../styles/Home.module.css';

import {FiHexagon,FiShoppingCart} from 'react-icons/fi'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

 import gsap from 'gsap'




function Home() {

    const homeText = useSelector(state => state.lang.homeText)

    useEffect(()=>{
       

        gsap.fromTo("#homeGoga", {x: -1500}, {x: 0, duration: 6,delay:1, ease: "elastic"});
        gsap.fromTo("#homeText", {x: -1500}, {x: 0, duration: 6,delay:1.4, ease: "elastic"});

    },[])

  return (
  <div className={homeStyle.main} id="pocetna">
     


     <div className={homeStyle.isparviDiv}>

     
      
       <div className={homeStyle.textMain}>

           <div> <span className={homeStyle.headline}>gomaDesign</span>  <FiHexagon className="text-danger" /></div>
           <div id='homeText'>{homeText}</div>

       </div>

  



     

     </div>

      

  </div>
  );
}

export default Home;
