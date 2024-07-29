import { FaShoppingBag } from "react-icons/fa";
import img from "/images/headphone.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Banner() {
  return (
    <div className="bg-slate-800 py-12 xl:px-28 px-4 flex flex-col-reverse justify-evenly md:flex-row gap-8">
      <div className="text flex flex-col justify-evenly gap-8 items-center text-white md">
        <h1 className="text-7xl">Collections</h1>
        <p className="text-lg text-wrap text-center">
          We more Collections in our store ranging from Clothes to Elecronics
        </p>

        <motion.a
          initial={{
            translateX: -700,
          }}
          animate={{
            translateX: 0,
          }}
          transition={{
            duration: 1,
            type: "spring",
          }}
          href="#product"
          className="flex  items-center justify-evenly bg-orange-400 rounded-lg w-52 h-12 hover:scale-105 duration-1000 ease-in-out font-semibold hover:bg-orange-950 p-2 "
        >
          <FaShoppingBag /> Shop Now
        </motion.a>
      </div>
      <div className="banner-image hover:scale-75 duration-1000 ease-in-out flex justify-center">
        <motion.img
          src={img}
          alt=""
          width={200}
          initial={{
            translateX: 300,
          }}
          animate={{
            translateX: 0,
          }}
          transition={{
            duration: 2,

            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
export default Banner;
