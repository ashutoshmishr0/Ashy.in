"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const testimonials = [
  {
    quote:
      "Impressive work on your MERN stack website! The project portfolio is well-organized and showcases your skills beautifully. Looking forward to seeing more of your projects. Best wishes!, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "project portfolio",
  },
  {
    quote:
      "Great job on the website! The 'Contact Us' section is very user-friendly. One suggestion: consider adding a live chat feature for instant communication. Keep up the great work!",
    name: "William Shakespeare",
    title: "Contact Us",
  },
  {
    quote: "Your TikTok real-time messaging app is fantastic! The real-time functionality is smooth and reliable. Perhaps add a feature for group chats. Keep up the great work!",
    name: "Edgar Allan Poe",
    title: "Tak-Tok",
  },
  {
    quote:
      "Great job on Sangit! The Spotify link integration is seamless and enhances music sharing. Consider adding personalized playlist recommendations. Keep up the fantastic work!",
    name: "Jane Austen",
    title: "Sangit",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
const InfiniteMoving = () => {
  return (
   <div className=" h-[40rem] w-full dark:bg-black dark:bg-dot-white/[0.2]  relative flex flex-col items-center justify-center overflow-hidden">
    <h2 className="text-3xl font-bold text-center mb-8 z-10">Top comments on this web</h2>
    <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
     <div className="w-full max-w-8xl">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      </div>
    </div>
    </div>
  )
}

export default InfiniteMoving

