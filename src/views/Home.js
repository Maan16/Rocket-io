import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Strip from '../components/sections/Strip';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <Strip/>
      {/* <div style={{minHeight:"200px", backgroundColor:"#d96024", color:"white"}}> HEY</div> */}
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />    
    </>
  );
}

export default Home;