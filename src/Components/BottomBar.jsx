import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const BottomBar = () => {
  return (
    <div
      id="bottom"
      className="w-full relative bottom-0   p-12 flex md:flex-row flex-col justify-around bg-slate-900 text-center gap-8 "
    >
      <div className="account">
        <h1 className="text-2xl text-orange-500 font-semibold">Account</h1>
        <ul className="text-white mt-3">
          <li>My Account</li>
          <li>Chech Returns</li>
          <li>Personal Details</li>
          <li>Invoices</li>
        </ul>
      </div>
      <div className="account">
        <h1 className="text-2xl text-orange-500 font-semibold">Company</h1>
        <ul className="text-white mt-3">
          <li>Privacy & Policy</li>
          <li>About Us</li>
          <li>Personal Details</li>
          <li>Terms & Conditins</li>
        </ul>
      </div>
      <div className="account">
        <h1 className="text-2xl text-orange-500 font-semibold">Account</h1>
        <ul className="text-white mt-3">
          <li>Chech Returns</li>
          <li>Personal Details</li>
          <li>Newsletter</li>
        </ul>
      </div>
      <div className="account">
        <h1 className="mb-8 text-center text-orange-500">Follow Us</h1>
        <ul className="flex justify-between">
          <li className="p-2 mx-2">
            <FaFacebook className="text-blue-600 hover:scale-125 duration-1000 ease-in-out cursor-pointer text-2xl" />
          </li>
          <li className="p-2 mx-2">
            <FaWhatsapp className="text-green-600 hover:scale-125duration-1000 ease-in-out cursor-pointer text-2xl" />
          </li>
          <li className="p-2 mx-2">
            <FaTwitter className="text-blue-800 hover:scale-125 duration-1000 ease-in-out cursor-pointer text-2xl" />
          </li>
          <li className="p-2 mx-2">
            <FaInstagram className="text-pink-600 text-2xl hover:scale-125 duration-1000 ease-in-out cursor-pointer" />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default BottomBar;
