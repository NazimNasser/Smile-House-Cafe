// import React, { useState } from "react";
// import Image from "next/image";
// import { FoodList } from "./FoodList";
// import { FaPlus, FaMinus } from "react-icons/fa";
// import { CartProvider, useCart } from "react-use-cart";

// export default function AddOns() {
//   // const [counter, setCounter] = useState(0);

//   //increase counter
//   // const increase = () => {
//   //   setCounter(count => count + 1);
//   // };

//   // //decrease counter
//   // const decrease = () => {
//   //   setCounter(count => count - 1);
//   // };
//   // const [changeColor, setchangeColor] = useState([]);
//   // const switchColor = () => {
//   //   changeColor ? setchangeColor(false) : setchangeColor(true);
//   // };

//   //the result
//   // const sum = [5.44, 15.22, 45.99];

//   // const result = sum.reduce((accumulator, value) => {
//   //   return accumulator + value;
//   // }, 0);

//   const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
//     useCart();

//   // if (isEmpty) return <p>Your cart is empty</p>;

//   return (
//     <>
//       <div className="px-4 pb-4 lg:w-[500px] mx-auto lg:shadow-lg sm:w-full sm:shadow-none lg:rounded-md sm:rounded-none">
//         <div className="px-4 py-2">
//           <Image src={FoodList[0].pic} alt="" width="" height="" />
//         </div>
//         <div className="flex justify-between w-full my-2 rounded-md shadow-md">
//           {FoodList[0].size.map((v, key) => {
//             return (
//               <>
//                 <button
//                   key={key}
//                   className="w-full py-1 hover:rounded-md hover:bg-[#FCCC66]"
//                 >
//                   {v.shortcut}
//                 </button>
//               </>
//             );
//           })}
//         </div>
//         <div>
//           <h2 className="py-1 text-2xl font-bold">
//             <span className="text-[#FCCC66]">{FoodList[0].size[1].name} </span>
//             {FoodList[0].title}
//           </h2>
//         </div>
//         <div className="text-[#585858] p-1">{FoodList[0].description}</div>
//         <div className="my-4">
//           <h4>Additional ingredients</h4>
//         </div>
//         <div>
//           <form action="">
//             <div className="overflow-y-auto h-[110px]">
//               {FoodList[0].addons.map((v, key, checked) => {
//                 return (
//                   <>
//                     <div key={key} className="flex items-center py-2">
//                       <input
//                         id={`addOns${key}`}
//                         className="w-4 h-4 checked:bg-[#FCCC66] checked:border-0 text-sm flex justify-center items-center checked:before:content-['\2713'] bg-[#F3F3F5] appearance-none border-[1px] rounded"
//                         type="checkbox"
//                         name=""
//                         // onClick={switchColor}
//                       />
//                       <label
//                         htmlFor={`addOns${key}`}
//                         className="flex justify-between w-full ml-2 text-md"
//                       >
//                         {/* {console.log(document.getElementById(`addOns${key}`).value)} */}
//                         <span>{v.name}</span>
//                         <span
//                         // className={`${
//                         //   changeColor ? "" : "text-[#FCCC66] font-bold"
//                         // }`}
//                         >
//                           + {v.price} $
//                         </span>
//                       </label>
//                     </div>
//                   </>
//                 );
//               })}
//             </div>
//           </form>
//         </div>
//         <div className="flex justify-between mt-5">
//           <div className="flex justify-between bg-[#F3F3F5] py-3 px-4 rounded-xl text-sm w-[39%] items-center">
//             <span
//               onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
//               className="text-sm text-[#313131]"
//             >
//               <FaMinus />
//             </span>
//             <span>2</span>
//             <span
//               onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
//               className="text-sm text-[#313131]"
//             >
//               <FaPlus />
//             </span>
//           </div>
//           <div className="flex justify-between bg-[#FCCC66] py-3 px-4 rounded-xl text-sm w-[59%]">
//             <span>ADD</span>
//             <span>1</span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
