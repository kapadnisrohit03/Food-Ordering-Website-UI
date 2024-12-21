import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const OnYourMind = () => {
  // Data for "What's on your mind" Section.
  const data = [
    {
      id: 1,
      title: "",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png`,
    },
    {
      id: 2,
      title: "",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png`,
    },
    {
      id: 3,
      title: "",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/58760e8e-324f-479e-88fa-31800120ea38_Rolls1.png`,
    },
    {
      id: 4,
      title: "",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Momos.png`,
    },
    {
      id: 5,
      title: "",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Chinese.png`,
    },
    {
      id: 6,
      title: "",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png`,
    },
    {
      id: 7,
      title: "",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png`,
    },
    {
      id: 8,
      title: "",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pav Bhaji.png`,
    },
    {
      id: 9,
      title: "",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_shawarma.png`,
    },
    {
      id: 10,
      title: "",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pakoda.png`,
    },
    {
      id: 11,
      title: "",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pasta.png`,
    },
    {
      id: 12,
      title: "",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Salad-1.png`,
    },
    {
      id: 13,
      title: "",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cutlet.png`,
    },
    {
      id: 14,
      title: "",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pure Veg.png`,
    },
    {
      id: 15,
      title: "",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Shake.png`,
    },
    {
      id: 16,
      title: "",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pastry.png`,
    },
    {
      id: 17,
      title: "",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png`,
    },
    {
      id: 18,
      title: "",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Kachori.png`,
    },
  ];

  // Code for "Next" and "Previous" buttons for "On Your Mind".

  const [value, setValue] = useState(0);

  function handleNext() {
    value >= 120 ? "" : setValue((prev) => prev + 41);
  }

  function handlePrev() {
    value <= 0 ? "" : setValue((prev) => prev - 41);
  }

  // console.log(value);

  return (
    <div>
      <div className="Heading mt-[1vw]">
        <h1 className="font-bold text-2xl font-Gilroy tracking-tighter">
          What's on your mind?
        </h1>
      </div>
      <div className="HomeCircleMenu">
        <div className="mt-[-2vw]">
          <div className="arrow flex pl-[65vw] gap-2">
            <div
              className={
                `backwardArrow  p-[9px] h-[40px] rounded-full flex items-center cursor-pointer ` +
                (value <= 0 ? "bg-gray-200 " : "bg-gray-300 hover:bg-orange-300")
              }
              onClick={handlePrev}
            >
              <i
                className={
                  `fi fi-rr-arrow-small-left text-[1.3vw] ` +
                  (value <= 0 ? "text-slate-400" : "text-slate-950")
                }
              ></i>
            </div>

            <div
              className={
                `forwardArrow bg-gray-300 p-[9px] h-[40px] rounded-full flex items-center cursor-pointer ` +
                (value >= 120 ? "bg-gray-200 " : "bg-gray-300 hover:bg-orange-300")
              }
              onClick={handleNext}
            >
              <i
                className={
                  `fi fi-rr-arrow-small-right text-[1.3vw] font-light ` +
                  (value >= 120 ? "text-slate-400" : "text-slate-950")
                }
              ></i>
            </div>
          </div>

          <div className={`flex overflow-hidden`}>
            {data.map((d) => {
              return (
                <motion.div
                  key={d.id}
                  className={`overflow-x-auto flex-shrink-0 duration-[400ms] w-[10.9vw]`}
                  style={{ translate: `-${value}vw` }}
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={d.img}
                    alt={d.title}
                    className="w-[10vw] h-[12vw] cursor-pointer"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="dividingLine border-b mt-[2vw] mb-[2vw]"></div>
    </div>
  );
};

export default OnYourMind;
