import React from 'react';
import { FaUniversity, FaMapMarkerAlt, FaEuroSign, FaClock, FaGlobe, FaLanguage, FaPlane, FaHistory, FaBriefcase, FaUsers, FaHeart, FaBook, FaGraduationCap, FaCity, FaMountain, FaMicroscope, FaUtensils, FaTree } from 'react-icons/fa';

export default function Slovenia() {
  const stats = [
    { icon: <FaUsers />, value: '80%', label: 'Visa Approval Rate' },
    { icon: <FaEuroSign />, value: '€2,500-€4,500', label: 'Tuition Fee (Public)' },
    { icon: <FaEuroSign />, value: '€2,500-€8,000', label: 'Tuition Fee (Private)' },
    { icon: <FaClock />, value: '6-8 Months', label: 'Visa Processing Time' },
  ];

  const whyStudy = [
    { icon: <FaGraduationCap />, title: 'High-Quality Education', desc: 'Well-developed system with recognized universities, many English programs.' },
    { icon: <FaEuroSign />, title: 'Affordable Tuition and Living', desc: 'Lower fees and costs compared to Western Europe, €400-600 monthly living.' },
    { icon: <FaHeart />, title: 'Safe and Peaceful Environment', desc: 'One of the safest in Europe, low crime, friendly atmosphere.' },
    { icon: <FaGlobe />, title: 'Multicultural and Welcoming', desc: 'Mix of influences, English widely spoken, easy integration.' },
    { icon: <FaMountain />, title: 'Beautiful Nature and Outdoors', desc: 'Alps, lakes, forests, hiking, skiing, cycling, water sports.' },
    { icon: <FaPlane />, title: 'Central Location in Europe', desc: 'Easy travel to Italy, Austria, Croatia, Hungary.' },
    { icon: <FaUsers />, title: 'Student Support Services', desc: 'Orientation, language courses, counseling, career services.' },
    { icon: <FaMicroscope />, title: 'Research and Innovation', desc: 'Strong in engineering, biotech, IT, modern labs.' },
    { icon: <FaGlobe />, title: 'Erasmus+ Programs', desc: 'Wide participation in exchanges and short programs.' },
    { icon: <FaTree />, title: 'Sustainability Focus', desc: 'Pioneer in green technologies, eco-friendly curricula.' },
    { icon: <FaUsers />, title: 'Growing International Community', desc: 'Diverse students, vibrant networks.' },
    { icon: <FaHeart />, title: 'Quality of Life', desc: 'Balanced lifestyle, access to nature, slower pace.' },
    { icon: <FaLanguage />, title: 'Language Learning', desc: 'Exposure to Slovene, Italian, German, Croatian.' },
    { icon: <FaBriefcase />, title: 'Career Prospects', desc: 'Strong alumni networks, internships, EU job market.' },
    { icon: <FaHistory />, title: 'Rich History and Culture', desc: 'Medieval towns, castles, museums, festivals.' },
  ];

  const admissionSteps = [
    { step: 1, title: 'Prepare Documents', desc: 'SSC, HSSC, Bachelor’s, Recommendations, Europass CV, Motivation Letter, IELTS/PTE if required, Passport, Photograph.' },
    { step: 2, title: 'Application Fee', desc: 'Pay €30-€100 for application.' },
    { step: 3, title: 'Choose University', desc: 'Select public or private institutions based on program.' },
    { step: 4, title: 'Apply for Visa', desc: 'Submit educational docs, passport, health insurance, police certificate, invitation letter, bank statement (€6,500+), proof of funds, business proof, tuition fee slip, acceptance letter, accommodation letter.' },
    { step: 5, title: 'IELTS Requirements', desc: 'Depends on university; many accept without IELTS.' },
    { step: 6, title: 'Intake', desc: 'February and September, most courses in September.' },
    { step: 7, title: 'Processing Time', desc: '6-8 months for admission to TRP.' },
  ];

  const universities = [
    { name: 'University of Ljubljana', location: 'Ljubljana', type: 'Public' },
    { name: 'University of Maribor', location: 'Maribor', type: 'Public' },
    { name: 'University of Primorska', location: 'Koper', type: 'Public' },
    { name: 'University of Nova Gorica', location: 'Nova Gorica', type: 'Private' },
    { name: 'New University', location: 'Nova Gorica / Ljubljana', type: 'Private' },
    { name: 'Alma Mater Europaea – ECM', location: 'Maribor', type: 'Private' },
    { name: 'Jozef Stefan International Postgraduate School', location: 'Ljubljana', type: 'Private' },
    { name: 'IEDC-Bled School of Management', location: 'Bled', type: 'Private' },
    { name: 'IBS International Business School', location: 'Ljubljana', type: 'Private' },
    { name: 'DOBA Business School', location: 'Maribor', type: 'Private' },
    { name: 'GEA College of Entrepreneurship', location: 'Piran', type: 'Private' },
    { name: 'International School for Social & Business Studies', location: 'Celje', type: 'Private' },
    { name: 'School of Advanced Social Studies', location: 'Nova Gorica', type: 'Private' },
  ];

  const cities = [
    { name: 'Ljubljana', desc: 'Capital city, vibrant, historic center, student hub, cultural events.' },
    { name: 'Maribor', desc: 'Second-largest, wine region, universities, medieval charm.' },
    { name: 'Koper', desc: 'Coastal city, Adriatic Sea, tourism, university campus.' },
    { name: 'Nova Gorica', desc: 'Border city, modern, research-focused, near Italy.' },
    { name: 'Bled', desc: 'Tourist town, Lake Bled, mountains, business school.' },
    { name: 'Piran', desc: 'Seaside town, historic, entrepreneurship college.' },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-gray-800 to-black text-white py-20 px-4">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-6xl mx-auto text-center animate-fadeInUp">
          <h1 className="text-5xl font-bold mb-4 gradient-text">Study in Slovenia</h1>
          <p className="text-xl mb-8">Quality education in a green paradise, blending Alpine beauty with European connectivity.</p>
          <div className="flex justify-center space-x-4">
            <FaMountain className="text-4xl animate-pulse" />
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
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Study in Slovenia?</h2>
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
