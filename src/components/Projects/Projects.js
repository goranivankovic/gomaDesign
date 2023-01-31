import React from 'react';
import { useSelector } from 'react-redux';

import projectStyles from '../../styles/Project.module.css'


import movies from '../../images/movies.jpeg'
import blog from '../../images/blog.png'
import weather from '../../images/weather.jpeg'
import freedom from '../../images/freedom.jpg'


import fit from '../../images/fit.png'
import wcApi from '../../images/wc-api.png'
import shop from '../../images/shop.png'
import laptop from '../../images/laptop.jpg'













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

         <a href='https://nscoder-movie.netlify.app/'
         target="_blank"
          className={projectStyles.firstDiv_items} >
             <img src={movies} alt="movies" 
        
               onMouseOver={resize95}
               onMouseLeave={resize100}
               /></a> 

         <a href='https://nscoder-blog.vercel.app/'
         target="_blank"
          className={projectStyles.firstDiv_items}>
             <img src={blog} alt="movies" 
        
               onMouseOver={resize95}
               onMouseLeave={resize100}
              /></a> 

         <a href='https://nscoder-weather.netlify.app/'
         target="_blank"
          className={projectStyles.firstDiv_items}>
             <img src={weather} alt="movies"
         
               onMouseOver={resize95}
               onMouseLeave={resize100}
               /></a> 

         <a href='https://freedombike.netlify.app/'
         target="_blank"
          className={projectStyles.firstDiv_items}>
             <img src={freedom} alt="movies" 
             
               onMouseOver={resize95}
               onMouseLeave={resize100}
          /></a> 


        

         

           

       </div>






       <div className={projectStyles.secondDiv}>


       <a href='https://nscoder-fit.netlify.app/'
       target="_blank"
        className={projectStyles.secondDiv_items}>
           <img src={fit} alt="movies" 
     
            onMouseOver={resize95}
            onMouseLeave={resize100}
             /></a> 

       <a href='http://nscoder-wc-api.vercel.app/'
       target="_blank"
        className={projectStyles.secondDiv_items}>
           <img src={wcApi} alt="movies" 
         
            onMouseOver={resize95}
            onMouseLeave={resize100}
            /></a> 

       <a href='https://nscoder-shop.netlify.app/'
       target="_blank"
        className={projectStyles.secondDiv_items}>
           <img src={shop} alt="movies" 
         
            onMouseOver={resize95}
            onMouseLeave={resize100}
            /></a> 

      <a href='https://gomadesign.netlify.app/' 
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
