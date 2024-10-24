import navButton from "@/Components/Button/navButton";
import cup from "@public/AdSecion/cup.png";
import { useTranslation } from "react-i18next";

const AdSection = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-full AdSection flex  bg-black">
        <div className="overlay"></div>
        <div className="flex relative z-10 justify-between lg:flex-col w-full">
          <div className="flex flex-1 w-full h-full justify-center items-center flex-col">
            <div className="h-4/6 w-full px-16 gap-2 justify-evenly flex flex-col ">
              <h2 className="playfair lg:text-3xl text-6xl text-white font-bold">{t('AdSectionTitle')}</h2>
              <span className="text-white playfair font-normal ">
                {t('AdSectionDisc')}
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
