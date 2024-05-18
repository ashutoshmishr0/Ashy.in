"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Image from "next/image";


const people = [
  {
    id: 1,
    name: "Ashu",
    designation: "Software Engineer",
    image:"https://pbs.twimg.com/profile_images/1784739245128921088/FgY5TaHq_400x400.jpg"
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: "",
  },
      
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:""
     },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:""
  },
      
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      ""
  },
];

const Wavelay = () => {
  return (
    <div className=" relative h-[40rem] overflow-hidden flex items-center justify-center ">
     <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h1>
        <p className="text-base md:text-lg text-white text-center mb-4">Always welcome those who offer suggestions to improve.</p>
       <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
    </WavyBackground>
    </div>
  )
}

export default Wavelay
