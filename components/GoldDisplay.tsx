"use client";
import React, { useEffect } from "react";

const GoldDisplay = () => {
  const getRecentGoldPrice = async () => {
    const response = await fetch("https://metals-api.com/api/latest");
    const data = await response.json();

    // return data.prices[0][1];
  };
  useEffect(() => {
    getRecentGoldPrice();
  }, []);
  return <div>GoldDisplay</div>;
};

export default GoldDisplay;
