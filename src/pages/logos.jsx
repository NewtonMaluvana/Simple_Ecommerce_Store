import img from "/images/jordan-logo_2x.png";
import img2 from "/images/SamsungLogo.png";
import img3 from "/images/Sony-Logo.png";
import img4 from "/images/Huawei_logo_icon_170010.png";
import img5 from "/images/AppleLogo.png";
function Catergory() {
  const logo = [
    {
      id: 1,
      img: img,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img4,
    },
  ];
  return (
    <div className=" max-w-screen-2xl container mx-auto ">
      {/* brand logos */}
      <div className="logos flex justify-around flex-wrap-reverse py-2 items-center   gap-3">
        {logo.map(({ id, img }) => (
          <div key={id} className="hover:scale-90 duration-1000 ease-in-out">
            <img src={img} width={80}></img>
          </div>
        ))}
      </div>

      {/* catergory section */}
    </div>
  );
}
export default Catergory;
