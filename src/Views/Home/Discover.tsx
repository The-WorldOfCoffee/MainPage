import "@public/font/font.css";
import { useTranslation } from "react-i18next";
import Template from "@/Views/Coffee's/Template";
import { useCoffee } from "@/Contexts/CoffeesContext";
import { useState, useEffect } from "react";
import { Coffee } from "@/types";
import { Skeleton } from "@chakra-ui/react";
import { animated, useInView } from "@react-spring/web";

export function Discover() {
  const { t } = useTranslation();
  const coffeeList = useCoffee();
  const [randomCoffee, setRandomCoffee] = useState<Coffee | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (coffeeList.length > 0) {
      const randomIndex = Math.floor(Math.random() * coffeeList.length);
      setRandomCoffee(coffeeList[randomIndex]);
      setIsLoading(false);
    }
  }, [coffeeList]);

  const [ref, springs] = useInView(
    () => ({
      delay: 1000,
      from: {
        opacity: 0,
        x: 300,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    {
      once: true,
    },
  );

  return (
    <section className="flex w-full mt-20 pt-40 gap-2 pb-32 md:flex-col lg:px-12 lg:py-16 sm:px-4 sm:mt-16 ph:mt-4 ph:py-8">
      <div className="flex flex-col flex-1 gap-2 md:w-full ">
        <h1 className="flex flex-col playfair header1">{t("discover_h1")}</h1>
        <article className="pt-4 headerSub playfair">{t("discover_sub")}</article>
      </div>
      {/* grid-cols-[20rem,25rem,20rem] lg:grid-cols-[18rem,18rem]  gap-4 lg:gap-2 sm:gap-1 sm:grid-cols-[10rem,10rem] ph:grid-cols-[8rem,8rem] */}
      <Skeleton className="flex justify-center mx-auto w-[20rem] lg:w-[18rem] sm:w-[10rem] self-start" isLoaded={!isLoading}>
        {randomCoffee ? (
          <Template
            title={randomCoffee.name}
            describe={randomCoffee.description}
            img={`images/${randomCoffee.name.replace(" ", "_")}.jpg`}
          ></Template>
        ) : (
          <Template title={""} describe={""} img=""></Template>
        )}
      </Skeleton>
      <animated.img
        ref={ref}
        style={springs}
        className="object-cover h-[15rem] mt-[18rem] absolute right-0 block lg:hidden !z-10"
        src="/images/animet2.png"
      />
    </section>
  );
}
