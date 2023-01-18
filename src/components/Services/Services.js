import React from 'react';
import servicesStyles from '../../styles/Services.module.css'
import { useSelector } from 'react-redux';

import { FiShoppingCart } from 'react-icons/fi'
import{BsCodeSlash} from 'react-icons/bs'


function resize95(a){
    a.target.style.transform='scale(.93)'
    a.target.style.transition='1000ms'

}
function resize100(b){
    b.target.style.transform='scale(1)'
    b.target.style.transition='600ms'

}

function Services() {

    const servicesHeadline = useSelector(state => state.lang.servicesHeadline)

    const servicesText1 = useSelector(state => state.lang.servicesText1)
    const servicesText2 = useSelector(state => state.lang.servicesText2)

    const servicesText3 = useSelector(state => state.lang.servicesText3)
    const servicesText4 = useSelector(state => state.lang.servicesText4)

  return (
  <div className={servicesStyles.main} id='services'>

       <div className={servicesStyles.headline}>

        {servicesHeadline}
       </div>

       <div className={servicesStyles.firstDiv}>

           <div className={servicesStyles.firstDivLeft}>
               <BsCodeSlash className='h2' />
               <div
                onMouseOver={resize95}
                onMouseLeave={resize100}

               >{servicesText1}</div>

           </div>

           <div className={servicesStyles.firstDivRight}>

         
               <FiShoppingCart className='h2' />
               <div
                onMouseOver={resize95}
                onMouseLeave={resize100}
               >{servicesText2}</div>

           </div>

       </div>






       <div className={servicesStyles.secondDiv}>

       <div className={servicesStyles.secondDivLeft}>
               <h3>API</h3>
               <div
                onMouseOver={resize95}
                onMouseLeave={resize100}
               >{servicesText3}</div>

           </div>

           <div className={servicesStyles.secondDivRight}>
               <h3>Full Stack</h3>
               <div
                onMouseOver={resize95}
                onMouseLeave={resize100}
               >{servicesText4}</div>

           </div>

           
        </div>


        <div className={servicesStyles.prazanDiv}>

           
             </div>



     

  </div>
  );
}

export default Services;
