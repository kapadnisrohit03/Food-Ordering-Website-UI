import React from "react";
import { useState } from "react";

const TopRestaurant = () => {
  // Swiggy API not working
    
  // async function fetchData (){
  //   const response = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=51.50740&lng=-0.11960&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
  //   const result = await response.json();
  //   console.log(result?.data?.cards[0]?.card?.card); 
  // }
  // useEffect(()=>{
  //   fetchData();
  // }, [])
  

  // Data for "Top Restaurant Chains in Mumbai" Section

  const topRestData = [
    {
      id: 1,
      title: "",
      bottomName: "Items At ₹169",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597`,
    },
    {
      id: 2,
      title: "",
      bottomName: "60% off upto ₹120",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_78036.JPG`,
    },
    {
      id: 3,
      title: "",
      bottomName: "",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/49845b494b1e637209b7bd1c7ca184ad`,
    },
    {
      id: 4,
      title: "",
      bottomName: "30% off upto ₹75",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/4a8bc67d-8fe4-44db-be5d-1477086cc52b_32399.JPG`,
    },
    {
      id: 5,
      title: "",
      bottomName: "Items At ₹260",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d0450ce1a6ba19ea60cd724471ed54a8`,
    },
    {
      id: 6,
      title: "",
      bottomName: "50% off upto ₹100",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/64fd45fd9f44c1737bc446e470bed666`,
    },
    {
      id: 7,
      title: "",
      bottomName: "50% off upto ₹100",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e5f54df4ed8bac458b801ede76ee37d0`,
    },
    {
      id: 8,
      title: "",
      bottomName: "₹125 off above ₹249",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/a855f6657b55a1f2c3a7aac9101199bc`,
    },
    {
      id: 9,
      title: "",
      bottomName: "₹125 off above ₹249",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/20/666f0ad8-4ca7-459e-8d73-6a05484971a0_825847.JPG`,
    },
    {
      id: 10,
      title: "",
      bottomName: "",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/36c15da5-700d-46e0-95dd-1414acb77a96_9052.JPG`,
    },
    {
      id: 11,
      title: "",
      bottomName: "₹300 off above ₹3000",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/28/1dd55edb-2651-4660-9bba-8d3dbe528f98_673363.jpg`,
    },
    {
      id: 12,
      title: "",
      bottomName: "₹125 off above ₹249",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/25/28e57ec9-0fef-4a97-96d6-fa0c450a3f3f_202836.jpg`,
    },
    {
      id: 13,
      title: "",
      bottomName: "40% off upto ₹80",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/29605cbcfc2615dfdc905ce94c216ddb`,
    },
    {
      id: 14,
      title: "",
      bottomName: "20% off upto ₹50",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5116a385bac0548e06c33c08350fbf11`,
    },
    {
      id: 15,
      title: "",
      bottomName: "40% off upto ₹80",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/e2270129-d210-4a35-b044-73ae307c5280_243517.JPG`,
    },
    {
      id: 16,
      title: "",
      bottomName: "₹125 OFF ABOVE ₹249",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/12/4b894c57-bf29-4e00-80d1-6cc63fdb8509_690202.JPG`,
    },
    {
      id: 17,
      title: "",
      bottomName: "30% OFF UPTO ₹75",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/23/81bf516c-205c-44b8-9bb2-74aa62529d26_692689.JPG`,
    },
    {
      id: 18,
      title: "",
      bottomName: "15% off",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/f5fe3b56-d3d7-45de-8412-96742c073f45_236162.jpg`,
    },
    {
      id: 19,
      title: "",
      bottomName: "60% OFF UPTO ₹120",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/515ff474640edf1efe636456b6b02c8e`,
    },
    {
      id: 20,
      title: "",
      bottomName: "20% OFF UPTO ₹50",
      img: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/t6av3q7weumzdozcmowp`,
    },
  ];

  // Code for "Next" and "Previous" buttons.

  const [value, setValue] = useState(0);

  function handleNext() {
    value >= 320 ? "" : setValue((prev) => prev + 40);
  }

  function handlePrev() {
    value <= 0 ? "" : setValue((prev) => prev - 40);
  }

  // console.log(value);

  return (
    <div className="topRestaurants">
      <div className="topRestaurantText">
        <h1 className="font-bold text-2xl">Top restaurant chains in Mumbai</h1>
      </div>

      <div
        className="arrow flex
      pl-[65vw] gap-2 mb-[2vw]"
      >
        <div
          className={
            `backwardArrow  p-[9px] h-[40px] rounded-full flex items-center cursor-pointer mt-[-2vw] ` +
            (value <= 0 ? "bg-gray-200" : "bg-gray-300 hover:bg-orange-300")
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
            `forwardArrow bg-gray-300 p-[9px] h-[40px] rounded-full flex items-center cursor-pointer mt-[-2vw] ` +
            (value >= 320 ? "bg-gray-200" : "bg-gray-300 hover:bg-orange-300")
          }
          onClick={handleNext}
        >
          <i
            className={
              `fi fi-rr-arrow-small-right text-[1.3vw] font-light ` +
              (value >= 320 ? "text-slate-400" : "text-slate-950")
            }
          ></i>
        </div>
      </div>

      <div className="items flex gap-6 overflow-hidden">
        {topRestData.map((d) => {
          return (
            <div key={d.id} className="duration-300 cursor-pointer hover hover:scale-95"
            style={{ translate: `-${value}vw` }}
            >
              <div
                className={`flex-shrink-0 w-[18vw] gap-5 relative h-[11vw] `}
              >
                <img
                  src={d.img}
                  alt={d.title}
                  className="rounded-xl object-cover cursor-pointer w-full h-full"
                />
                <div className="bg-gradient-to-t from-black from-1% to-transparent to-[37%] absolute top-0 w-full h-full rounded-xl"></div>
                <p className="absolute bottom-0 text-[1.3vw] text-white font-[1000] uppercase pl-[0.8vw] pb-[0.5vw] tracking-tighter ">
                  {" "}
                  {d.bottomName}
                </p>
              </div>
              <div className="mt-3 ml-3 leading-tight ">
                <h2 className="font-[700] text-lg">Dish Name</h2>
                <div className="flex gap-1">
                  <p className="mt-[0.2vw]">
                    <i className="fi fi-sr-circle-star text-[#148840]"></i>
                  </p>
                  <p>Ratings</p>
                </div>
                <p className="text-md text-gray-700">
                  Information about the food.
                </p>
                <p className="text-md text-gray-700">Location</p>
                <p className="text-md text-gray-700">(Original data cannot be accessed)</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="dividingLine border-b mt-[2vw] mb-[2vw]"></div>
    </div>
  );
};

export default TopRestaurant;
