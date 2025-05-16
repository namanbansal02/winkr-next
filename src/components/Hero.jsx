'use client';

import React, { useEffect } from "react";
import LoggedOutHero from "./LoggedOutHero";
//import { useNavigate } from "react-router-dom";

const Hero = () => {
  //const navigate = useNavigate();
    const isUserLoggedIn = true; // Replace with actual authentication logic
  useEffect(() => {
    if (!isUserLoggedIn) {
      // Navigate to external site using window.location for full redirect
      //window.location.replace("https://winkr.live");
    }
  }, [isUserLoggedIn]);

  return isUserLoggedIn ? <LoggedOutHero /> : null;
};

export default Hero;