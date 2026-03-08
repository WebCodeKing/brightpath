import React, { useEffect, useState } from 'react'
import Image from "next/image";
import 'flowbite';
import { initFlowbite } from 'flowbite';

const Faq = () => {
  useEffect(() => {
    initFlowbite();
  }, []);
    // useEffect(() => {
    //     // Just import Flowbite; no need for module.init()
    //     import("flowbite");
    //   }, []);
    // useEffect(() => {
    //   import('flowbite/dist/flowbite.min.js').then((module) => {
    //     if (module.default) {
    //       module.default();
    //     }
    //   });
    // }, []);
    // useEffect(() => {
    //     console.log("hello");
    //   // Import Flowbite and manually initialize it
    //   import('flowbite').then(() => {
    //     if (typeof window !== 'undefined' && window.Flowbite) {
    //       window.Flowbite.init(); // Manually trigger initialization
    //     }
    //   });
    // }, []);
      // useEffect(() => {
      //   const initializeFlowbite = async () => {
      //     try {
      //       await import("flowbite/dist/flowbite.min.js");
    
      //       if (typeof window !== "undefined" && window.Flowbite) {
      //         console.log("Flowbite is ready. Waiting for user interaction...");
      //       }
      //     } catch (error) {
      //       console.error("Error loading Flowbite:", error);
      //     }
      //   };
    
      //   initializeFlowbite();
    
      //   // Attach event listener to initialize Flowbite on user interaction
      //   const handleUserInteraction = () => {
      //     if (typeof window !== "undefined" && window.Flowbite) {
      //       window.Flowbite.init();
      //       console.log("Flowbite initialized after user interaction!");
      //     }
      //     document.removeEventListener("click", handleUserInteraction); // Remove listener after first use
      //   };
    
      //   document.addEventListener("click", handleUserInteraction);
        
      //   return () => {
      //     document.removeEventListener("click", handleUserInteraction);
      //   };
      // }, []);
      // useEffect(() => {
      //   console.log("useeffect");

      //   if (typeof window !== "undefined") {
      //     console.log("Checking if Flowbite is available...");
    
      //     const checkFlowbite = setInterval(() => {
      //       if (window.Flowbite && typeof window.Flowbite.init === "function") {
      //         console.log("✅ Flowbite found, initializing...");
      //         window.Flowbite.init();
      //         clearInterval(checkFlowbite); // Stop checking once initialized
      //       } else {
      //         console.warn("⚠️ Flowbite is still not ready. Retrying...");
      //       }
      //     }, 500); // Check every 500ms
    
      //     // Cleanup function to prevent memory leaks
      //     return () => clearInterval(checkFlowbite);
      //   }
      // }, []);
      
      

    
  return (
    <>
    {/* <button onClick={() => window.location.reload()}>Reload Page</button> */}

    <div className='flex-col items-center justify-center justify-items-center'>
     <div className='relative'>
      <Image
                  src="/FAQ/FAQ.webp"
                  width={1920}
                  height={1080}
                  className=""
                  alt="Home Page Image"
                  priority
                  />
                  <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-white to-transparent"></div>
                  </div>
                  {/* <div className='w-[100%] h-[10px] bg-black'></div> */}
    <div className='w-90% md:w-[75%] h-[100px] mt-[60px] md:mt-[150px] text-center'><strong className='text-gray-300 text-[40px] md:text-[70px]'>GENERAL QUESTIONS</strong></div>
<div className='w-[90%] md:w-[75%] my-[80px] mx-auto' id="accordion-collapse" data-accordion="collapse">
  <h2 id="accordion-collapse-heading-1">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-300 border border-b-0 border-gray-400 rounded-t-xl focus:ring-4 focus:ring-gray-400 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-800 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
      <span>1. What services does BrightPath provide?</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
    <div className="p-5 border border-b-0 border-gray-400 dark:border-gray-700 dark:bg-gray-900">
      <p className="mb-2 text-gray-400 dark:text-gray-400">BrightPath offers comprehensive study abroad guidance, including university and program selection, application support, visa assistance, and continuous student support throughout your international education journey.</p>
      {/* <p className="text-gray-300 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p> */}
    </div>
  </div>
  <h2 id="accordion-collapse-heading-2">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-300 border border-b-0 border-gray-400 focus:ring-4 focus:ring-gray-400 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-800 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
      <span>2. Which countries can I study in with BrightPath?</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
    <div className="p-5 border border-b-0 border-gray-400 dark:border-gray-700">
      <p className="mb-2 text-gray-400 dark:text-gray-400">We provide guidance for top study destinations worldwide, including the Latvia, Lithuania, Slovenia, Croatia, Romania, and many more, based on your academic interests and career goals.</p>
      {/* <p className="text-gray-300 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p> */}
    </div>
  </div>
  <h2 id="accordion-collapse-heading-3">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-300 border border-gray-400 focus:ring-4 focus:ring-gray-400 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-800 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span>3. How does the application process work?</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
    <div className="p-5 border border-t-0 border-gray-400 dark:border-gray-700">
    <div id="elementor-tab-content-1473" 
     className="text-gray-400 dark:text-gray-400 space-y-8 elementor-tab-content elementor-clearfix elementor-active" 
     data-tab="3" 
     role="region" 
     aria-labelledby="elementor-tab-title-1473">
  
  <p>Our team helps you choose the right university and program, prepares your application documents, reviews them for accuracy, and ensures timely submission according to each university’s requirements.</p>

</div>

      {/* <p className="mb-2 text-gray-300 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p> */}
      {/* <p className="mb-2 text-gray-300 dark:text-gray-400">Learn more about these technologies:</p>
      <ul className="ps-5 text-gray-300 list-disc dark:text-gray-400">
        <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
      </ul> */}
    </div>
  </div>
  <h2 id="accordion-collapse-heading-4">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-300 border border-gray-400 focus:ring-4 focus:ring-gray-400 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-800 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-4" aria-expanded="false" aria-controls="accordion-collapse-body-4">
      <span>4. Can BrightPath help with scholarships and funding?</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-4" className="hidden" aria-labelledby="accordion-collapse-heading-3">
    <div className="p-5 border border-t-0 border-gray-400 dark:border-gray-700">
    <div 
  id="elementor-tab-content-1474" 
  className="elementor-tab-content elementor-clearfix elementor-active space-y-4 text-gray-400 dark:text-gray-400" 
  data-tab="4" 
  role="region" 
  aria-labelledby="elementor-tab-title-1474"
>
  <p>
    Yes! We guide students in identifying scholarship opportunities, eligibility requirements, and help with application strategies to maximize your chances of funding.
  </p>
</div>


      {/* <p className="mb-2 text-gray-300 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p> */}
      {/* <p className="mb-2 text-gray-300 dark:text-gray-400">Learn more about these technologies:</p>
      <ul className="ps-5 text-gray-300 list-disc dark:text-gray-400">
        <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
      </ul> */}
    </div>
  </div>
  <h2 id="accordion-collapse-heading-5">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-300 border border-gray-400 focus:ring-4 focus:ring-gray-400 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-800 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-5" aria-expanded="false" aria-controls="accordion-collapse-body-5">
      <span>5. Do you provide visa assistance??</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-5" className="hidden" aria-labelledby="accordion-collapse-heading-5">
    <div className="p-5 border border-t-0 border-gray-400 dark:border-gray-700">
    <div id="elementor-tab-content-1475" className="tab-content space-y-4 text-gray-400 dark:text-gray-400" data-tab="5" role="region" aria-labelledby="elementor-tab-title-1475">
        <p>Absolutely. BrightPath guides students through visa application processes, documentation, and interview preparation to ensure a smooth visa approval experience.</p>
    </div>

      {/* <p className="mb-2 text-gray-300 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p> */}
      {/* <p className="mb-2 text-gray-300 dark:text-gray-400">Learn more about these technologies:</p>
      <ul className="ps-5 text-gray-300 list-disc dark:text-gray-400">
        <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
      </ul> */}
    </div>
  </div>
  <h2 id="accordion-collapse-heading-6">
    <button type="button" className="flex items-center justify-start w-full p-5 font-medium rtl:text-right text-gray-300 border border-gray-400 focus:ring-4 focus:ring-gray-400 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-800 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-6" aria-expanded="false" aria-controls="accordion-collapse-body-6">
      <span className='text-left w-full'>6. Is BrightPath a registered and trustworthy consultancy?</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-6" className="hidden" aria-labelledby="accordion-collapse-heading-6">
    <div className="p-5 border border-t-0 border-gray-400 dark:border-gray-700">
    <div id="elementor-tab-content-1473" 
     className="space-y-8 elementor-tab-content elementor-clearfix elementor-active text-gray-400 dark:text-gray-400" 
     data-tab="6" 
     role="region" 
     aria-labelledby="elementor-tab-title-1473">
  
  <p>Yes, BrightPath is a properly registered consultancy established in 2026. We prioritize honesty, transparency, and student-focused guidance.</p>
</div>

      {/* <p className="mb-2 text-gray-300 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p> */}
      {/* <p className="mb-2 text-gray-300 dark:text-gray-400">Learn more about these technologies:</p>
      <ul className="ps-5 text-gray-300 list-disc dark:text-gray-400">
        <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
      </ul> */}
    </div>
  </div>
  <h2 id="accordion-collapse-heading-7">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-300 border border-gray-400 focus:ring-4 focus:ring-gray-400 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-800 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-7" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span className=''>7. Will I get support after admission?</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-7" className="hidden" aria-labelledby="accordion-collapse-heading-7">
    <div className="p-5 border border-t-0 border-gray-400 dark:border-gray-700">
    <div id="elementor-tab-content-1477" 
      class="elementor-tab-content elementor-clearfix text-gray-400 dark:text-gray-400" 
      data-tab="7" 
      role="region" 
      aria-labelledby="elementor-tab-title-1477">

      <p className='leading-loose'>
        Yes, our support does not end after admission. BrightPath continues to guide and assist students with queries and challenges throughout their study abroad journey.
      </p>

    </div>

      {/* <p className="mb-2 text-gray-300 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p> */}
      {/* <p className="mb-2 text-gray-300 dark:text-gray-400">Learn more about these technologies:</p>
      <ul className="ps-5 text-gray-300 list-disc dark:text-gray-400">
        <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
      </ul> */}
    </div>
  </div>
  <h2 id="accordion-collapse-heading-8">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-300 border border-gray-400 focus:ring-4 focus:ring-gray-400 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-800 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-8" aria-expanded="false" aria-controls="accordion-collapse-body-8">
      <span className='text-left w-full'>8. How can I contact BrightPath for personalized guidance?</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-8" className="hidden" aria-labelledby="accordion-collapse-heading-8">
    <div className="p-5 border border-t-0 border-gray-400 dark:border-gray-700">
    <div id="elementor-tab-content-1478" 
     class="elementor-tab-content elementor-clearfix elementor-active space-y-4 p-4 text-gray-400 dark:text-gray-400" 
     data-tab="8" 
     role="region" 
     aria-labelledby="elementor-tab-title-1478">
  <p class="leading-relaxed">
    You can reach us via our website contact form, email, or phone. Our dedicated team is ready to provide one-on-one counseling to help you achieve your study abroad goals.
  </p>
</div>


      {/* <p className="mb-2 text-gray-300 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p> */}
      {/* <p className="mb-2 text-gray-300 dark:text-gray-400">Learn more about these technologies:</p>
      <ul className="ps-5 text-gray-300 list-disc dark:text-gray-400">
        <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
      </ul> */}
    </div>
  </div>
</div> 
    </div>
    </>
  )
}

export default Faq