import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";

import { CiCircleCheck } from "react-icons/ci";
import { motion } from "framer-motion";

const Card = (props) => {
  const [Product, setProduct] = useState([]);
  const [state, setState] = useState("");
  const [Clicked, setClicked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        //const Product = data.filter((item) => item.id == props.id);
        //setFilterd(Product[0]);

        setProduct(data);
      } catch (error) {}
    };

    fetchData();
  }, []);

  const addToCart = (ids) => {
    var Car = JSON.parse(localStorage.getItem("cart"));
    const pro = Product.find((item) => {
      return item.id == ids;
    });
    const item = Car.find((item) => {
      return item.id == ids;
    });
    if (item != null) {
      var index = 0;

      Car.forEach((obj) => {
        if (obj.id === ids) {
          Car[index].quantity++;
        }
        index++;
      });

      localStorage.setItem("cart", JSON.stringify(Car));
    } else {
      Car.push(pro);
      localStorage.setItem("cart", JSON.stringify(Car));
    }
  };
  return (
    <div
      className=" flex  flex-col h-96 w-full bg-slate-400 rounded-lg justify-center items-center"
      key={props.id}
    >
      <Link
        onClick={() => {
          setState("set");
        }}
        to={`/shop/${props.id}/${props.catergory}`}
        className="bg-slate-900 rounded w-11/12 h-52 items-center flex p-2 m-2"
        reloadDocument
      >
        <motion.img
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          src={props.img}
          alt=""
          className="object-contain items-center w-full h-full hover:scale-90 duration-1000 ease-in-out"
        />
      </Link>
      <div className="title w-full">
        <h4 className="mb-2 mx-2 p-2  font-semibold text-xl text-black overflow-ellipsis overflow-hidden whitespace-nowrap w-full text-center">
          {props.title}
        </h4>
        <div className="flex md:flex-row flex-col text-center justify-around px-2">
          <p className="text-lg font-medium">R{props.price}</p>
          <p>{props.catergory}</p>
        </div>
      </div>
      <button
        onClick={() => {
          addToCart(props.id);
          setClicked(true);
          setTimeout(() => {
            setClicked(false);
          }, 800);
        }}
        className=" p-2 flex mt-4 min-w-32 items-center justify-evenly bg-orange-500  w-1/2 h-auto rounded-md hover:scale-90 duration-1000 ease-in-out font-semibold mb-2  hover:bg-black  text-white"
      >
        <FaCartShopping /> Add to Cart
      </button>
      {Clicked && (
        <motion.div
          initial={{
            opacity: 1,
          }}
          animate={{
            opacity: 0,
          }}
          transition={{
            duration: 3,
          }}
          className="absolute  flex bg-green-700 p-2 rounded-md"
        >
          Added to Cart <CiCircleCheck />
        </motion.div>
      )}
    </div>
  );
};
export default Card;
