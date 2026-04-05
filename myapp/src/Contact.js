import React from 'react'
import AboutNavbar from "./components/AboutNavbar";
import AboutHero from "./components/AboutHero";
import ContactSection from './components/ContactSection';
import QuestionFormSection from "./components/QuestionFormSection";
import MapSection from './components/MapSection';
import FooterSection from"./components/FooterSection"
function Contact() {
  return (
   <>
   <AboutNavbar/>
   <AboutHero/>
   <ContactSection/>
   <QuestionFormSection/>
   <MapSection/>
   <FooterSection/>
   </>
  )
}

export default Contact