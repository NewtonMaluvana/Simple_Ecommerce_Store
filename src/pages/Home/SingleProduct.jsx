import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CiCircleCheck } from "react-icons/ci";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
} from "swiper/modules";
import { iterate } from "localforage";
import Card from "../../Components/Card";
import { FaCartShopping } from "react-icons/fa6";

const SingleProduct = () => {
  const [Filterd, setFilterd] = useState([]);
  const [Product, setProduct] = useState([]);
  const [Related, setRelated] = useState([]);
  const [Clicked, setClicked] = useState(false);

  const { id, catergory } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        const Product = data.filter((item) => item.id == id);
        const related = data.filter(
          (item) => item.id != id && item.catergory == catergory
        );
        setRelated(related);
        setFilterd(Product[0]);
        setProduct(data);
        console.log(related);
      } catch (error) {}
    };

    fetchData();
  }, []);

  const addToCart = (ids) => {
    const Car = JSON.parse(localStorage.getItem("cart"));
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
    <div className="max-w-screen-2xl  p-8 bg-slate-200">
      <div className="flex flex-col   md:flex-row  gap-4 justify-between ">
        <div className="md:w-1/2 w-full h-96 bg-slate-900 p-10 mx-auto rounded-lg">
          <img
            src={Filterd.img}
            className="object-contain w-full h-full hover:scale-95 duration-1000 ease-in-out"
          />
        </div>
        <div className="text-lg font-semibold text-wrap w-1/2 ps-4 pt-4 flex flex-col md:flex-col gap-3 text-center md:text-start  mx-auto">
          <p className="text-2xl text-orange-600">{Filterd.title}</p>
          <p className="text-lg my-2">R {Filterd.price}</p>
          <div className="md:text-start text-center">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            id. Voluptates maxime autem perferendis tempora nulla magni neque
            nam porro, atque non eum doloremque laudantium quam omnis expedita,
            similique consequuntur.
          </div>

          <div className="flex md:justify-start justify-center">
            <button
              onClick={() => {
                addToCart(id);
                setClicked(true);
                setTimeout(() => {
                  setClicked(false);
                }, 800);
              }}
              className="flex min-w-36  items-center justify-evenly bg-orange-500 rounded-lg w-1/4 h-12 hover:scale-105 duration-1000 ease-in-out font-semibold  hover:bg-orange-950 p-2 text-white "
            >
              <FaCartShopping /> Add to Cart
            </button>
          </div>
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
              className=" flex bg-green-700 p-2 rounded-md"
            >
              Added to Cart <CiCircleCheck />
            </motion.div>
          )}
        </div>
      </div>

      <div className="related-product mt-12">
        <div className="text-center text-3xl font-bold">Related Products</div>
        <div className=" p-4">
          <Swiper
            effect="coverflow"
            // install Swiper modules
            modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
            spaceBetween={0}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            centeredSlides={false}
            navigation={true}
            pagination={{ clickable: true }}
            className=""
            breakpoints={{
              960: {
                slidesPerView: 3,
              },

              580: {
                slidesPerView: 2,
              },
              140: {
                slidesPerView: 1,
              },
            }}
          >
            {Related.map((item) => (
              <SwiperSlide key={Related.id} className="p-12">
                <Card
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  catergory={item.catergory}
                  img={item.img}
                />
              </SwiperSlide>
            ))}
            ;
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;
