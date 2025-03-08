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
  console.log(showModal, "showModal");
  return (
    <>
      <div className="" style={{ overflowX: "hidden" }}>
        <Header />
        <HeaderLink />
        <HeroSection />
        <HeroReview />
        <Story setShowmodal={setShowmodal} showModal={showModal} />
        <HeroMaganize />
        <Footer />
        {/* <StoryNotification showModal={showModal} setShowmodal={setShowmodal} /> */}
      </div>
    </>
  );
};

export default App;
