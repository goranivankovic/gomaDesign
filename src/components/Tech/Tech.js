import React from 'react';
import { useSelector } from 'react-redux';

import techStyles from '../../styles/Tech.module.css'

import{FaHtml5,FaCss3,FaReact,FaEuroSign}from 'react-icons/fa'
import{SiJavascript,SiBootstrap}from 'react-icons/si'
import{DiNodejs,DiMongodb,DiGithubAlt} from 'react-icons/di'





function resize95(a){
    a.target.style.transform='scale(.93)'
    a.target.style.transition='1000ms'

}
function resize100(b){
    b.target.style.transform='scale(1)'
    b.target.style.transition='600ms'

}



export default function Tech() {
    const tech = useSelector(state => state.lang.tech)

    const techText = useSelector(state => state.lang.techText)
  return (
  <div className={techStyles.main} id='tehnologija'>

       <div className={techStyles.headline}>
           {tech}

       </div>


       <div className={techStyles.firstDiv}>

           <FaHtml5  className={techStyles.firstDiv_items}
            onMouseOver={resize95}
            onMouseLeave={resize100}
           />

           <FaCss3  className={techStyles.firstDiv_items}
            onMouseOver={resize95}
            onMouseLeave={resize100}
           />

           <SiJavascript  className={techStyles.firstDiv_items}
            onMouseOver={resize95}
            onMouseLeave={resize100}
           />

           <SiBootstrap  className={techStyles.firstDiv_items}
            onMouseOver={resize95}
            onMouseLeave={resize100}
           />



           

       </div>






       <div className={techStyles.secondDiv}>


               <FaReact  className={techStyles.secondDiv_items}
                onMouseOver={resize95}
                onMouseLeave={resize100}
               />

               <DiNodejs  className={techStyles.secondDiv_items}
                onMouseOver={resize95}
                onMouseLeave={resize100}
               />

               <DiMongodb  className={techStyles.secondDiv_items}
                onMouseOver={resize95}
                onMouseLeave={resize100}
               />

              <DiGithubAlt  className={techStyles.secondDiv_items}
               onMouseOver={resize95}
               onMouseLeave={resize100}
              />

     

           
        </div>


        <div className={techStyles.footerDiv}>
              {techText}
             </div>

             <div className={techStyles.prazanDiv}>

           
           </div>



     

  </div>
  )
}
