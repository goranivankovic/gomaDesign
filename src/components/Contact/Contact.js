

import React from 'react';
import { useSelector } from 'react-redux';
import contactStyles from '../../styles/Contact.module.css'

import{AiFillPhone,AiFillLinkedin,AiFillGithub,AiOutlineGoogle} from 'react-icons/ai'

import {FiHexagon} from 'react-icons/fi'
import { Form,Button } from 'react-bootstrap';
import emailjs from 'emailjs-com'

function Contact() {
    const contactHeadline = useSelector(state => state.lang.contactHeadline)
    const contactMessage  = useSelector(state => state.lang.contactMessage)
    const contactNameLastname = useSelector(state => state.lang.contactNameLastname)
    const contactphone  = useSelector(state => state.lang.contactphone)

  return (
    <div className={contactStyles.main} id='kontakt'>

    <div className={contactStyles.headline}>
        {contactHeadline}
    
    </div>
    
    
    <div className={contactStyles.firstDiv}>
    
        <div className={contactStyles.firstDiv_items}>

        <div className={contactStyles.firstDiv_items_message}>
            {contactMessage}
           
        </div>

        <div className={contactStyles.firstDiv_items123}>gogadesignweb@gmail.com</div>

        <div className={contactStyles.firstDiv_items123}><div> <AiFillPhone /> +381 / 064-415-68-13 </div></div>

        <div className={contactStyles.firstDiv_items123}><a href="https://www.linkedin.com/in/goran-ivankovi%C4%87-86b19b1b9/" target='_blank'> <AiFillLinkedin className='h2' style={{color:"black"}} /> </a> <a href='https://github.com/goranivankovic' target='_blank'><AiFillGithub className='h2' style={{color:"black"}} /></a>  </div>
            
            
    
        </div>


     

                           <Form className={contactStyles.firstDiv_items2}>

                                  <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>{contactNameLastname}</Form.Label>
                                    <Form.Control type="text" placeholder='...' name="name" />
                                   </Form.Group>

                                   <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>{contactphone}</Form.Label>
                                    <Form.Control  type="text" placeholder='...' name="telephone" />
                                   </Form.Group>

                                   <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>E-mail</Form.Label>
                                    <Form.Control  type="email" placeholder='...' name="email" required={true}/>
                                   </Form.Group>

                          
                             
                                        <button className={contactStyles.firstDiv_items2_button} type="button">
                                        Submit
                                   </button>
                            </Form>
    

          
    
     

   
    
      
    
    </div>
    
    
    
    
    
    
    
     <div className={contactStyles.footerDiv}>
    <div>gogaDesign <FiHexagon  className='text-danger'/> || All Rights Reserved</div> 
    
         
          </div>
    
          <div className={contactStyles.prazanDiv}>
    
        
        </div>
    
    
    
    
    
    </div>
  
  );
}

export default Contact;





// function sendEmailAndMessage(p){
//   p.preventDefault();

  

//   emailjs.sendForm('gmail', 'template_vs5t6sd',p.target,'user_CUPedB8OkkfuUfSRyzgAo')
//   .then((result) => {
//     console.log(result.text);
//   }, (error) => {
//     console.log(error.text);
//   });
//   p.target.reset()

// }

