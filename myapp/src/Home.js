import React from 'react'
import TopHeader from "./components/TopHeader";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CampaignSection from './components/CampaignSection';
import AboutSection from "./components/AboutSection";
import CampaignCard from './components/CampaignCard';
import MissionSection from './components/MissionSection'
import EventsSection from './components/EventsSection'
import BlogSection from "./components/blogSection";
import FooterSection from"./components/FooterSection"





function Home() {
  return (
   <>
   <TopHeader/>
   <Navbar/>
   <HeroSection/>
   <CampaignSection/>
   <AboutSection/>
   <CampaignCard/>
   <MissionSection/>
   <EventsSection/>
   <BlogSection/>
   <FooterSection/>
   
   
   
   
   </>
  )
}

export default Home;