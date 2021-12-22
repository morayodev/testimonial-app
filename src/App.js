import React, { useState } from "react";
import Header from "./components/Layout/Header/Header";
import HeaderLink from "./components/Layout/HeaderLink/HeaderLink";
import HeroSection from "./components/HeroSection/HeroSection";
import HeroReview from "./components/HeroReview/HeroReview";
import { Routes, Route } from "react-router-dom";

// import HeroTestimony from "./components/HeroTestimony/HeroTestimony"
import HeroMaganize from "./components/HeroMaganize/HeroMaganize";
import Footer from "./components/Layout/Footer/Footer";
import Story from "./components/Story/Story";
import StoryNotification from "./components/StoryNotification/StoryNotification";

const App = () => {
  const [showModal, setShowmodal] = useState(false);

  return (
    <>
      <Header />
      <HeaderLink />
      <HeroSection />
      <HeroReview />
      <Story setShowmodal={()=>setShowmodal(!showModal)}/>
      <HeroMaganize />
      <Footer />
      {/* <Routes>
        <Route
          path="story-sucessful"
          element={<StoryNotification showModal={showModal} />}
        />
      </Routes> */}
      <StoryNotification showModal={showModal} />
    </>
  );
};

export default App;
