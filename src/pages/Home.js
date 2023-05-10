import React from "react";
import Bottom from "../Components/Bottom";
import SupportSection from "../Components/SupportSection";
import Astronomy from "../Components/Astronomy";
import Live from "../Components/Live";
import Latest from "../Components/Latest";
import Footer from "../Components/Footer";
import MusicCard from "../Components/MusicCard";

const Home = () => {
  return (
    <>
    <Astronomy/>
     <Bottom/>
      <Live/>
     <MusicCard/>
        <SupportSection/>
       <Latest/>
       <Footer/>
    </>
  );
};

export default Home;
