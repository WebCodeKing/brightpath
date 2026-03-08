import React from 'react';
import { FaUniversity, FaMapMarkerAlt, FaEuroSign, FaClock, FaGlobe, FaLanguage, FaPlane, FaHistory, FaBriefcase, FaUsers, FaHeart, FaBook, FaGraduationCap, FaCity, FaTrain, FaCheese, FaCamera, FaPalette, FaUtensils, FaLeaf, FaMicroscope } from 'react-icons/fa';

export default function France() {
  const stats = [
    { icon: <FaUsers />, value: '370,000+', label: 'International Students' },
    { icon: <FaEuroSign />, value: '€3,000-€6,000', label: 'Tuition Fee (Public)' },
    { icon: <FaEuroSign />, value: '€5,000-€20,000', label: 'Tuition Fee (Private)' },
    { icon: <FaClock />, value: '2-3 Months', label: 'Visa Processing Time' },
  ];

  const whyStudy = [
    { icon: <FaGraduationCap />, title: 'Internationally Recognized Education', desc: 'French universities and Grandes Écoles rank among the best in the world.' },
    { icon: <FaLanguage />, title: 'Programs in English and French', desc: 'Hundreds of programs offered in English, especially at master’s level.' },
    { icon: <FaPlane />, title: 'Heart of Europe', desc: 'Easy travel to 26+ Schengen countries for cultural exploration.' },
    { icon: <FaHistory />, title: 'Cultural and Historical Richness', desc: 'Access to art, architecture, cuisine, and centuries of history.' },
    { icon: <FaBriefcase />, title: 'Post-Study Work Opportunities', desc: 'Favorable visas for graduates in tech, business, and engineering.' },
    { icon: <FaHeart />, title: 'Welcoming to International Students', desc: 'Strong support system with housing, language classes, and integration.' },
    { icon: <FaBook />, title: 'Diverse Study Programs', desc: 'From engineering to fashion design, matching various goals.' },
    { icon: <FaGlobe />, title: 'Gateway to Global Career', desc: 'Degrees respected worldwide, with recruitment from top companies.' },
    { icon: <FaUsers />, title: 'High-Quality Teaching Staff', desc: 'Professors as researchers and experts emphasizing critical thinking.' },
    { icon: <FaHeart />, title: 'Strong Student Support', desc: 'Affordable health insurance, subsidized housing, and transportation.' },
    { icon: <FaCity />, title: 'Quality of Life', desc: 'Excellent public transport, parks, food, and work-life balance.' },
    { icon: <FaBriefcase />, title: 'Internships and Work', desc: 'Part-time work up to 964 hours/year and curriculum internships.' },
    { icon: <FaCamera />, title: 'UNESCO World Heritage Cities', desc: 'Student cities like Paris and Lyon are cultural hotspots.' },
    { icon: <FaMicroscope />, title: 'Innovative Research', desc: 'Access to cutting-edge labs and international conferences.' },
    { icon: <FaLeaf />, title: 'Sustainability Focus', desc: 'Eco-friendly campuses and climate-focused research.' },
  ];

  const admissionSteps = [
    { step: 1, title: 'Prepare Documents', desc: 'SSC, HSSC, Bachelor’s (60%), Recommendations, CV, Motivation Letter, IELTS/PTE if required, Passport, Photo.' },
    { step: 2, title: 'Application Fee', desc: 'Pay €30-€100 for application.' },
    { step: 3, title: 'Choose University', desc: 'Select public or private institutions based on program.' },
    { step: 4, title: 'Apply for Visa', desc: 'Submit visa form, educational docs, passport, health insurance, Campus France registration, police certificate, bank statement (€12,000+), proof of funds, SOP, flight reservation, visa fee voucher, tuition fee voucher, acceptance letter, accommodation letter.' },
    { step: 5, title: 'IELTS Requirements', desc: 'Many accept without IELTS based on MOI.' },
    { step: 6, title: 'Intake', desc: 'February and September, most courses in September.' },
    { step: 7, title: 'Processing Time', desc: '2-3 months for visa.' },
  ];

  const universities = [
    { name: 'Paris Sciences et Lettres (PSL)', location: 'Paris', type: 'Public' },
    { name: 'Université Paris-Saclay', location: 'Paris Area', type: 'Public' },
    { name: 'Institut Polytechnique de Paris', location: 'Paris', type: 'Public' },
    { name: 'Sorbonne Université', location: 'Paris', type: 'Public' },
    { name: 'Université Montpellier', location: 'Montpellier', type: 'Public' },
    { name: 'Université Grenoble Alpes', location: 'Grenoble', type: 'Public' },
    { name: 'Université de Strasbourg', location: 'Strasbourg', type: 'Public' },
    { name: 'Université Aix-Marseille', location: 'Marseille', type: 'Public' },
    { name: 'INSEAD', location: 'Fontainebleau', type: 'Private' },
    { name: 'EDHEC Business School', location: 'Lille, Nice', type: 'Private' },
    { name: 'ESCP Business School', location: 'Paris + EU', type: 'Private' },
    { name: 'ESSEC Business School', location: 'Cergy', type: 'Private' },
    { name: 'EMLYON Business School', location: 'Lyon', type: 'Private' },
    { name: 'KEDGE Business School', location: 'Bordeaux, Marseille', type: 'Private' },
    { name: 'Grenoble École de Management', location: 'Grenoble', type: 'Private' },
    { name: 'EPITA', location: 'Paris', type: 'Private' },
    { name: 'IFA Paris', location: 'Paris', type: 'Private' },
    { name: 'Le Cordon Bleu Paris', location: 'Paris', type: 'Private' },
    { name: 'Université Catholique de Lyon', location: 'Lyon', type: 'Private' },
    { name: 'American University of Paris', location: 'Paris', type: 'Private' },
  ];

  const cities = [
    { name: 'Paris', desc: 'Capital city, fashion capital, Eiffel Tower, Louvre, cultural hub.' },
    { name: 'Lyon', desc: 'Gastronomic capital, historic old town, universities.' },
    { name: 'Strasbourg', desc: 'European Parliament, beautiful architecture, student-friendly.' },
    { name: 'Montpellier', desc: 'Sunny climate, vibrant student life, Mediterranean coast nearby.' },
    { name: 'Bordeaux', desc: 'Wine region, modern architecture, top universities.' },
    { name: 'Marseille', desc: 'Port city, diverse culture, beaches and mountains.' },
    { name: 'Grenoble', desc: 'Alps location, tech hub, research universities.' },
    { name: 'Toulouse', desc: 'Aerospace capital, sunny weather, student atmosphere.' },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-gray-800 to-black text-white py-20 px-4">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-6xl mx-auto text-center animate-fadeInUp">
          <h1 className="text-5xl font-bold mb-4 gradient-text">Study in France</h1>
          <p className="text-xl mb-8">Experience world-class education in the heart of Europe, where innovation meets culture.</p>
          <div className="flex justify-center space-x-4">
            <FaGlobe className="text-4xl animate-pulse" />
            <FaPalette className="text-4xl animate-pulse" />
            <FaUtensils className="text-4xl animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Key Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="glass p-6 rounded-lg text-center hover-lift animate-slideInLeft">
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
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Study in France?</h2>
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
