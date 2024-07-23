import React from 'react';
// import Navbar from "./Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import AppSlider from "./AppSlider/AppSlider";
import DeviceSlider from "./DeviceSlider/DeviceSlider";
import CategoriesSection from "./CategoriesSection/CategoriesSection";
import RecentlyAddedApps from "./RecentlyAddedApps/RecentlyAddedApps";
import Login from "./Login/Login";


const HomePage = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <HeroSection />
        <AppSlider />
        <CategoriesSection />
        <RecentlyAddedApps />
        <DeviceSlider />
        <Login />
    </div>
  );
};

export default HomePage;