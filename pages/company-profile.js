import React from 'react'
import { Building2, ShieldCheck, Handshake, Headphones, GraduationCap, UserCheck, BookOpen } from "lucide-react";
import Image from "next/image";
import {
  Briefcase,
  Globe,
  FileText,
  Building,
  Bus,
  Users
} from "lucide-react";
import Link from 'next/link';

const CompanyProfile = () => {
  return (
    <>
      <div className='flex-col justify-items-center mx-w-[100%]'>
        <div className="relative h-screen w-full overflow-hidden">

          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover opacity-100"
          >
            <source
              src="/videos/company-profile/hero-section.mp4"
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
        <div className="shadow-[inset_0_0_800px_rgba(255,255,255,0.3)] py-10 my-20 sm:px-10 max-w-[95%] md:max-w-[85%] rounded-4xl">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid lg:grid-cols-2 justify-center items-center gap-x-12 gap-y-16">
              <div className="max-w-3xl max-lg:mx-auto max-lg:text-center">
                <h1 className="bg-gradient-to-r from-[#0a77bf] to-[#fd6d2b] bg-clip-text text-transparent md:text-5xl text-4xl font-bold !leading-tight">Brightpath International Study Consultant Pvt Ltd
                  {/* <span className="bg-gradient-to-r from-[#ce9733] to-[#8a641f] bg-clip-text text-transparent"></span> */}


                </h1>
                <p className="text-slate-600 text-base leading-relaxed mt-6">
                  <p className="text-gray-400 leading-relaxed">
                    BrightPath Study Consultant is a professional education consultancy established in 2026 with the goal of helping students achieve their dream of studying abroad. As a properly registered and student-focused consultancy, BrightPath is committed to providing reliable, transparent, and professional guidance to students who wish to pursue international education.

                    Our team understands that choosing the right university, program, and country is one of the most important decisions for a student's future. That is why we offer personalized counseling to help students select the best academic path based on their interests, qualifications, and long-term career goals.

                    At BrightPath, we support students through every stage of the study abroad journey. From university selection and admission guidance to application preparation, documentation support, and student visa assistance, we aim to make the entire process simple and stress-free. We also provide pre-departure guidance to help students prepare for their new academic and cultural environment.

                    Our mission is to make international education accessible and achievable for ambitious students by offering honest advice, professional support, and continuous guidance. At BrightPath, we believe that global education opens the door to new opportunities, personal growth, and a successful future.
                  </p></p>

                {/* <div className="mt-12 flex flex-wrap gap-6 max-lg:justify-center">
              <button type='button'
                className="bg-indigo-600 hover:bg-indigo-700 border border-indigo-700 transition-all text-base text-white font-medium rounded-full px-6 py-3 cursor-pointer outline-0">Try It for Free</button>
              <button type='button'
                className="bg-transparent hover:bg-slate-100 border border-indigo-700 transition-all text-base text-slate-900 font-medium rounded-full px-6 py-3 cursor-pointer outline-0">See How It Works</button>
            </div> */}
              </div>
              <div className="relative rounded-3xl overflow-hidden h-full">
                <img src="/images/company-profile/brightpath.jpg" alt="app-img"
                  className="w-full h-full object-cover object-top lg:absolute lg:right-0 lg:top-0 lg:bottom-0" />
              </div>
            </div>
          </div>
        </div>
        {/* <section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-6 text-gray-800">
      About Al-Mashood Munazzam Pvt Ltd
    </h2>

    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
      Al-Mashood Munazzam Pvt Ltd, established in 2024, is a trusted group of
      31 Hajj companies based in Pakistan, specializing in organized and
      reliable Hajj and Umrah arrangements. We are committed to providing a
      seamless and spiritually fulfilling journey for every pilgrim.
    </p>
  </div>
</section> */}
        <section className="shadow-[inset_0_0_800px_rgba(255,255,255,0.3)] py-24 md:w-[85%] rounded-4xl">
          <div className="max-w-6xl mx-auto px-6">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-[#0a77bf] to-[#fd6d2b] bg-clip-text text-transparent mb-12">
              Vision & Mission
            </h2>

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-8">

              {/* Vision */}
              <div className="shadow-[inset_0_0_800px_rgba(255,255,255,0.1)] p-8 rounded-4xl">
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#0a77bf] to-[#fd6d2b] bg-clip-text text-transparent mb-4">
                  Our Vision
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Our vision is to become a trusted and recognized study abroad consultancy that empowers students to achieve global education and successful careers. BrightPath aims to guide students toward the best international opportunities by providing professional advice, transparent processes, and continuous support. We strive to inspire students to explore the world through education and build a brighter future through knowledge, experience, and global exposure.
                </p>
              </div>

              {/* Mission */}
              <div className="shadow-[inset_0_0_800px_rgba(255,255,255,0.1)] p-8 rounded-4xl">
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#0a77bf] to-[#fd6d2b] bg-clip-text text-transparent mb-4">
                  Our Mission
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Our mission is to guide and support students in achieving their dream of studying abroad by providing reliable, transparent, and professional consultancy services. BrightPath is committed to helping students choose the right universities and programs while assisting them through every step of the admission and visa process. We strive to build lasting relationships with students and their families by delivering honest advice, personalized counseling, and high-quality support throughout their international education journey.
                </p>
              </div>

            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="shadow-[inset_0_0_800px_rgba(255,255,255,0.3)] max-w-[95%] md:max-w-[85%] mx-auto p-26 rounded-4xl">

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-[#0a77bf] to-[#fd6d2b] bg-clip-text text-transparent mb-12">
              Company Background & History
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">

              {/* Left Side - Text */}
              <div>
                <p className="text-gray-400 leading-relaxed mb-4">
                  BrightPath Study Consultant was established in 2026 with the vision of helping students achieve their dream of studying abroad. Recognizing the growing demand for quality international education, BrightPath was founded to provide reliable guidance and professional consultancy services to students who aspire to pursue higher education in leading institutions around the world. From the beginning, the company has focused on building trust by offering transparent processes, honest advice, and student-focused support.
                </p>

                <p className="text-gray-400 leading-relaxed">
                  Since its establishment, BrightPath has been dedicated to assisting students at every stage of their international education journey. From university selection and admission guidance to application preparation and student visa support, the company strives to make the study abroad process simple and accessible. Through personalized counseling and continuous guidance, BrightPath aims to help students take confident steps toward a successful global future.
                </p>
              </div>

              {/* Right Side - Highlight Box */}
              <div className="p-10 rounded-2xl shadow-sm bg-gradient-to-br from-[#181818] to-[#5c5c5c]">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-[#0a77bf] to-[#fd6d2b] bg-clip-text text-transparent mb-6">
                  Strategic Focus
                </h3>

                <ul className="space-y-4 text-gray-400">
                  <li>
                    Providing reliable and transparent guidance to students who wish to pursue international education.
                  </li>
                  <li>
                    Building strong partnerships with reputable universities and educational institutions worldwide.
                  </li>
                  <li>
                    Supporting students through every stage of the study abroad process, including counseling, admission, and visa assistance.
                  </li>
                  <li>
                    Delivering personalized counseling that helps students choose the right academic path and career opportunities.
                  </li>
                  <li>
                    Maintaining high standards of professionalism, integrity, and student-focused service.
                  </li>
                  <li>
                    Continuously improving our services to meet the evolving needs of students seeking global education opportunities.
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>
        <section className="shadow-[inset_0_0_800px_rgba(255,255,255,0.3)] max-w-[95%] p-20 md:max-w-[85%] rounded-4xl my-32">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section Title */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0a77bf] to-[#fd6d2b] bg-clip-text text-transparent">
                Our Services
              </h2>
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                BrightPath provides a wide range of services to guide students throughout their study abroad journey, from choosing the right university to visa assistance and continuous support.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Service 1 */}
              <div className="transition duration-300 hover:[box-shadow:inset_0_0_50px_rgba(255,255,255,0.3)] flex flex-col items-center p-6 rounded-xl text-[#0a77bf] hover:text-[#fd6d2b] border border-gray-700 hover:border-[#fd6d2b] transition duration-300 ">
                <GraduationCap className="mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2 text-white">Study Abroad Counseling</h3>
                <p className="text-gray-400 text-center text-sm">
                  Personalized guidance to help students choose the best country, university, and program according to their goals.
                </p>
              </div>

              {/* Service 2 */}
              <div className="transition duration-300 hover:[box-shadow:inset_0_0_50px_rgba(255,255,255,0.3)] flex flex-col items-center p-6 rounded-xl text-[#0a77bf] hover:text-[#fd6d2b] border border-gray-700 hover:border-[#fd6d2b] transition duration-300">
                <Globe className="mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2 text-white text-center">University & Program Selection</h3>
                <p className="text-gray-400 text-center text-sm">
                  Assistance in selecting top-ranked universities and programs worldwide that align with student interests.
                </p>
              </div>

              {/* Service 3 */}
              <div className="transition duration-300 hover:[box-shadow:inset_0_0_50px_rgba(255,255,255,0.3)] flex flex-col items-center p-6 rounded-xl text-[#0a77bf] hover:text-[#fd6d2b] border border-gray-700 hover:border-[#fd6d2b] transition duration-300">
                <FileText className="mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2 text-white">Application & Documentation</h3>
                <p className="text-gray-400 text-center text-sm">
                  Support with preparing applications, submitting documents, and ensuring everything meets university requirements.
                </p>
              </div>

              {/* Service 4 */}
              <div className="transition duration-300 hover:[box-shadow:inset_0_0_50px_rgba(255,255,255,0.3)] flex flex-col items-center p-6 rounded-xl text-[#0a77bf] hover:text-[#fd6d2b] border border-gray-700 hover:border-[#fd6d2b] transition duration-300">
                <UserCheck className="mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2 text-white">Visa Guidance</h3>
                <p className="text-gray-400 text-center text-sm">
                  Step-by-step support for student visa applications, interview preparation, and proper documentation.
                </p>
              </div>

              {/* Service 5 */}
              <div className="transition duration-300 hover:[box-shadow:inset_0_0_50px_rgba(255,255,255,0.3)] flex flex-col items-center p-6 rounded-xl  text-[#0a77bf] hover:text-[#fd6d2b] border border-gray-700 hover:border-[#fd6d2b] transition duration-300">
                <ShieldCheck className="mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2 text-white">Continuous Student Support</h3>
                <p className="text-gray-400 text-center text-sm">
                  BrightPath provides ongoing assistance to students even after admission, ensuring their study abroad journey is smooth and stress-free.
                </p>

              </div>
              {/* Service 6 */}
              <div className="transition duration-300 hover:[box-shadow:inset_0_0_50px_rgba(255,255,255,0.3)] flex flex-col items-center p-6 rounded-xl text-[#0a77bf] hover:text-[#fd6d2b] border border-gray-700 hover:border-[#fd6d2b] transition duration-300">
                <BookOpen className="mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2 text-white">Scholarship Guidance</h3>
                <p className="text-gray-400 text-center text-sm">
                  BrightPath helps students explore available scholarships and financial aid opportunities, making international education more affordable and accessible.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="py-20 bg-white"> */}
        {/* <div className="max-w-6xl mx-auto px-6"> */}

        {/* Section Heading */}
        {/* <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Services Overview
            </h2>

            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              While Almashood Munazzam Pvt Ltd itself does not directly provide Hajj and Umrah packages,
              we serve as a strategic alliance of 33 trusted Hajj companies. This structure allows
              us to manage multiple categories economy, middle, and luxury ensuring that every
              pilgrim receives services best suited to their requirements. By coordinating and uniting
              individual companies, we make pilgrimage arrangements smoother, more organized, and
              highly reliable.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">

              <div className="flex flex-col items-center bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
                <Briefcase className="mb-5 w-8 h-8 text-[#ce9733]" />
                <h3 className="text-xl font-semibold mb-3 text-[#ce9733]">
                  Hajj Packages</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Diverse Hajj packages managed collectively by our network, covering all categories
                  for a smooth pilgrimage experience.
                </p>
              </div>

              <div className="flex flex-col items-center bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
                <Globe className="mb-5 w-8 h-8 text-[#ce9733]" />
                <h3 className="text-xl font-semibold mb-3 text-[#ce9733]">Umrah Services</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Coordinated Umrah arrangements across all partner companies, tailored to each
                  pilgrim’s preference and budget.
                </p>
              </div>

              <div className="flex flex-col items-center bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
                <FileText className="mb-5 w-8 h-8 text-[#ce9733]" />
                <h3 className="text-xl font-semibold mb-3 text-[#ce9733]">Visa Assistance</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Smooth visa processing support through our network, ensuring fast and hassle-free
                  approval.
                </p>
              </div>

              <div className="flex flex-col items-center bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
                <Building className="mb-5 w-8 h-8 text-[#ce9733]" />
                <h3 className="text-xl font-semibold mb-3 text-[#ce9733]">Accommodation</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Comfortable and varied accommodation options across partner companies. */}
        {/* , 
          matching A/B/C/D categories. */}
        {/* </p> */}
        {/* </div>

              <div className="flex flex-col items-center bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
                <Bus className="mb-5 w-8 h-8 text-[#ce9733]" />
                <h3 className="text-xl font-semibold mb-3 text-[#ce9733]">Transport</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Organized transport services coordinated among the companies for a seamless
                  travel experience.
                </p>
              </div>

              <div className="flex flex-col items-center bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
                <Users className="mb-5 w-8 h-8 text-[#ce9733]" />
                <h3 className="text-xl font-semibold mb-3 text-[#ce9733]">Guidance Support</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Dedicated guidance and support at every step, leveraging the collective
                  expertise of our group network.
                </p>
              </div>

            </div> */}

        {/* Optional Link to Full Services Page */}
        {/* <div className="text-center mt-12">
              <Link id="company" legacyBehavior href="/affiliate-companies#Company"><a> */}
        {/* <li className="hover:text-gray-200">Affiliate Companies
              </li> */}
        {/* <li className="inline-block bg-[#ce9733] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#b17c29] transition duration-300">Explore Full Services
                </li>
              </a></Link> */}
        {/* <a 
        href="/services" 
        className="inline-block bg-[#ce9733] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#b17c29] transition duration-300"
      >
        Explore Full Services
      </a> */}
        {/* </div>

          </div>
        </section> */}
        {/* <section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6"> */}

        {/* Section Heading */}
        {/* <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
      Legal & Registration Information
    </h2> */}

        {/* <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
      Almashood Munazzam Pvt Ltd operates as a fully registered and compliant group of Hajj companies. 
      Our structured network ensures that all services provided through our partner companies meet 
      government regulations, licensing requirements, and industry standards. This ensures safety, 
      legality, and trustworthiness for every pilgrim we serve.
    </p> */}

        {/* Grid of Legal Info */}
        {/* <div className="grid md:grid-cols-2 gap-8 text-gray-700"> */}

        {/* Card 1 */}
        {/* <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold text-[#ce9733] mb-4">Registration Number</h3>
        <p className="text-gray-600 leading-relaxed">
          Officially registered under the corporate laws of Pakistan. Each company in the group maintains 
          valid registration numbers with regulatory authorities.
        </p>
      </div> */}

        {/* Card 2 */}
        {/* <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold text-[#ce9733] mb-4">Government Approvals</h3>
        <p className="text-gray-600 leading-relaxed">
          All partner companies have obtained necessary government approvals for Hajj and Umrah operations, 
          ensuring compliance with national travel regulations.
        </p>
      </div> */}

        {/* Card 3 */}
        {/* <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold text-[#ce9733] mb-4">Ministry Affiliation</h3>
        <p className="text-gray-600 leading-relaxed">
          Affiliated with the Ministry of Religious Affairs for Hajj management in Pakistan, guaranteeing 
          alignment with official pilgrimage guidelines.
        </p>
      </div> */}

        {/* Card 4 */}
        {/* <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold text-[#ce9733] mb-4">Licensing Details</h3>
        <p className="text-gray-600 leading-relaxed">
          Each company in the Almashood group operates under valid travel and tourism licenses, 
          ensuring full legal compliance and accountability.
        </p>
      </div>

    </div> */}

        {/* Optional note at bottom */}
        {/* <p className="text-center text-gray-500 mt-12 text-sm max-w-2xl mx-auto">
      All legal documents and licenses are available upon request for verification. Our group ensures 
      transparent and lawful operation at every level.
    </p>

  </div>
</section> */}
        {/* 
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6"> */}

        {/* Section Heading */}
        {/* <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
      Management & Leadership
    </h2> */}

        {/* <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
      Our leadership team combines strong industry knowledge and operational expertise. 
      Each member is committed to ensuring a smooth, reliable, and high-quality pilgrimage experience 
      through our network of 31 Hajj companies.
    </p> */}

        {/* Grid of Leaders */}
        {/* <div className="grid md:grid-cols-2 gap-8 text-gray-700">

      {/* CEO / Director */}
        {/* <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold text-[#ce9733] mb-4">CEO / Director</h3>
        <p className="text-gray-600 leading-relaxed mb-2">
          <strong>Mr. Muhammad Usman</strong> – Visionary leader with expertise in pilgrimage management and corporate coordination.
        </p>
        <p className="text-gray-600 text-sm">Years of Experience: 8+</p>
      </div> */}

        {/* COO / Operations */}
        {/* <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold text-[#ce9733] mb-4">COO / Operations Head</h3>
        <p className="text-gray-600 leading-relaxed mb-2">
          <strong>Mr. Ahmed Khan</strong> – Oversees operational efficiency across all partner companies.
        </p>
        <p className="text-gray-600 text-sm">Years of Experience: 10+</p>
      </div> */}

        {/* CFO / Finance */}
        {/* <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold text-[#ce9733] mb-4">CFO / Finance Head</h3>
        <p className="text-gray-600 leading-relaxed mb-2">
          <strong>Ms. Fatima Ali</strong> – Responsible for financial planning and compliance across the group.
        </p>
        <p className="text-gray-600 text-sm">Years of Experience: 7+</p>
      </div> */}

        {/* Customer Support / Client Relations */}
        {/* <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold text-[#ce9733] mb-4">Client Relations / Support</h3>
        <p className="text-gray-600 leading-relaxed mb-2">
          <strong>Mr. Salman Riaz</strong> – Ensures smooth communication between pilgrims and the network of companies.
        </p>
        <p className="text-gray-600 text-sm">Years of Experience: 6+</p>
      </div> */}

        {/* </div> */}

        {/* Optional Note */}
        {/* <p className="text-center text-gray-500 mt-12 text-sm max-w-2xl mx-auto">
      Our leadership combines local expertise, operational experience, and strategic vision to deliver organized and reliable pilgrimage services.
    </p>

  </div>
</section> */}

        {/* <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-800">
              Why Choose Us
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"> */}

        {/* Card 1 */}
        {/* <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 text-center">
                <Building2 className="mx-auto mb-4 text-[#ce9733]" size={40} />
                <h3 className="font-semibold text-lg mb-3">
                  33 Company Network
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A strong and well-structured group of Hajj companies operating across Pakistan.
                </p>
              </div> */}

        {/* Card 2 */}
        {/* <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 text-center">
                <ShieldCheck className="mx-auto mb-4 text-[#ce9733]" size={40} />
                <h3 className="font-semibold text-lg mb-3">
                  Reliable Management
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Professional coordination ensuring organized and stress-free pilgrimage arrangements.
                </p>
              </div> */}

        {/* Card 3 */}
        {/* <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 text-center">
                <Handshake className="mx-auto mb-4 text-[#ce9733]" size={40} />
                <h3 className="font-semibold text-lg mb-3">
                  Transparent Process
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Clear communication, ethical practices, and complete transparency at every stage.
                </p>
              </div> */}

        {/* Card 4 */}
        {/* <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 text-center">
                <Headphones className="mx-auto mb-4 text-[#ce9733]" size={40} />
                <h3 className="font-semibold text-lg mb-3">
                  Dedicated Support
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Continuous assistance before, during, and after the pilgrimage journey.
                </p>
              </div> */}

        {/* </div>
          </div>
        </section> */}
        {/* <section className="py-16 bg-gradient-to-r from-[#ce9733] to-[#8a641f] text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">
              Begin Your Spiritual Journey With Confidence
            </h2>

            <button className="bg-white text-[#ce9733]  font-semibold px-6 py-3 rounded-lg">
              <ul> <Link legacyBehavior href="/contact"><a onClick={() => console.log("Navigating to Contact")}><li className="hover:text-[#b17c29]">Contact Us</li></a></Link></ul> */}
        {/* Contact Us */}
        {/* </button>
          </div>
        </section> */}
        {/* <section className="py-24 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">
    
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
      Why Choose Us
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"> */}

        {/* Card */}
        {/* <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center flex flex-col">
        
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-[#ce9733]/10 rounded-full">
          <Building2 className="text-[#ce9733]" size={32} />
        </div>

        <h3 className="font-semibold text-lg mb-3">
          33 Company Network
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed flex-grow">
          A strong and well-structured group of Hajj companies operating across Pakistan.
        </p>
      </div> */}

        {/* Repeat same structure for other cards */}

        {/* </div>
  </div>
</section> */}
      </div>
    </>
  )
}

export default CompanyProfile