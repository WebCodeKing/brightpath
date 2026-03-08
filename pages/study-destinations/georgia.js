import React from 'react';
import { FaUniversity, FaMapMarkerAlt, FaDollarSign, FaClock, FaGlobe, FaLanguage, FaPlane, FaHistory, FaBriefcase, FaUsers, FaHeart, FaBook, FaGraduationCap, FaCity, FaMountain, FaWineBottle, FaUtensils } from 'react-icons/fa';

export default function Georgia() {
  const stats = [
    { icon: <FaUsers />, value: '99%', label: 'Visa Approval Rate' },
    { icon: <FaDollarSign />, value: '$1,500-$3,000', label: 'Tuition Fee (Bachelors)' },
    { icon: <FaDollarSign />, value: '$300-$500', label: 'Monthly Living Cost' },
    { icon: <FaClock />, value: '2-3 Months', label: 'Visa Processing Time' },
  ];

  const whyStudy = [
    { icon: <FaGraduationCap />, title: 'Affordable Quality Education', desc: 'Lower tuition fees than Western Europe, with internationally recognized programs.' },
    { icon: <FaGlobe />, title: 'Internationally Recognized Degrees', desc: 'Degrees recognized by WHO, UNESCO, and medical councils worldwide.' },
    { icon: <FaDollarSign />, title: 'Lower Living Costs', desc: 'Cost of living around $300–$500/month for housing, food, and transport.' },
    { icon: <FaLanguage />, title: 'English-Taught Programs', desc: 'Many programs in English, no Georgian language required for studies.' },
    { icon: <FaBriefcase />, title: 'Simple Visa Process', desc: 'Straightforward student visas and residence permits.' },
    { icon: <FaHeart />, title: 'Rich Culture & Hospitality', desc: 'Welcoming people, vibrant traditions, and easy social integration.' },
    { icon: <FaPlane />, title: 'Strategic Location', desc: 'Between Europe and Asia, easy travel to nearby countries.' },
    { icon: <FaMountain />, title: 'Beautiful Scenery & Lifestyle', desc: 'Mountains, beaches, historical sites, and outdoor activities.' },
  ];

  const admissionSteps = [
    { step: 1, title: 'Prepare Documents', desc: 'SSC, HSSC (45%), Bachelor’s (45%), Motivation Letter, Passport, Photograph, MOI if available.' },
    { step: 2, title: 'Application Fee', desc: 'Pay $50-$300 for application.' },
    { step: 3, title: 'Choose University', desc: 'Select public or private institutions based on program.' },
    { step: 4, title: 'Apply for Visa', desc: 'Submit visa form, educational docs, passport, health insurance, police certificate, bank statement (optional), motivation letter, visa fee receipt, tuition fee slip, acceptance letter, accommodation letter, ministry recognition.' },
    { step: 5, title: 'IELTS Requirements', desc: 'No IELTS required.' },
    { step: 6, title: 'Intake', desc: 'September intake.' },
    { step: 7, title: 'Processing Time', desc: '2-3 months for visa.' },
  ];

  const universities = [
    { name: 'Ivane Javakhishvili Tbilisi State University (TSU)', location: 'Tbilisi', type: 'Public' },
    { name: 'Ilia State University', location: 'Tbilisi', type: 'Public' },
    { name: 'Georgian Technical University', location: 'Tbilisi', type: 'Public' },
    { name: 'Tbilisi State Medical University', location: 'Tbilisi', type: 'Public' },
    { name: 'Batumi Shota Rustaveli State University', location: 'Batumi', type: 'Public' },
    { name: 'Akaki Tsereteli State University', location: 'Kutaisi', type: 'Public' },
    { name: 'Free University of Tbilisi', location: 'Tbilisi', type: 'Private' },
    { name: 'University of Georgia', location: 'Tbilisi', type: 'Private' },
    { name: 'Georgian American University (GAU)', location: 'Tbilisi', type: 'Private' },
    { name: 'Caucasus International University', location: 'Tbilisi', type: 'Private' },
    { name: 'European University', location: 'Tbilisi', type: 'Private' },
    { name: 'International Black Sea University (IBSU)', location: 'Tbilisi', type: 'Private' },
    { name: 'New Vision University', location: 'Tbilisi', type: 'Private' },
    { name: 'David Tvildiani Medical University', location: 'Tbilisi', type: 'Private' },
    { name: 'East European University', location: 'Tbilisi', type: 'Private' },
    { name: 'Petre Shotadze Tbilisi Medical Academy', location: 'Tbilisi', type: 'Private' },
    { name: 'Business and Technology University (BTU)', location: 'Tbilisi', type: 'Private' },
    { name: 'East West Teaching University', location: 'Tbilisi', type: 'Private' },
  ];

  const cities = [
    { name: 'Tbilisi', desc: 'Capital city, historic mix of Eastern and Western architecture, vibrant culture.' },
    { name: 'Batumi', desc: 'Black Sea resort city, beaches, modern attractions, and nightlife.' },
    { name: 'Kutaisi', desc: 'Ancient cultural hub, second-largest city, rich in history.' },
    { name: 'Rustavi', desc: 'Industrial city near Tbilisi, growing student population.' },
    { name: 'Zugdidi', desc: 'Western Georgia, near Abkhazia, scenic and cultural.' },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-gray-800 to-black text-white py-20 px-4">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-6xl mx-auto text-center animate-fadeInUp">
          <h1 className="text-5xl font-bold mb-4 gradient-text">Study in Georgia</h1>
          <p className="text-xl mb-8">Affordable education at the crossroads of Europe and Asia, with rich culture and stunning landscapes.</p>
          <div className="flex justify-center space-x-4">
            <FaMountain className="text-4xl animate-pulse" />
            <FaWineBottle className="text-4xl animate-pulse" />
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
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Study in Georgia?</h2>
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
