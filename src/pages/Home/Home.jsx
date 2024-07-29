import Catergory from "../logos";
import Banner from "./Banner";
import Products from "../../pages/Home/Products";
function Home() {
  return (
    <div className="bg-slate-200">
      <Banner />
      <Catergory />
      <Products />
    </div>
  );
}
export default Home;
