import {
  FaUniversity,
  FaMoneyBillWave,
  FaGlobeEurope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaClock,
  FaLanguage,
  FaShieldAlt
} from "react-icons/fa";

export default function CountryPage() {

  const stats = [
    { label: "Visa Success", value: "80+%" },
    { label: "Tuition Fee", value: "€700–2,500" },
    { label: "Cost of Living", value: "€400–600/mo" },
    { label: "Scholarships", value: "Available" },
    { label: "Visa Time", value: "2–3 Months" },
    { label: "Intakes", value: "September" },
  ];

  const universities = [
    "University of Sarajevo",
    "International University of Sarajevo (IUS)",
    "University of Banja Luka",
    "University of Mostar",
    "University of Tuzla",
    "University of East Sarajevo",
    "University of Zenica",
    "University of Bihać",
    "University of Travnik",
    "University of Herzegovina (Mostar)",
    "International Burch University (IBU)"
  ];

  const cities = ["Sarajevo", "Banja Luka", "Mostar", "Tuzla"];

  return (
    <section className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#0a77bf] to-[#fd6d2b] bg-clip-text text-transparent animate-pulse">
            Study in Bosnia
          </h1>
          <p className="text-gray-400 mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Affordable European education, rich cultural heritage, safe environment, and a growing international student community.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-24">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm border border-white/20 px-10 py-6 rounded-full hover:scale-105 hover:shadow-lg transition transform"
            >
              <span className="text-[#fd6d2b] font-bold text-lg md:text-xl">{stat.value}</span>
              <p className="text-gray-400 mt-1 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Why Study Here */}
        <div className="mb-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-[#0a77bf] to-[#fd6d2b] bg-clip-text text-transparent animate-bounce">
            Why Study in Bosnia
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaMoneyBillWave className="text-[#fd6d2b] text-4xl mb-4" />,
                title: "Affordable Education",
                desc: "Low tuition fees and living costs compared to Western Europe, making it budget-friendly."
              },
              {
                icon: <FaUniversity className="text-[#0a77bf] text-4xl mb-4" />,
                title: "Quality Universities",
                desc: "Reputable institutions following European standards with English-taught programs."
              },
              {
                icon: <FaGlobeEurope className="text-[#0a77bf] text-4xl mb-4" />,
                title: "Cultural Diversity",
                desc: "Experience multicultural heritage with Bosniak, Serbian, and Croatian influences."
              },
              {
                icon: <FaShieldAlt className="text-[#fd6d2b] text-4xl mb-4" />,
                title: "Safe Environment",
                desc: "Welcoming and safe for international students with friendly locals."
              }
            ].map((item,i)=>(
              <div key={i} className="flex flex-col items-center text-center p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-gradient-to-r hover:from-[#0a77bf]/20 hover:to-[#fd6d2b]/20 hover:shadow-lg transition transform hover:-translate-y-2">
                {item.icon}
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Admission & Visa */}
        <div className="mb-24 max-w-3xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center bg-gradient-to-r from-[#0a77bf] to-[#fd6d2b] bg-clip-text text-transparent">
            Admission & Visa Requirements
          </h2>

          {[
            {
              icon: <FaCheckCircle />,
              title: "Prepare Documents",
              desc: "SSC, HSSC, Bachelor's certificates, motivation letter, passport, photograph, MOI or IELTS.",
              color: "bg-[#0a77bf]"
            },
            {
              icon: <FaUniversity />,
              title: "Apply to University",
              desc: "Submit application with fee (0–100 Euros) and receive acceptance letter.",
              color: "bg-[#0a77bf]"
            },
            {
              icon: <FaClock />,
              title: "Visa Processing",
              desc: "Apply for visa with documents like health insurance, police certificate. Processing: 2–3 months. IELTS not required.",
              color: "bg-[#fd6d2b]"
            }
          ].map((item,i)=>(
              <div key={i} className="flex gap-6 items-start bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:shadow-lg transition transform hover:-translate-y-1">
              <div className={`w-12 h-12 flex items-center justify-center rounded-full ${item.color} text-white text-lg md:text-xl animate-pulse`}> 
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-400 text-sm md:text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Top Universities */}
        <div className="mb-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-[#0a77bf] to-[#fd6d2b] bg-clip-text text-transparent">
            Top Universities
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {universities.map((uni, i) => (
              <div key={i} className="px-6 py-3 bg-white/5 backdrop-blur-lg rounded-full border border-white/10 hover:ring-2 hover:ring-[#fd6d2b] hover:scale-105 transition transform">
                {uni}
              </div>
            ))}
          </div>
        </div>

        {/* Major Cities */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-[#0a77bf] to-[#fd6d2b] bg-clip-text text-transparent">
            Major Cities
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {cities.map((city,i)=>(
              <div key={i} className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-lg rounded-full border border-white/10 hover:scale-105 hover:shadow-lg transition transform">
                <FaMapMarkerAlt className="text-[#fd6d2b] animate-pulse" />
                {city}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
