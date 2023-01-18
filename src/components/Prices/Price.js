import React from 'react';
import { useSelector } from 'react-redux';

import pricesStyles from '../../styles/Prices.module.css'



function Price() {
    const priceHeadline = useSelector(state => state.lang.priceHeadline)
     const priceText1  = useSelector(state => state.lang.priceText1)
     const priceText2  = useSelector(state => state.lang.priceText2)
     const priceText3  = useSelector(state => state.lang.priceText3)
     const priceFooterText  = useSelector(state => state.lang.priceFooterText)

  return (
<div className={pricesStyles.main} id='cene'>

<div className={pricesStyles.headline}>
    {priceHeadline}

</div>


<div className={pricesStyles.firstDiv}>

    <div className={pricesStyles.firstDiv_items}>
        <div className={pricesStyles.firstDiv_items_headline}>Basic</div>


        <div className={pricesStyles.firstDiv_items_body}>
            {priceText1}
   
        </div>

    </div>

    <div className={pricesStyles.firstDiv_items}>
        <div className={pricesStyles.firstDiv_items_headline}>Standard</div>

        <div className={pricesStyles.firstDiv_items_body2}>
 

            {priceText2}
   
        </div>

   </div>

   <div className={pricesStyles.firstDiv_items}>
       <div className={pricesStyles.firstDiv_items_headline}>Professional</div>

       <div className={pricesStyles.firstDiv_items_body3}>

     
                    {priceText3}
        

              </div>


   

    </div>

  

</div>







 <div className={pricesStyles.footerDiv}>
     {priceFooterText}

     
      </div>

      <div className={pricesStyles.prazanDiv}>

    
    </div>





</div>
  );
}

export default Price;
