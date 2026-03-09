import React from 'react';
import { FaUniversity, FaMapMarkerAlt, FaEuroSign, FaClock, FaGlobe, FaLanguage, FaPlane, FaHistory, FaBriefcase, FaUsers, FaHeart, FaBook, FaGraduationCap, FaCity, FaMountain, FaMicroscope, FaUtensils } from 'react-icons/fa';

export default function Slovakia() {
  const stats = [
    { icon: <FaUsers />, value: '90%+', label: 'Visa Approval Rate' },
    { icon: <FaEuroSign />, value: '€1,000-€3,500', label: 'Tuition Fee (Public)' },
    { icon: <FaEuroSign />, value: '€4,000-€7,000', label: 'Tuition Fee (Private)' },
    { icon: <FaClock />, value: '6-8 Months', label: 'Visa Processing Time' },
  ];

  const whyStudy = [
    { icon: <FaEuroSign />, title: 'Affordable Tuition Fees', desc: 'Low-cost education compared to Western Europe, with many English programs.' },
    { icon: <FaEuroSign />, title: 'Low Cost of Living', desc: 'Budget-friendly daily expenses for housing, food, and transport.' },
    { icon: <FaGraduationCap />, title: 'Quality Education', desc: 'Internationally recognized degrees, Erasmus+ exchanges.' },
    { icon: <FaHeart />, title: 'Safe and Peaceful Environment', desc: 'One of the safer countries in Europe, student-friendly atmosphere.' },
    { icon: <FaGlobe />, title: 'EU and Schengen Member', desc: 'Free travel across 26 European countries.' },
    { icon: <FaLanguage />, title: 'English-Taught Programs', desc: 'Many full-degree programs in English, especially in medicine and engineering.' },
    { icon: <FaHistory />, title: 'Cultural Experience', desc: 'Rich history, castles, festivals, Western and Eastern influences.' },
    { icon: <FaMountain />, title: 'Stunning Natural Beauty', desc: 'High Tatras mountains, caves, national parks, outdoor activities.' },
    { icon: <FaUsers />, title: 'Diverse Student Community', desc: 'International students from Europe, Africa, and Asia.' },
    { icon: <FaBriefcase />, title: 'Work Opportunities', desc: 'Part-time work during studies, post-study job options.' },
    { icon: <FaPlane />, title: 'Central European Location', desc: 'Easy travel to Austria, Czech Republic, Hungary, Poland.' },
    { icon: <FaLanguage />, title: 'No Language Barrier', desc: 'Full programs in English, chance to learn Slovak.' },
    { icon: <FaMicroscope />, title: 'Modern Facilities', desc: 'Equipped labs, libraries, research opportunities.' },
    { icon: <FaHistory />, title: 'Historical Richness', desc: 'Over 100 castles, medieval towns, UNESCO sites.' },
    { icon: <FaHeart />, title: 'Friendly People', desc: 'Warm, welcoming, and helpful toward students.' },
  ];

  const admissionSteps = [
    { step: 1, title: 'Prepare Documents', desc: 'SSC, HSSC, Bachelor’s, Recommendations, Europass CV, Motivation Letter, IELTS/PTE (5.5-6.0), Passport, Photograph.' },
    { step: 2, title: 'Application Fee', desc: 'Pay €30-€100 for application.' },
    { step: 3, title: 'Choose University', desc: 'Select public or private institutions based on program.' },
    { step: 4, title: 'Apply for Visa', desc: 'Submit educational docs, passport, health insurance, police certificate, invitation letter, bank statement (€7,000+), proof of funds, business proof, tuition fee slip, acceptance letter, accommodation letter, SOP, passport pic.' },
    { step: 5, title: 'IELTS Requirements', desc: '5.5-6.0 required.' },
    { step: 6, title: 'Intake', desc: 'February and September, most courses in September.' },
    { step: 7, title: 'Processing Time', desc: '6-8 months for admission to visa.' },
  ];

  const universities = [
    { name: 'Comenius University in Bratislava', location: 'Bratislava', type: 'Public' },
    { name: 'Pavol Jozef Šafárik University in Košice', location: 'Košice', type: 'Public' },
    { name: 'Slovak Medical University', location: 'Bratislava', type: 'Public' },
    { name: 'University of Veterinary Medicine and Pharmacy in Košice', location: 'Košice', type: 'Public' },
    { name: 'Slovak University of Technology (STU)', location: 'Bratislava', type: 'Public' },
    { name: 'Technical University of Košice (TUKE)', location: 'Košice', type: 'Public' },
    { name: 'University of Economics in Bratislava (EUBA)', location: 'Bratislava', type: 'Public' },
    { name: 'University of Žilina', location: 'Žilina', type: 'Public' },
    { name: 'University of Prešov', location: 'Prešov', type: 'Public' },
    { name: 'Constantine the Philosopher University', location: 'Nitra', type: 'Public' },
    { name: 'Slovak University of Agriculture', location: 'Nitra', type: 'Public' },
    { name: 'Bratislava International School of Liberal Arts (BISLA)', location: 'Bratislava', type: 'Private' },
    { name: 'Pan European University', location: 'Bratislava', type: 'Private' },
  ];

  const cities = [
    { name: 'Bratislava', desc: 'Capital city, on Danube River, modern and historical blend, student hub.' },
    { name: 'Košice', desc: 'Eastern city, Gothic cathedral, cultural life, medical universities.' },
    { name: 'Prešov', desc: 'Regional center, social sciences, historical architecture.' },
    { name: 'Žilina', desc: 'Northern city, transport and engineering programs, near mountains.' },
    { name: 'Nitra', desc: 'Agricultural and humanities focus, university town.' },
    { name: 'Martin', desc: 'Medical faculty, historical significance.' },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-gray-800 to-black text-white py-20 px-4">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-6xl mx-auto text-center animate-fadeInUp">
          <h1 className="text-5xl font-bold mb-4 gradient-text">Study in Slovakia</h1>
          <p className="text-xl mb-8">Affordable education in Central Europe, with rich history and stunning landscapes.</p>
          <div className="flex justify-center space-x-4">
            <FaMountain className="text-4xl animate-pulse" />
            <FaUtensils className="text-4xl animate-pulse" />
            <FaHistory className="text-4xl animate-pulse" />
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
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Study in Slovakia?</h2>
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
