import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";
// import React, { useCallback } from "react";
import { FaChevronLeft, FaCircle, FaStar, FaTimes } from "react-icons/fa";
import { FoodList } from "../../components/FoodList";
import { MenuList } from "/components/MenuList";
import { useState } from "react";
import AddOns from "../../components/AddOns";

export default function Home() {
  const [isAddOnOpen, setisAddOnOpen] = useState(false);
  const showAddOn = () => {
    isAddOnOpen ? setisAddOnOpen(false) : setisAddOnOpen(true);
  };

  const arr = [4.5, 5, 4, 5, 5, 5, 5, 5, 4];
  const average = (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(1);

  const sum = [5.44, 15.22, 45.99];

  const result = sum.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
  // const router = useRouter();

  // const goBack = useCallback(() => {
  //   router.back();
  // }, []);
  return (
    <div className="max-w-md mx-auto">
      <div className="bg-[url(../public/image/vkusniashki.webp)] bg-no-repeat bg-cover p-4">
        <div className="w-[25px]">
          <Link href="/">
            <a className="text-white text-[25px]">
              <FaChevronLeft />
            </a>
          </Link>
        </div>
        <div>
          <h2 className="text-white text-[30px] pt-2 pl-1 font-[700]">
            Smile House Cafe
          </h2>
        </div>
        <div className="flex flex-wrap text-[14px]">
          <div className="p-[10px] m-1 bg-white rounded-[15px] flex">
            <div className="text-[12px] pt-1 pr-1">
              <FaStar />
            </div>
            {average}
            <div className="px-2 pt-2">
              <FaCircle className="text-[5px]" />
            </div>
            415 Reviews
          </div>
          <div className="p-[10px] m-1 bg-white rounded-[15px]">15-20 mins</div>
          <div className="p-[10px] m-1 bg-white rounded-[15px]">
            Delivery - $8.99
          </div>
        </div>
      </div>
      <div className="px-3 mb-14">
        <div className="overflow-x-scroll hideScroll">
          <div className="my-7 text-[12px]">
            {MenuList.map((v, key) => {
              return (
                <>
                  <a
                    key={key}
                    href="#"
                    className="focus:bg-[#FCCC66] p-[10px] rounded-xl"
                  >
                    {v.title}
                  </a>
                </>
              );
            })}
          </div>
        </div>
        <div className="flex flex-wrap justify-between w-full text-sm">
          {FoodList.map((v, key) => {
            return (
              <>
                <div
                  onClick={() => {
                    showAddOn();
                  }}
                  key={key}
                  className="w-[48%] bg-white p-2 rounded-md mb-[5%] shadow-md"
                >
                  <div>
                    <Image
                      className="rounded-md"
                      src={v.pic}
                      alt=""
                      width=""
                      height=""
                    />
                  </div>
                  <div>
                    <h3>{v.title}</h3>
                  </div>
                  <div className="flex justify-between py-1">
                    <div className="text-[#585858]">${v.price}</div>
                    <div className="bg-[#FCCC66] px-[6px] rounded-md w-fit">
                      {v.count}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="fixed bottom-0 w-full p-3 bg-white">
        <Link href="/Menu/Receipt">
          <a className="flex bg-[#FCCC66] py-3 px-4 rounded-xl justify-between text-sm">
            <div className="bg-[#464646] px-[6px] rounded-md text-white">3</div>
            <div>VIEW CART</div>
            <div>${result}</div>
          </a>
        </Link>
      </div>
      {isAddOnOpen ? (
        <>
          <div className="fixed top-0 bottom-0 w-full overflow-auto bg-white">
            <div
              className="px-2 py-2 text-2xl"
              onClick={() => {
                showAddOn();
              }}
            >
              <FaTimes />
            </div>
            <AddOns />
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
