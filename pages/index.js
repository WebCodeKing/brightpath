import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
    <div className="flex-col justify-items-center mx-w-[100%]">
      <div className="relative h-screen w-full overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover opacity-50"
        >
          <source
            src="/videos/home/hero-section.mp4"
            type="video/mp4"
          />
        </video>
        <Image
          src="/images/home/brightpath-logo.png"
          width={1920}
          height={1080}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] z-10 opacity-80"
          alt="Home Page Image"
          priority
        />
        {/* <div className="relative z-10 text-white text-center pt-40">
            <h1 className="text-5xl font-bold">Study Abroad With Us</h1>
            <p className="mt-4 text-xl">
              Apply to Top Universities Worldwide
            </p>
          </div> */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      <div className="flex justify-center bg-gradient-to-br from-[#181818] to-[#5c5c5c] md:px-20 my-32 max-w-[95%] md:max-w-[85%] rounded-3xl opacity-80 overflow-hidden white">
        <section className=" text-white dark:bg-gray-900 bg-gray bg-opacity-0">
          <div className="grid justify-items-center max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-center md:text-left">Are You Ready to Study Abroad?</h1>
              <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-center md:text-left">Discover Your Ideal Program and Country</p>
              {/* <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Speak to Sales
              </a> */}
            </div>
            <div className=" lg:mt-0 lg:col-span-5 lg:flex justify-center sm:text-center sm:mt-16 opacity-90">
              <img className="rounded-3xl" src="/images/home/hero-section.jpg" alt="Hero Section" />
            </div>
          </div>
        </section>
      </div>
      </div>
    </>
  );
}
