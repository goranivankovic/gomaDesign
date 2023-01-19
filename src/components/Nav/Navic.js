import React from 'react';

import {FiHexagon,FiShoppingCart} from 'react-icons/fi'
import {Link} from 'react-scroll'
import ReactCountryFlag from "react-country-flag"
import {Container,Row,Col,DropdownButton,Dropdown,Form,Button, Navbar}from 'react-bootstrap'
import navicStyle from '../../styles/Navic.module.css'

import {ImCross} from 'react-icons/im'
import {FaBars} from 'react-icons/fa'



import { useSelector,useDispatch } from 'react-redux';
import { langSerb, langEng,langGer } from '../../redux/changeLanguage'
import { useState ,useEffect} from 'react';







function Navic() {
    const [laz,seTlaz]=useState(false)
    const value = useSelector(state => state.lang.value)

    
    const flag = useSelector(state => state.lang.flag)
    const home = useSelector(state => state.lang.home)
    const serv = useSelector(state => state.lang.serv)
    const tech = useSelector(state => state.lang.tech)
    const projects = useSelector(state => state.lang.projects)
    const prices = useSelector(state => state.lang.prices)
    const contact = useSelector(state => state.lang.contact)



    const dispatch = useDispatch()

    useEffect(()=>{
        seTlaz(true)

    },[])

   const closeNavBar=()=>{
    seTlaz(!laz)
   }
   
    
    
  return(
    <div>



            {/* Menu bar for destkop devices */}
        
   <div className={navicStyle.main}>

       <div className={navicStyle.headline}>gomaDesign<FiHexagon className="text-danger" /></div>  

       <div className={navicStyle.navbar}>
              <Link to="pocetna"spy={true} smooth={true} hashSpy={true} offset={0} duration={1200} delay={200} isDynamic={true} style={{color:"#f75e5e"}}>{home}</Link>
              <Link to="services"spy={true} smooth={true} hashSpy={true} offset={0} duration={1200} delay={200} isDynamic={true}>{serv}</Link>
              <Link to="tehnologija"spy={true} smooth={true} hashSpy={true} offset={0} duration={1200} delay={200} isDynamic={true}>{tech}</Link>
              <Link to="projekti"spy={true} smooth={true} hashSpy={true} offset={0} duration={1200} isDynamic={true}>{projects}</Link>
              <Link to="cene"spy={true} smooth={true} hashSpy={true} offset={0} duration={1200} delay={600} isDynamic={true}>{prices}</Link>
              <Link to="kontakt"spy={true} smooth={true} hashSpy={true} offset={0} duration={1200} delay={600}  isDynamic={true}>{contact}</Link>

               
         <DropdownButton title={<ReactCountryFlag countryCode={flag} svg />}>
            <Dropdown.Item onClick={() => dispatch(langEng())}>EN <ReactCountryFlag countryCode="GB" svg /></Dropdown.Item>
             <Dropdown.Item onClick={() => dispatch(langGer())}>DE <ReactCountryFlag countryCode="DE" svg /></Dropdown.Item>
             <Dropdown.Item onClick={() => dispatch(langSerb())}>RS <ReactCountryFlag countryCode="RS" svg /></Dropdown.Item>
         </DropdownButton>  

            </div> 

           </div>






                  {laz ? <FaBars className={navicStyle.bar} onClick={closeNavBar}  /> : <ImCross className={navicStyle.bar} onClick={closeNavBar} />} 

    
                {/* Menu Bar  768px */}

             {!laz ?

       <div className={navicStyle.navbar768}>
           <Link to="pocetna"spy={true} smooth={true} hashSpy={true} offset={0} duration={1200} delay={200} isDynamic={true} onClick={closeNavBar}>{home}</Link>
           <Link to="services"spy={true} smooth={true} hashSpy={true} offset={0} duration={1200} delay={200} isDynamic={true} onClick={closeNavBar} >{serv} </Link>
           <Link to="tehnologija"spy={true} smooth={true} hashSpy={true} offset={0} duration={1200} delay={200} isDynamic={true} onClick={closeNavBar} >{tech}</Link>
           <Link to="projekti"spy={true} smooth={true} hashSpy={true} offset={0} duration={1200} isDynamic={true} onClick={closeNavBar} >{projects}</Link>
            <Link to="cene"spy={true} smooth={true} hashSpy={true} offset={0} duration={1200} delay={600} isDynamic={true} onClick={closeNavBar} >{prices}</Link>
            <Link to="kontakt"spy={true} smooth={true} hashSpy={true} offset={0} duration={1200}  delay={600} isDynamic={true} onClick={closeNavBar}>{contact}</Link>

               
         <DropdownButton size='sm' title={<ReactCountryFlag countryCode={flag} svg />}>
            <Dropdown.Item onClick={() => dispatch(langEng())}>EN <ReactCountryFlag countryCode="GB" svg /></Dropdown.Item>
             <Dropdown.Item onClick={() => dispatch(langGer())}>DE <ReactCountryFlag countryCode="DE" svg /></Dropdown.Item>
             <Dropdown.Item onClick={() => dispatch(langSerb())}>RS <ReactCountryFlag countryCode="RS" svg /></Dropdown.Item>
         </DropdownButton>  

            </div> 

            :""}


       
  </div>
  );
}


export default Navic;
