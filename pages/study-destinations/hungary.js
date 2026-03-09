import React from 'react';
import { FaUniversity, FaMapMarkerAlt, FaEuroSign, FaClock, FaGlobe, FaLanguage, FaPlane, FaHistory, FaBriefcase, FaUsers, FaHeart, FaBook, FaGraduationCap, FaCity, FaTrain, FaUtensils, FaPalette } from 'react-icons/fa';

export default function Hungary() {
  const stats = [
    { icon: <FaUsers />, value: '70%', label: 'Visa Approval Rate' },
    { icon: <FaEuroSign />, value: '€1,500-€5,000', label: 'Tuition Fee (Public)' },
    { icon: <FaEuroSign />, value: '€5,000-€12,000', label: 'Tuition Fee (Private)' },
    { icon: <FaClock />, value: '2-3 Months', label: 'Visa Processing Time' },
  ];

  const whyStudy = [
    { icon: <FaGraduationCap />, title: 'High-Quality Education', desc: 'Internationally recognized universities, especially in medicine, engineering, and sciences.' },
    { icon: <FaLanguage />, title: 'English-Taught Programs', desc: 'Hundreds of programs in English at bachelor’s, master’s, and PhD levels.' },
    { icon: <FaGlobe />, title: 'EU Member & Schengen Access', desc: 'Travel freely across Europe as part of the EU and Schengen Area.' },
    { icon: <FaHistory />, title: 'Historically Rich & Culturally Vibrant', desc: 'Deep cultural heritage, historic architecture, festivals, and student-friendly atmosphere.' },
    { icon: <FaBriefcase />, title: 'Globally Recognized Degrees', desc: 'Degrees accepted across Europe, North America, and internationally.' },
    { icon: <FaTrain />, title: 'Student Discounts & Public Transport', desc: 'Discounted travel, food, and activities, plus efficient public transport.' },
    { icon: <FaUsers />, title: 'International Student Community', desc: 'Strong presence of international students in cities like Budapest and Debrecen.' },
    { icon: <FaPlane />, title: 'Gateway to Europe', desc: 'Central location for easy exploration of nearby countries.' },
    { icon: <FaHeart />, title: 'Safe and Welcoming Environment', desc: 'Peaceful and student-friendly, especially in university towns.' },
  ];

  const admissionSteps = [
    { step: 1, title: 'Prepare Documents', desc: 'SSC, HSSC (50%), Bachelor’s (50%), Recommendations, Europass CV, Motivation Letter, IELTS/PTE if required, Passport, Photograph.' },
    { step: 2, title: 'Application Fee', desc: 'Pay €50-€150 for application.' },
    { step: 3, title: 'Choose University', desc: 'Select public or private institutions based on program.' },
    { step: 4, title: 'Apply for Visa', desc: 'Submit visa form, educational docs, passport, health insurance, police certificate, bank statement (€10,000+), proof of funds, SOP, flight reservation, RP form, visa fee voucher, tuition fee voucher, acceptance letter, accommodation letter.' },
    { step: 5, title: 'IELTS Requirements', desc: 'Depends on university; many accept without IELTS based on MOI.' },
    { step: 6, title: 'Intake', desc: 'February and September, most courses in September.' },
    { step: 7, title: 'Processing Time', desc: '2-3 months for visa.' },
  ];

  const universities = [
    { name: 'Eötvös Loránd University (ELTE)', location: 'Budapest', type: 'Public' },
    { name: 'Budapest University of Technology and Economics', location: 'Budapest', type: 'Public' },
    { name: 'University of Debrecen', location: 'Debrecen', type: 'Public' },
    { name: 'University of Szeged', location: 'Szeged', type: 'Public' },
    { name: 'University of Pécs', location: 'Pécs', type: 'Public' },
    { name: 'Semmelweis University', location: 'Budapest', type: 'Public' },
    { name: 'University of Pannonia', location: 'Veszprém', type: 'Public' },
    { name: 'University of Miskolc', location: 'Miskolc', type: 'Public' },
    { name: 'Széchenyi István University', location: 'Győr', type: 'Public' },
    { name: 'Hungarian University of Agriculture and Life Sciences', location: 'Gödöllő/Budapest', type: 'Public' },
    { name: 'Pázmány Péter Catholic University', location: 'Budapest', type: 'Private' },
    { name: 'Károli Gáspár University of the Reformed Church', location: 'Budapest', type: 'Private' },
    { name: 'Central European University (CEU)', location: 'Budapest', type: 'Private' },
    { name: 'Budapest Metropolitan University', location: 'Budapest', type: 'Private' },
    { name: 'Moholy-Nagy University of Art and Design', location: 'Budapest', type: 'Private' },
    { name: 'Hungarian University of Fine Arts', location: 'Budapest', type: 'Private' },
    { name: 'Academy of Drama and Film', location: 'Budapest', type: 'Private' },
    { name: 'University of Physical Education', location: 'Budapest', type: 'Private' },
  ];

  const cities = [
    { name: 'Budapest', desc: 'Capital city, historic landmarks, modern amenities, vibrant nightlife, ruin bars.' },
    { name: 'Debrecen', desc: 'Second-largest city, strong academic presence, cultural festivals.' },
    { name: 'Szeged', desc: 'Sunny city, beautiful architecture, lively student community.' },
    { name: 'Pécs', desc: 'Oldest university in Central Europe, rich history, cultural heritage.' },
    { name: 'Győr', desc: 'Industrial city, applied sciences university, scenic Danube River.' },
    { name: 'Veszprém', desc: 'University town, beautiful landscapes, cultural events.' },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-gray-800 to-black text-white py-20 px-4">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-6xl mx-auto text-center animate-fadeInUp">
          <h1 className="text-5xl font-bold mb-4 gradient-text">Study in Hungary</h1>
          <p className="text-xl mb-8">High-quality education in the heart of Europe, blending rich history with modern opportunities.</p>
          <div className="flex justify-center space-x-4">
            <FaHistory className="text-4xl animate-pulse" />
            <FaUtensils className="text-4xl animate-pulse" />
            <FaPalette className="text-4xl animate-pulse" />
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
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Study in Hungary?</h2>
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
    