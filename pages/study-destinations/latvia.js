import React from 'react';
import { FaUniversity, FaMapMarkerAlt, FaEuroSign, FaClock, FaGlobe, FaLanguage, FaPlane, FaHistory, FaBriefcase, FaUsers, FaHeart, FaBook, FaGraduationCap, FaCity, FaTree, FaMicroscope, FaUtensils } from 'react-icons/fa';

export default function Latvia() {
  const stats = [
    { icon: <FaUsers />, value: '95%', label: 'Visa Approval Rate' },
    { icon: <FaEuroSign />, value: '€2,500-€4,000', label: 'Tuition Fee (Bachelors)' },
    { icon: <FaEuroSign />, value: '€300-€600', label: 'Monthly Living Cost' },
    { icon: <FaClock />, value: '4-6 Months', label: 'Visa Processing Time' },
  ];

  const whyStudy = [
    { icon: <FaGraduationCap />, title: 'High-Quality Education', desc: 'Internationally recognized universities with English-taught programs in various fields.' },
    { icon: <FaEuroSign />, title: 'Affordable Tuition Fees', desc: 'Lower fees compared to Western Europe, ranging from €2,000-€8,000 per year.' },
    { icon: <FaEuroSign />, title: 'Low Cost of Living', desc: 'Budget-friendly living expenses of €300-€600 per month.' },
    { icon: <FaGlobe />, title: 'Cultural Diversity', desc: 'Multicultural environment with rich history, art, music, and festivals.' },
    { icon: <FaPlane />, title: 'Great Location in Europe', desc: 'Schengen Area access for easy travel across 26 European countries.' },
    { icon: <FaHeart />, title: 'Safe and Student-Friendly', desc: 'Low crime rate, welcoming atmosphere, and strong student communities.' },
    { icon: <FaBriefcase />, title: 'Post-Graduation Opportunities', desc: 'One-year post-study work visa and job opportunities in growing sectors.' },
    { icon: <FaMicroscope />, title: 'Research & Innovation', desc: 'Emphasis on biotechnology, engineering, IT, with modern facilities.' },
    { icon: <FaCity />, title: 'Modern Infrastructure', desc: 'High quality of life with reliable transport, healthcare, and amenities.' },
    { icon: <FaTree />, title: 'Rich Cultural & Recreational Opportunities', desc: 'National parks, beaches, hiking, and vibrant city life.' },
  ];

  const admissionSteps = [
    { step: 1, title: 'Prepare Documents', desc: 'SSC, HSSC, Bachelor’s, Recommendations, Europass CV, Motivation Letter, IELTS/PTE if required, Passport, Photograph.' },
    { step: 2, title: 'Application Fee', desc: 'Pay €100-€300 for application.' },
    { step: 3, title: 'Choose University', desc: 'Select institutions based on program.' },
    { step: 4, title: 'Apply for Visa', desc: 'Submit educational docs, FRC, passport, health insurance, police certificate, invitation letter, study contract, accommodation contract, bank statement (€8,800+), proof of funds, tax returns, business proof, tuition fee voucher, acceptance letter.' },
    { step: 5, title: 'IELTS Requirements', desc: 'Depends on university; many accept without IELTS.' },
    { step: 6, title: 'Intake', desc: 'February and September.' },
    { step: 7, title: 'Processing Time', desc: '4-6 months for admission to TRP.' },
  ];

  const universities = [
    { name: 'University of Latvia (LU)', location: 'Riga', type: 'Public' },
    { name: 'Riga Technical University (RTU)', location: 'Riga', type: 'Public' },
    { name: 'Latvia University of Life Sciences and Technologies (LLU)', location: 'Jelgava', type: 'Public' },
    { name: 'Riga Stradins University (RSU)', location: 'Riga', type: 'Public' },
    { name: 'Stockholm School of Economics in Riga (SSE Riga)', location: 'Riga', type: 'Private' },
    { name: 'Jurmala University of Applied Sciences', location: 'Jurmala', type: 'Private' },
    { name: 'Latvian Academy of Arts (LMA)', location: 'Riga', type: 'Public' },
    { name: 'Ventspils University of Applied Sciences (VUAS)', location: 'Ventspils', type: 'Public' },
    { name: 'Daugavpils University (DU)', location: 'Daugavpils', type: 'Public' },
    { name: 'Liepaja University', location: 'Liepaja', type: 'Public' },
    { name: 'Baltic International Academy (BIA)', location: 'Riga', type: 'Private' },
    { name: 'Vidzeme University of Applied Sciences (ViA)', location: 'Valmiera', type: 'Public' },
    { name: 'Rezekne Academy of Technologies (RTA)', location: 'Rezekne', type: 'Public' },
    { name: 'Turība University', location: 'Riga', type: 'Private' },
    { name: 'Riga Medical College', location: 'Riga', type: 'Private' },
  ];

  const cities = [
    { name: 'Riga', desc: 'Capital city, UNESCO site, medieval architecture, vibrant student life, cafes, nightlife.' },
    { name: 'Jurmala', desc: 'Coastal city, beautiful beaches, relaxing atmosphere, nature and sea access.' },
    { name: 'Daugavpils', desc: 'Eastern city, multicultural, historical sites, growing student community.' },
    { name: 'Liepaja', desc: 'Western city, port town, cultural events, Baltic Sea proximity.' },
    { name: 'Jelgava', desc: 'Agricultural hub, university town, green spaces, historic charm.' },
    { name: 'Ventspils', desc: 'Northern city, industrial, coastal, modern amenities.' },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-gray-800 to-black text-white py-20 px-4">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-6xl mx-auto text-center animate-fadeInUp">
          <h1 className="text-5xl font-bold mb-4 gradient-text">Study in Latvia</h1>
          <p className="text-xl mb-8">Affordable education in the Baltic region, with rich culture and European connectivity.</p>
          <div className="flex justify-center space-x-4">
            <FaTree className="text-4xl animate-pulse" />
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
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Study in Latvia?</h2>
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
