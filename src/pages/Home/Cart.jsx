import { useEffect, useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { motion } from "framer-motion";
import { CiCircleCheck } from "react-icons/ci";
function Cart() {
  const [products, setproducts] = useState([]);
  const [Filterd, setFilterd] = useState([]);
  const [Cart, setCart] = useState([]);
  const [Total, setTotal] = useState([]);
  const [Clicked, setClicked] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setproducts(data);
        const Car = JSON.parse(localStorage.getItem("cart"));

        setCart(Car);
        setFilterd(data[2]);
        getTotal(Car);
        console.log(data);
      } catch (error) {}
    };

    fetchData();
  }, []);

  //get total price  of the shopping cart items
  const getTotal = (cart) => {
    var sum = 0;
    var qua = 0;
    cart.map((item) => {
      sum += item.price * item.quantity;
      qua += item.quantity;
    });
    setTotal([sum, qua]);
  };

  const removeCart = (ids) => {
    const cart = Cart.filter((items) => items.id != ids);
    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(cart);
    getTotal(Cart);
  };
  return (
    <div className="p-4 flex min-h-full md:flex-row flex-col h bg-slate-300">
      <div className=" mx-auto md:w-9/12 w-full">
        {Clicked && (
          <motion.div
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 0,
            }}
            transition={{
              duration: 4,
            }}
            className=" w-1/3 absolute z-10 flex bg-red-700 p-2 rounded-md"
          >
            Removed from Cart <CiCircleCheck />
          </motion.div>
        )}
        {Cart.map((item) => (
          <div className="products flex gap-1 w-full bg-slate-400 p-2 mb-2 rounded-md">
            <div className="md:w-1/6 w-1/2 h-32 bg-slate-800 p-4 rounded-lg">
              <img
                src={item.img}
                alt=""
                className="object-contain w-full h-full hover:scale-75 duration-1000 ease-in-out"
              ></img>
            </div>
            <div className=" md:text-center w-10/12">
              <h1 className=" px-4 text-33xl font-semibold text-white">
                {item.title}
              </h1>
              <div className="flex md:flex-row flex-col justify-around px-4">
                <p className="text-xl font-medium my-2">
                  R {item.price * item.quantity}
                </p>{" "}
                <p className="">Quantity: {item.quantity}</p>
              </div>

              <div
                onClick={() => {
                  removeCart(item.id);
                  setClicked(true);
                  setTimeout(() => {
                    setClicked(false);
                  }, 800);
                }}
                className=" flex float-end me-2 items-center text-black mt-2 cursor-pointer text-xl"
              >
                <span className="hidden md:block absolute md:relative text-lg">
                  Remove
                </span>
                <MdDelete className="text-orange-400 ms-1 " />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary md:ms-3 mx-auto p-4 bg-slate-400 md:h-52  md:w-1/4 w-full rounded-md flex flex-col justify-between">
        <h1 className="text-center font-semibold text-2xl text-black">
          Cart Summary
        </h1>
        <div className=" flex justify-between text-lg font-medium">
          <p>Total: ({Total[1]}) items</p>
          <p className="text-wrap">R {Total[0]}</p>
        </div>

        <div className=" flex items-center justify-center">
          <button className="flex  items-center justify-evenly bg-orange-500 rounded-lg w-52 h-12 hover:scale-105 duration-1000 ease-in-out font-semibold  hover:bg-black p-2 text-white  ">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
export default Cart;
