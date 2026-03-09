import React from 'react';
import { FaUniversity, FaMapMarkerAlt, FaDollarSign, FaClock, FaGlobe, FaLanguage, FaPlane, FaHistory, FaBriefcase, FaUsers, FaHeart, FaBook, FaGraduationCap, FaCity, FaMountain, FaMicroscope, FaUtensils } from 'react-icons/fa';

export default function Turkey() {
  const stats = [
    { icon: <FaUsers />, value: '85%+', label: 'Visa Approval Rate' },
    { icon: <FaDollarSign />, value: '$500-$2,500', label: 'Tuition Fee (Public)' },
    { icon: <FaDollarSign />, value: '$3,000-$12,000', label: 'Tuition Fee (Private)' },
    { icon: <FaClock />, value: '2-3 Months', label: 'Visa Processing Time' },
  ];

  const whyStudy = [
    { icon: <FaGraduationCap />, title: 'High-Quality Education', desc: 'Over 200 universities, Bologna Process compliant, internationally recognized.' },
    { icon: <FaDollarSign />, title: 'Affordable Tuition and Living', desc: 'Lower fees and costs compared to Europe/North America.' },
    { icon: <FaLanguage />, title: 'Wide Range of English Programs', desc: 'Many programs in English for undergrad, grad, PhD.' },
    { icon: <FaHistory />, title: 'Cultural and Historical Richness', desc: 'Blend of Europe and Asia, ancient history, vibrant cities.' },
    { icon: <FaHeart />, title: 'Warm Hospitality', desc: 'Friendly people, easy social adaptation.' },
    { icon: <FaHeart />, title: 'Safe and Modern Environment', desc: 'Safe, modern infrastructure, quality healthcare.' },
    { icon: <FaBriefcase />, title: 'Scholarship Opportunities', desc: 'Türkiye Scholarships covering tuition, accommodation, stipend.' },
    { icon: <FaPlane />, title: 'Strategic Location', desc: 'Gateway to Europe, Asia, Middle East.' },
  ];

  const admissionSteps = [
    { step: 1, title: 'Prepare Documents', desc: 'SSC, HSSC (50%), Bachelor’s (50%), Recommendations, Europass CV, Motivation Letter, IELTS/PTE if required, Passport, Photograph.' },
    { step: 2, title: 'Application Fee', desc: 'Pay $30-$50 for application.' },
    { step: 3, title: 'Choose University', desc: 'Select public or private institutions based on program.' },
    { step: 4, title: 'Apply for Visa', desc: 'Submit educational docs, passport, health insurance, police certificate, bank statement ($6,500), proof of funds, business proof, SOP, flight reservation, visa fee receipt, tuition fee slip, acceptance letter.' },
    { step: 5, title: 'IELTS Requirements', desc: 'Depends on university; many accept without IELTS based on MOI.' },
    { step: 6, title: 'Intake', desc: 'February and September.' },
    { step: 7, title: 'Processing Time', desc: '2-3 months.' },
  ];

  const universities = [
    { name: 'Istanbul University', location: 'Istanbul', type: 'Public' },
    { name: 'Ankara University', location: 'Ankara', type: 'Public' },
    { name: 'Istanbul Technical University', location: 'Istanbul', type: 'Public' },
    { name: 'Hacettepe University', location: 'Ankara', type: 'Public' },
    { name: 'Marmara University', location: 'Istanbul', type: 'Public' },
    { name: 'Koç University', location: 'Istanbul', type: 'Private' },
    { name: 'Bilkent University', location: 'Ankara', type: 'Private' },
    { name: 'Sabancı University', location: 'Istanbul', type: 'Private' },
    { name: 'Bahçeşehir University', location: 'Istanbul', type: 'Private' },
    { name: 'Yeditepe University', location: 'Istanbul', type: 'Private' },
    { name: 'Özyeğin University', location: 'Istanbul', type: 'Private' },
    { name: 'Kadir Has University', location: 'Istanbul', type: 'Private' },
    { name: 'Atılım University', location: 'Ankara', type: 'Private' },
    { name: 'Başkent University', location: 'Ankara', type: 'Private' },
    { name: 'TED University', location: 'Ankara', type: 'Private' },
  ];

  const cities = [
    { name: 'Istanbul', desc: 'Largest city, historic and modern, Bosphorus, cultural hub.' },
    { name: 'Ankara', desc: 'Capital city, political center, universities, museums.' },
    { name: 'Izmir', desc: 'Coastal city, Aegean Sea, vibrant, student-friendly.' },
    { name: 'Bursa', desc: 'Historic city, near Istanbul, thermal baths, universities.' },
    { name: 'Antalya', desc: 'Mediterranean coast, tourism, beaches, modern campuses.' },
    { name: 'Konya', desc: 'Central Anatolia, cultural heritage, growing education.' },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-gray-800 to-black text-white py-20 px-4">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-6xl mx-auto text-center animate-fadeInUp">
          <h1 className="text-5xl font-bold mb-4 gradient-text">Study in Turkey</h1>
          <p className="text-xl mb-8">Affordable excellence at the crossroads of continents, with rich history and warm hospitality.</p>
          <div className="flex justify-center space-x-4">
            <FaHistory className="text-4xl animate-pulse" />
            <FaUtensils className="text-4xl animate-pulse" />
            <FaGlobe className="text-4xl animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Key Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="glass p-6 rounded-lg text-center hover-lift animate-slideInLeft flex flex-col items-center justify-center">
                <div className="text-4xl text-blue-400 mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Study Section */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Study in Turkey?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyStudy.map((item, index) => (
              <div key={index} className="glass p-6 rounded-lg hover-lift animate-fadeInUp">
                <div className="text-3xl text-blue-400 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Steps */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Admission Process</h2>
          <div className="space-y-6">
            {admissionSteps.map((step, index) => (
              <div key={index} className="glass p-6 rounded-lg hover-lift animate-slideInLeft">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-400 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                </div>
                <p className="text-gray-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universities */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Top Universities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {universities.map((uni, index) => (
              <div key={index} className="glass p-6 rounded-lg hover-lift animate-fadeInUp">
                <div className="flex items-center mb-4">
                  <FaUniversity className="text-blue-400 text-2xl mr-3" />
                  <h3 className="text-xl font-semibold text-white">{uni.name}</h3>
                </div>
                <div className="flex items-center text-gray-300">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{uni.location} - {uni.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Popular Student Cities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cities.map((city, index) => (
              <div key={index} className="glass p-6 rounded-lg hover-lift animate-slideInLeft">
                <div className="flex items-center mb-4">
                  <FaCity className="text-blue-400 text-2xl mr-3" />
                  <h3 className="text-xl font-semibold text-white">{city.name}</h3>
                </div>
                <p className="text-gray-300">{city.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
