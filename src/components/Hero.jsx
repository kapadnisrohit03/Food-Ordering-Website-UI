import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import OnYourMind from "./Hero Page/OnYourMind";
import TopRestaurant from "./Hero Page/TopRestaurant";
import RestaurantsWithOnlineFoodDelivery from "./Hero Page/RestaurantsWithOnlineFoodDelivery";

const Hero = () => {

  return (
    <div className="w-full">
      <div className=" firstPage w-[75%] mx-auto">
        <OnYourMind/>
        <TopRestaurant/>
        <RestaurantsWithOnlineFoodDelivery/>
      </div>
    </div>
  );
};

export default Hero;
