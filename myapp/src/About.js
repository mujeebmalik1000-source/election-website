import React from "react";
import AboutNavbar from "./components/AboutNavbar";
import AboutHero from "./components/AboutHero";
import CampaignSection from './components/CampaignSection';
import AboutSection from "./components/AboutSection";
import CampaignCard from './components/CampaignCard';
import HeroBanner from "./components/HeroBanner";
import TeamMembers from "./components/TeamMembers";
import FooterSection from"./components/FooterSection"


function About() {
  return (
    <>
       <AboutNavbar/>
      <AboutHero/>
      <CampaignSection/>
      <AboutSection/>
      <CampaignCard/>
      <HeroBanner/>
      <TeamMembers/>
      <FooterSection/>
      

      

    </>
  );
}

export default About;
