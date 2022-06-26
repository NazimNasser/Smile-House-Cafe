import Image from "next/image";
import funnypineapple from "../../public/image/funny-pineapple.webp";
import pineapple from "../../public/image/pineapple.webp";
import Link from "next/link";

export default function LogIn() {

  return (
    <>
      <div className="w-full">
        <div className="sm:hidden">
          <Image className="-z-10" src={funnypineapple} alt="" />
        </div>
        <div className="hidden sm:block">
          <Image className="-z-10" src={pineapple} alt="" />
        </div>
        <div className="rounded-t-[20px] mt-[-80px] bg-white w-full">
          <div className=" w-[90%] mx-auto">
            <div>
              <h2 className="text-[30px] font-[700] text-[#3E3E3E] pt-5">
                Welcome!
              </h2>
            </div>
            <div>
              <form method="post" action="/Menu">
                <div className="pt-5 pb-2 space-y-6">
                  <div className="relative border-b-2 focus-within:border-blue-500">
                    <input
                      id="fullname"
                      type="text"
                      name="fullname"
                      placeholder=" "
                      className="block w-full bg-transparent inputDesign focus:outline-none"
                      required
                    />
                    <label
                      htmlFor="fullname"
                      className="absolute top-0 duration-300 origin-0 text-[#5c5c5c]"
                    >
                      FULL NAME*
                    </label>
                  </div>
                  <div className="relative border-b-2 focus-within:border-blue-500">
                    <input
                      id="phone"
                      type="text"
                      name="phone"
                      placeholder=" "
                      className="block w-full bg-transparent inputDesign focus:outline-none"
                      required
                    />
                    <label
                      htmlFor="phone"
                      className="absolute top-0 duration-300 origin-0 text-[#5c5c5c]"
                    >
                      PHONE NUMBER*
                    </label>
                  </div>
                </div>
                <div>
                  <button
                    className="bg-[#FCCC66] font-[500] w-full py-4 mt-6 mb-3 rounded-[15px]"
                  >
                    CONTINUE
                  </button>
                </div>
              </form>
            </div>
            <div className="flex justify-center w-full p-2">
              <Link href="/Menu">
                <a className="text-[20px] text-[#3E3E3E] font-[500] px-[5px] border-[#FCCC66] border-b-2">
                  Skip
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
