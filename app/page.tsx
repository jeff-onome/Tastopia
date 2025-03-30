"use client"
import React from 'react'


import Navbar from "@/components/Navbar";
import ChefSection from "@/components/ChefSection";
import BestFood from "@/components/BestFood";
import SpecialOffers from "@/components/SpecialOffer";
import MeetOurChefs from "@/components/MeetChefs";
import OpeningHours from "@/components/OpenHours";
import Reviews from "@/components/ReviewSlider";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
        <Navbar />
        <ChefSection />
        <BestFood />
        <SpecialOffers />
        <MeetOurChefs />
        <OpeningHours />
        <Reviews />
        <Footer />
    </>
  );
}
