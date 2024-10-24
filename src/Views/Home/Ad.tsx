import navButton from "@/Components/Button/navButton";
import cup from "@public/AdSecion/cup.png";

const AdSection = () => {
  return (
    <>
      <div className="w-full AdSection flex  bg-black">
        <div className="overlay"></div>
        <div className="flex relative z-10 justify-between lg:flex-col w-full">
          <div className="flex flex-1 w-full h-full justify-center items-center flex-col">
            <div className="h-4/6 w-full px-16 gap-2 justify-evenly flex flex-col ">
              <h2 className="playfair lg:text-3xl text-6xl text-white font-bold">Get a chance to have an Amazing morning</h2>
              <span className="text-white playfair font-normal ">
                We are giving you are one time opportunity to experience a better life with coffee.
              </span>
              <div>{navButton("Order Now")}</div>
            </div>
          </div>
          <div className="flex coffeecup flex-1 justify-center items-center w-full h-full ">
            <img className="lg:w-1/4 sm:w-1/2" src={cup} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdSection;
