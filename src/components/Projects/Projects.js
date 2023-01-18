import React from 'react';
import { useSelector } from 'react-redux';

import projectStyles from '../../styles/Project.module.css'



import laptop from '../../images/laptop.jpg'
import stadium from '../../images/stadum.jpg'
import fashion from '../../images/fashion.jpg'
import coding from '../../images/coding.jpg'
import weather from '../../images/weather.jpeg'
import movies from '../../images/movies.jpeg'
import crypto from '../../images/crypto.png'
import restoran from '../../images/restoran.jpeg'
import singup from '../../images/singup.png'
import freedom from '../../images/freedom.jpg'





function resize95(a){
    a.target.style.transform='scale(.93)'
    a.target.style.transition='1000ms'

}
function resize100(b){
    b.target.style.transform='scale(1)'
    b.target.style.transition='600ms'

}

export default function Projects() {
    const projects = useSelector(state => state.lang.projects)

    const projectText = useSelector(state => state.lang.projectText)
  return (

    <div className={projectStyles.main} id='projekti'>

       <div className={projectStyles.headline}>
           {projects}

       </div>


       <div className={projectStyles.firstDiv}>

         <a href='https://react-movie-app-goga.netlify.app/'
         target="_blank"
          className={projectStyles.firstDiv_items} >
             <img src={movies} alt="movies" 
        
               onMouseOver={resize95}
               onMouseLeave={resize100}
               /></a> 

         <a href='https://goran-crypto.vercel.app/'
         target="_blank"
          className={projectStyles.firstDiv_items}>
             <img src={crypto} alt="movies" 
        
               onMouseOver={resize95}
               onMouseLeave={resize100}
              /></a> 

         <a href='https://royal-weather.netlify.app/'
         target="_blank"
          className={projectStyles.firstDiv_items}>
             <img src={weather} alt="movies"
         
               onMouseOver={resize95}
               onMouseLeave={resize100}
               /></a> 

         <a href='https://freedombike.co/'
         target="_blank"
          className={projectStyles.firstDiv_items}>
             <img src={freedom} alt="movies" 
             
               onMouseOver={resize95}
               onMouseLeave={resize100}
          /></a> 


        

         

           

       </div>






       <div className={projectStyles.secondDiv}>


       <a href='https://goga-login.herokuapp.com/'
       target="_blank"
        className={projectStyles.secondDiv_items}>
           <img src={singup} alt="movies" 
     
            onMouseOver={resize95}
            onMouseLeave={resize100}
             /></a> 

       <a href='http://www.football-api.uk/'
       target="_blank"
        className={projectStyles.secondDiv_items}>
           <img src={stadium} alt="movies" 
         
            onMouseOver={resize95}
            onMouseLeave={resize100}
            /></a> 

       <a href='https://mern-goga.herokuapp.com/'
       target="_blank"
        className={projectStyles.secondDiv_items}>
           <img src={coding} alt="movies" 
         
            onMouseOver={resize95}
            onMouseLeave={resize100}
            /></a> 

      <a href='https://next-js-football-project.vercel.app/' 
      target="_blank"
      className={projectStyles.secondDiv_items}>
          <img src={laptop} alt="movies" 
  
           onMouseOver={resize95}
           onMouseLeave={resize100}
           /></a> 



              
     

           
        </div>


        <div className={projectStyles.footerDiv}>
              {projectText} 
             </div>

             <div className={projectStyles.prazanDiv}>

           
           </div>



     

  </div>

  );
}
