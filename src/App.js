import React from "react"
import Header from "./components/Layout/Header/Header"
import HeaderLink from "./components/Layout/HeaderLink/HeaderLink"
import HeroSection from "./components/HeroSection/HeroSection"
import HeroReview from "./components/HeroReview/HeroReview"
import HeroTestimony from "./components/HeroTestimony/HeroTestimony"
import  HeroMaganize from "./components/HeroMaganize/HeroMaganize"
import Footer from "./components/Layout/Footer/Footer"
import Story from "./components/Story/Story"
import StoryNotification from "./components/StoryNotification/StoryNotification"

const App=()=> {
  return (
  <>
  <Header/> 
  <HeaderLink/>
  <HeroSection/>
  <HeroReview/>
  <HeroTestimony/>
  < HeroMaganize/>
  <Footer/>
  <Story/>
  <StoryNotification/>

  </>
    

  );
}

export default App;
