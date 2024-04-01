"use client";
import styles from "./styles.module.css";
import { NavBar } from "@/components/NavBar";

const AnkitPage = () => {
  const scroll = () => {
    window.scrollTo({
      top: window.innerHeight + 40,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.ankit}>
      <section className="w-full min-h-[100dvh] bg-[#CECECE]">
        <NavBar />
        <section className="min-h-[100dvh] flex flex-col items-center md:items-end justify-end mt-10 md:mt-0">
          <div className="text-center md:text-right">
            <h1 className="text-8xl md:text-[320px] md:leading-[0.75] text-bl">
              Vector
            </h1>
            <h3 className="text-5xl md:text-[170px] leading-none text-bl">
              Innovations
            </h3>
          </div>
          <svg
            onClick={() => scroll()}
            className="mt-10 md:hidden"
            width="16"
            height="37"
            viewBox="0 0 16 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.70711 35.7559C8.31658 36.1465 7.68342 36.1465 7.29289 35.7559L0.928932 29.392C0.538408 29.0014 0.538408 28.3683 0.928932 27.9778C1.31946 27.5872 1.95262 27.5872 2.34315 27.9778L8 33.6346L13.6569 27.9778C14.0474 27.5872 14.6805 27.5872 15.0711 27.9778C15.4616 28.3683 15.4616 29.0014 15.0711 29.392L8.70711 35.7559ZM9 0.0488281L9 35.0488H7L7 0.0488281L9 0.0488281Z"
              fill="black"
            />
          </svg>
        </section>

        <section className="p-5 md:p-8 my-28 md:my-48">
          <div className="bg-[#202020] rounded-[40px] px-4 py-8 md:px-10 md:py-16 text-[#989898] text-2xl md:text-[65px] leading-relaxed md:leading-[1.6]">
            <p>
              We are an <span className="text-white">Innovative software</span>{" "}
              product development company.
            </p>
            <p className="my-8">
              Vectoring since <span className="text-white">2022</span>
            </p>
            <p>
              We <span className="text-white">design</span> products practices,
              processes and architecture to enable our customer’s{" "}
              <span className="text-white">growth_</span>
            </p>
          </div>
        </section>

        <section className="flex flex-col items-center">
          <h1 className="text-6xl md:text-[100px] text-center text-bl">
            Vectoring with us
          </h1>
          <div className="relative max-w-max my-10 md:my-20">
            <img
              src="/vectorizing.svg"
              className="w-full max-w-2xl p-5 md:p-0"
              alt=""
            />
            <div className="max-w-[280px] text-right absolute italic text-[22px] top-36 -left-[18.5rem] hidden md:block">
              <p className="text-bl">
                Built with you in mind. Intuitive adaptive and customizable
                tools{" "}
              </p>
            </div>
            <div className="max-w-[240px] text-left absolute italic text-[22px] top-36 -right-[15.75rem] hidden md:block">
              <p className="text-bl">
                We believe in making a positive change we{" "}
              </p>
            </div>
            <div className="max-w-[240px] text-center absolute italic text-[22px] right-28 -bottom-[6.75rem] hidden md:block">
              <p className="text-bl">
                We believe in making a positive change we{" "}
              </p>
            </div>

            <div className="px-8 py-3 md:hidden">
              <h1 className="max-w-max border-b-2 border-black text-2xl pr-2">
                Build
              </h1>
              <p className="italic my-3 text-lg text-bl">
                Built with you in mind. Intuitive adaptive and customizable
                tools
              </p>
            </div>
            <div className="px-8 py-3 md:hidden">
              <h1 className="max-w-max border-b-2 border-black text-2xl pr-2">
                Customers
              </h1>
              <p className="italic my-3 text-lg text-bl">
                We believe in making a positive change we We believe in making a
                positive change we{" "}
              </p>
            </div>
            <div className="px-8 py-3 md:hidden">
              <h1 className="max-w-max border-b-2 border-black text-2xl pr-2">
                Build
              </h1>
              <p className="italic my-3 text-lg text-bl">
                Built with you in mind. We believe in making a positive change
              </p>
            </div>
          </div>
        </section>

        <section className="p-0 md:p-8 pb-0 md:pb-60">
          <div className="max-w-max text-right my-20 md:my-40 2xl:my-52 px-5 md:px-0">
            <h1 className="text-5xl md:text-[100px] text-bl">Projectile</h1>
            <p className="text-[22px] md:text-[2.5rem] leading-loose text-bl">
              We are on a mission
            </p>
          </div>

          <div className="md:max-w-max md:mx-auto relative  px-5 md:px-0">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-center gap-24 md:gap-10 w-full max-w-max mx-auto pb-4 border-black text-bl">
              <p className="text-2xl">
                <span className="text-9xl md:text-[8.5rem] font-bold">T</span>
                <span className="italic -ml-5">ransparent</span>
              </p>
              <p className="text-2xl">
                <span className="text-9xl md:text-[8.5rem] font-bold">E</span>
                <span className="italic -ml-1">xcellence</span>
              </p>
              <p className="text-2xl">
                <span className="text-9xl md:text-[8.5rem] font-bold">A</span>
                <span className="italic">ccountable</span>
              </p>
              <p className="text-2xl">
                <span className="text-9xl md:text-[8.5rem] font-bold">M</span>
                <span className="italic">otivate</span>
              </p>
              <p className="text-2xl">
                <span className="text-9xl md:text-[8.5rem] font-bold">S</span>
                <span className="italic -ml-1">ocial</span>
              </p>
            </div>
            <div className="h-0.5 bg-black w-full rounded-3xl"></div>
          </div>
          <div className="max-w-max mx-auto relative my-4 h-60 md:h-[350px] overflow-hidden">
            <svg
              width="3"
              viewBox="0 0 3 401"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1.04822"
                y1="400.048"
                x2="1.04822"
                y2="0.0478516"
                stroke="#202020"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="text-center mb-16 mt-5 text-bl">
            <h1 className="text-6xl md:text-[100px] leading-relaxed">
              Trajectory
            </h1>
            <h1 className="text-xl md:text-[62px] leading-relaxed md:leading-loose">
              EXPLORE. EXPERIMENT. BUILD.
            </h1>
            <h1 className="text-lg md:text-[62px] text-[#202020D9] leading-relaxed">
              We are a learning organization.
            </h1>
          </div>

          <div className="max-w-max mx-auto relative my-4 h-60 md:h-[350px] overflow-hidden">
            <svg
              width="3"
              viewBox="0 0 3 401"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1.04822"
                y1="400.048"
                x2="1.04822"
                y2="0.0478516"
                stroke="#202020"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="relative max-w-max mx-auto my-10 text-bl">
            <img
              src={"../../../public/assets/founders.png"}
              className="w-full max-w-[200px] md:max-w-md"
              alt=""
            />
            <div className="absolute top-10 md:top-20 -left-[5.5rem] md:-left-[55%] p-1 md:p-2.5">
              <svg
                className="h-9 absolute left-0 top-0 hidden md:block"
                viewBox="0 0 412 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M411.362 42.3274L353.191 1.94967L0.734947 1.94906"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
              <svg
                className="h-4 absolute left-0 top-0 md:hidden"
                viewBox="0 0 130 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M129.04 14.7049L116.008 0.685562L0.164502 0.687033"
                  stroke="black"
                />
              </svg>
              <h1 className="text-[12px] md:text-2xl">Mukundh Bhushan</h1>
              <h1 className="italic text-[10px] md:text-xl">Founder & CEO</h1>
            </div>
            <div className="absolute top-24 md:top-44 -right-20 md:-right-[43%] p-1 md:p-2.5">
              <svg
                className="h-9 absolute right-0 top-0 hidden md:block"
                viewBox="0 0 322 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.620446 42.1934L58.7916 1.81573L321.957 1.81619"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
              <svg
                className="h-4 absolute right-0 top-0 md:hidden"
                viewBox="0 0 109 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.06511 14.9686L14.097 0.949244L108.668 0.949233"
                  stroke="black"
                />
              </svg>

              <h1 className="text-[12px] md:text-2xl">A. Kasthuri</h1>
              <h1 className="italic text-[10px] md:text-xl">Co-Founder</h1>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default AnkitPage;
