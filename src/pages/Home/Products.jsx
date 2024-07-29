import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import Card from "../../Components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// import Card from "../src/Components/Card";
function Products() {
  const [products, setproducts] = useState([]);
  const [product, setproduct] = useState([]);
  const [Filterd, setFilterd] = useState([]);
  const [Related, setRelated] = useState([]);
  const [Options, setOption] = useState("default");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        const related = data.filter((item) => item.Status == "best seller");
        setRelated(related);
        setproducts(data);
        setFilterd(data);
        console.log(data);
      } catch (error) {}
    };

    fetchData();
  }, []);

  const filterItem = (catergor) => {
    const filterd =
      catergor === "all"
        ? products
        : products.filter((item) => item.catergory === catergor);
    setFilterd(filterd);
    setproduct(filterd);
    setCatergory(catergor);
  };
  const showAll = () => {
    setFilterd(products);
    setCatergory("all");
  };

  const reoder = (filter) => {
    setOption(filter);
    let Sort = [...Filterd];

    if (filter == "A-Z") {
      Sort.sort((a, b) => a.title.localeCompare(b.title));
    } else if (filter == "Z-A") {
      Sort.sort((a, b) => b.title.localeCompare(a.title));
    } else if (filter == "High-Low") {
      Sort.sort((a, b) => b.price - a.price);
    } else if (filter == "Low-High") {
      Sort.sort((a, b) => a.price - b.price);
    } else if (filter == "default") {
    }

    setFilterd(Sort);
  };
  return (
    <div className="max-w-screen-2xl mx-auto xl:p-2" id="product">
      <h1 className="title"></h1>
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <div className="hidden md:block px-4  flex flex-col flex-wrap justify-start gap-4 w-6/12 items-center md:flex-row text-lg text-orange-400 ">
          <button onClick={() => showAll()} className="hover:text-black">
            All Products |
          </button>
          <button
            onClick={() => filterItem("Clothing")}
            className="hover:text-black "
          >
            Clothing |
          </button>
          <button
            onClick={() => filterItem("Shoe")}
            className="hover:text-black"
          >
            Shoes |
          </button>
          <button
            onClick={() => filterItem("Electronic")}
            className="hover:text-black"
          >
            Electronics |
          </button>
        </div>

        <div className="flex justify-end mb-4 rounded-md">
          <div className="bg-slate-900  p-2">
            <FaFilter className="text-white" />
          </div>
          <select
            id="sort"
            onChange={(e) => reoder(e.target.value)}
            className="bg-slate-900 text-white p-1 rounded-sm"
            value={Options}
          >
            <option value="default">Default</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="Low-High">Low-High</option>
            <option value="High-Low">High-Low</option>
          </select>
        </div>
      </div>
      <div className=" justify-center grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-4 px-2">
        {Filterd.map(({ id, title, price, catergory, img }) => (
          <Card
            id={id}
            title={title}
            price={price}
            catergory={catergory}
            img={img}
          />
        ))}
      </div>
      <div className="related-product mt-12">
        <div className="text-center text-3xl font-bold">Best Seller</div>
        <div className=" p-2">
          <Swiper
            // install Swiper modules
            modules={[Autoplay, Navigation, Pagination]}
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
              <SwiperSlide key={Related.id} className="p-4">
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
}
export default Products;
