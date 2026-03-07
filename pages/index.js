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
              Apply to Top Universities Worldwide #0a77bf
            </p>
          </div> */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        <div className="flex justify-center bg-gradient-to-br from-[#181818] to-[#5c5c5c] md:px-20 my-32 max-w-[95%] md:max-w-[85%] rounded-3xl opacity-80 overflow-hidden white">
          <section className=" text-white dark:bg-gray-900 bg-gray bg-opacity-0">
            <div className="grid justify-items-center max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7 bg-gradient-to-br from-[#0a77bf] to-[#fd6d2b] bg-clip-text text-transparent">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-center md:text-left">Are You Ready to Study Abroad?</h1>
                <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-center md:text-left text-white">Discover Your Ideal Program and Country</p>
                {/* <button className="px-6 py-3 font-semibold text-white rounded-lg bg-gradient-to-r from-[#0a77bf] to-[#fd6d2b] shadow-[0_0_30px_rgba(10,119,191,0.3)] hover:shadow-[0_0_40px_rgba(253,109,43,0.5)] hover:scale-105 transition duration-300">
                  Apply Now
                </button> */}
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
        <section className="py-24 relative md:max-w-[85%] bg-gradient-to-br from-[#181818] to-[#5c5c5c] md:px-20 my-32 max-w-[95%] rounded-3xl opacity-80 overflow-hidden white">
          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex bg-gradient-to-br from-[#0a77bf] to-[#fd6d2b] bg-clip-text text-transparent">
                  <h2 className="text-4xl font-bold font-manrope leading-normal lg:text-start text-center">Who We Are</h2>
                  <div className="space-y-4 text-base font-normal leading-relaxed lg:text-start text-center text-white">

                    <p>
                      <span className="font-semibold text-white">BrightPath Study Consultant</span> is a professional education consultancy established in 2026 with the mission of helping students achieve their dream of studying abroad. We are a properly registered company, committed to providing reliable, transparent, and professional guidance to students who wish to pursue international education.
                    </p>

                    <p>
                      At BrightPath, we understand that choosing the right university, country, and program can be challenging. Our experienced team provides personalized counseling to help students select the best academic path according to their interests, qualifications, and career goals.
                    </p>

                    <p>
                      We guide students through every step of the study abroad journey from career counseling and university selection to application processing, documentation, and student visa guidance. Our goal is to simplify the process and make international education accessible for ambitious students.
                    </p>

                    <p>
                      We believe that every student deserves the opportunity to explore global education, develop new skills, and build a successful future. With our honest advice, professional support, and student-focused approach, BrightPath aims to become a trusted partner for students planning their international education journey.
                    </p>

                    <p className="font-medium">
                      At BrightPath, your dream of studying abroad is our commitment.
                    </p>

                  </div>
                </div>
                {/* <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                        <span className="px-1.5 text-white text-sm font-medium leading-6">Get Started</span>
                    </button> */}
              </div>
              <img className="lg:mx-0 mx-auto h-full rounded-3xl object-cover" src="/homepage/hero-section.jpg" alt="about Us image" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
