import React, { useState } from "react";
import Header from "./components/Layout/Header/Header";
import HeaderLink from "./components/Layout/HeaderLink/HeaderLink";
import HeroSection from "./components/HeroSection/HeroSection";
import HeroReview from "./components/HeroReview/HeroReview";

import HeroMaganize from "./components/HeroMaganize/HeroMaganize";
import Footer from "./components/Layout/Footer/Footer";
import Story from "./components/Story/Story";
import StoryNotification from "./components/StoryNotification/StoryNotification";

const App = () => {
  const [showModal, setShowmodal] = useState(false);

  return (
    <>
    <div className="" style={{overflowX:"hiiden"}}>
      {/* <Header /> */}
      {/* <HeaderLink /> */}
      {/* <HeroSection /> */}
      <HeroReview />
      {/* <Story setShowmodal={() => setShowmodal(!showModal)} /> */}
      {/* <HeroMaganize /> */}
      {/* <Footer /> */}
      {/* <StoryNotification showModal={showModal} /> */}
      </div>
    </>
  );
};

export default App;
