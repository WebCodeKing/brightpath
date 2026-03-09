import React from 'react';
import { FaUniversity, FaMapMarkerAlt, FaEuroSign, FaClock, FaGlobe, FaLanguage, FaPlane, FaHistory, FaBriefcase, FaUsers, FaHeart, FaBook, FaGraduationCap, FaCity, FaTree, FaMicroscope, FaUtensils } from 'react-icons/fa';

export default function Lithuania() {
  const stats = [
    { icon: <FaUsers />, value: '99%', label: 'Visa Approval Rate' },
    { icon: <FaEuroSign />, value: '€2,500-€4,500', label: 'Tuition Fee (Bachelors)' },
    { icon: <FaEuroSign />, value: '€3,000-€6,500', label: 'Tuition Fee (Masters)' },
    { icon: <FaClock />, value: '4-6 Months', label: 'Visa Processing Time' },
  ];

  const whyStudy = [
    { icon: <FaGraduationCap />, title: 'High-Quality Education', desc: 'Internationally recognized degrees following Bologna Process, English-taught programs.' },
    { icon: <FaEuroSign />, title: 'Affordable Tuition Fees', desc: 'Lower costs compared to Western Europe, with scholarships available.' },
    { icon: <FaEuroSign />, title: 'Low Cost of Living', desc: 'Budget-friendly expenses, among the lowest in the EU.' },
    { icon: <FaHeart />, title: 'Safe and Student-Friendly', desc: 'Welcoming environment with strong student communities and discounts.' },
    { icon: <FaGlobe />, title: 'EU Schengen Country', desc: 'Free travel across 26 European countries.' },
    { icon: <FaBriefcase />, title: 'Post-Study Opportunities', desc: 'Stay for jobs in growing sectors like IT and biotech.' },
  ];

  const admissionSteps = [
    { step: 1, title: 'Prepare Documents', desc: 'SSC, HSSC, Bachelor’s, Recommendations, Europass CV, Motivation Letter, IELTS/PTE if required, Passport, Photograph.' },
    { step: 2, title: 'Application Fee', desc: 'Pay €100-€250 for application.' },
    { step: 3, title: 'Choose University', desc: 'Select institutions based on program.' },
    { step: 4, title: 'Apply for Visa', desc: 'Submit educational docs, passport, health insurance, police certificate, mediation letter, bank statement (€6,300+), proof of funds, business proof, tuition fee voucher, acceptance letter.' },
    { step: 5, title: 'IELTS Requirements', desc: 'Depends on university; many accept without IELTS.' },
    { step: 6, title: 'Intake', desc: 'February and September.' },
    { step: 7, title: 'Processing Time', desc: '4-6 months for admission to TRP.' },
  ];

  const universities = [
    { name: 'Vilnius University (VU)', location: 'Vilnius', type: 'Public' },
    { name: 'Kaunas University of Technology (KTU)', location: 'Kaunas', type: 'Public' },
    { name: 'Vilnius Gediminas Technical University (VGTU)', location: 'Vilnius', type: 'Public' },
    { name: 'Vytautas Magnus University (VMU)', location: 'Kaunas', type: 'Public' },
    { name: 'Mykolas Romeris University (MRU)', location: 'Vilnius', type: 'Public' },
    { name: 'Lithuanian University of Health Sciences (LSMU)', location: 'Kaunas', type: 'Public' },
    { name: 'Šiauliai University', location: 'Šiauliai', type: 'Public' },
    { name: 'Lithuanian Academy of Music and Theatre (LAMT)', location: 'Vilnius', type: 'Public' },
    { name: 'Klaipėda University', location: 'Klaipėda', type: 'Public' },
    { name: 'European Humanities University (EHU)', location: 'Vilnius', type: 'Private' },
    { name: 'Academy of Fine Arts in Vilnius (VAA)', location: 'Vilnius', type: 'Public' },
    { name: 'International Business School (IBS)', location: 'Vilnius', type: 'Private' },
    { name: 'Vilniaus Kolegija / University of Applied Sciences (VIKO)', location: 'Vilnius', type: 'Public' },
    { name: 'Kaunas University of Applied Sciences', location: 'Kaunas', type: 'Public' },
    { name: 'Lithuanian Sports University (LSU)', location: 'Kaunas', type: 'Public' },
  ];

  const cities = [
    { name: 'Vilnius', desc: 'Capital city, historical architecture, vibrant culture, growing student hub.' },
    { name: 'Kaunas', desc: 'Second-largest city, strong academic presence, cultural events.' },
    { name: 'Klaipėda', desc: 'Port city, marine sciences, beaches, Baltic Sea access.' },
    { name: 'Šiauliai', desc: 'Central city, education-focused, museums and parks.' },
    { name: 'Panevėžys', desc: 'Industrial city, business and engineering programs.' },
    { name: 'Marijampolė', desc: 'Southern city, social work and healthcare education.' },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-gray-800 to-black text-white py-20 px-4">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-6xl mx-auto text-center animate-fadeInUp">
          <h1 className="text-5xl font-bold mb-4 gradient-text">Study in Lithuania</h1>
          <p className="text-xl mb-8">Quality education in the Baltic heart of Europe, with rich history and modern opportunities.</p>
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
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Study in Lithuania?</h2>
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
