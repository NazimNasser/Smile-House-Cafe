import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FoodList } from "../../components/FoodList";

export default function Receipt() {

  return (
    <div className="max-w-md px-4 py-5 mx-auto">
      <div className="w-[25px]">
        <Link href="/Menu/Home">
          <a className="text-[#3E3E3E] text-[20px]">
            <FaChevronLeft />
          </a>
        </Link>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-[#3E3E3E] px-1 pt-4 ">Order</h2>
      </div>
      <div>
        {FoodList.map((v, key) => {
          return (
            <>
              <div
                key={key}
                className="flex items-center w-full text-[14px] border-b-[1px] py-5 font-[400]"
              >
                <div className="w-[35%]">
                  <Image src={v.pic} alt="" width="" height="" />
                </div>
                <div className="px-2 whitespace-nowrap">{v.count} x</div>
                <div className="flex justify-end w-full">
                  <div className="flex justify-between w-full">
                    <div className="w-[75%]">size {v.title}</div>
                    <div className="text-[#585858]">${v.price}</div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="flex justify-between py-8">
        <div className="text-xl">Total:</div>
        <div className="text-2xl font-[500]">$45.88</div>
      </div>
    </div>
  );
}

