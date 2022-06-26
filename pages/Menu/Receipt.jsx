import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FoodList } from "../../components/FoodList";

export const getStaticProps = async () => {
  const res = await fetch("http://127.0.0.1:8000/api/v1/categories");
  const posts = await res.json();

  return {
    props: {
      posts: posts.data
    },
  }
};

export default function Receipt({posts}) {

  return (
    <div className="px-4 py-5 mx-auto lg:w-[700px] sm:w-full">
      <div className="w-[25px]">
        <Link href="/Menu">
          <a className="text-[#3E3E3E] text-[20px]">
            <FaChevronLeft />
          </a>
        </Link>
      </div>
      <div>
        <h2 className="lg:text-4xl sm:text-2xl font-bold text-[#3E3E3E] px-1 pt-4 ">Order</h2>
      </div>
      <div>
        {posts.map((v, key) => {
          return (
            <>
              <div
                key={key}
                className="flex items-center w-full lg:text-[18px] sm:text-[14px] border-b-[1px] py-5 font-[400]"
              >
                <div className="w-[35%]">
                  <img src={`http://127.0.0.1:8000/image/${v.pic}`} alt="" width="" height="" />
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
        <div className="sm:text-xl lg:text-2xl">Total:</div>
        <div className="sm:text-2xl lg:text-3xl font-[500]">$45.88</div>
      </div>
    </div>
  );
}

