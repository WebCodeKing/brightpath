import {
  FaUniversity,
  FaMoneyBillWave,
  FaGlobeEurope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
  FaTree
} from "react-icons/fa";

export default function CountryPage() {

  const stats = [
    { label: "Visa Success", value: "50%" },
    { label: "Tuition Fee", value: "€1,000–4,000" },
    { label: "Cost of Living", value: "€400–700/mo" },
    { label: "Scholarships", value: "Available" },
    { label: "Visa Time", value: "4–6 Months" },
    { label: "Intakes", value: "Feb / Sep" },
  ];

  const universities = [
    "University of Zagreb",
    "University of Split",
    "University of Rijeka",
    "University of Zadar",
    "University of Dubrovnik",
    "University of Osijek",
    "University North (Varaždin)",
    "RIT Croatia",
    "Zagreb School of Economics and Management (ZSEM)",
    "Libertas International University / Dubrovnik International University (DIU)",
    "Catholic University of Croatia",
    "Algebra University College"
  ];

  const cities = ["Zagreb", "Split", "Rijeka", "Dubrovnik"];

  return (
    <section className="bg-linear-to-b from-gray-900 via-black to-gray-900 text-white px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-linear-to-r from-[#0a77bf] to-[#fd6d2b] bg-clip-text text-transparent animate-pulse">
            Study in Croatia
          </h1>
          <p className="text-gray-400 mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Affordable European education, rich cultural heritage, safe environment, and EU membership benefits.
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
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-linear-to-r from-[#0a77bf] to-[#fd6d2b] bg-clip-text text-transparent animate-bounce">
            Why Study in Croatia
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaMoneyBillWave className="text-[#fd6d2b] text-4xl mb-4" />,
                title: "Affordable Education",
                desc: "Lower tuition fees and living costs compared to Western Europe, budget-friendly for students."
              },
              {
                icon: <FaUniversity className="text-[#0a77bf] text-4xl mb-4" />,
                title: "European-Standard Education",
                desc: "Part of EHEA and Bologna Process, with English-taught programs in medicine, engineering, business."
              },
              {
                icon: <FaGlobeEurope className="text-[#0a77bf] text-4xl mb-4" />,
                title: "EU Membership Benefits",
                desc: "Easy access to other European countries for travel, internships, and job opportunities."
              },
              {
                icon: <FaShieldAlt className="text-[#fd6d2b] text-4xl mb-4" />,
                title: "Safe and Friendly",
                desc: "Low crime rate, welcoming locals, and English widely spoken among young people."
              }
            ].map((item,i)=>(
              <div key={i} className="flex flex-col items-center text-center p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-linear-to-r hover:from-[#0a77bf]/20 hover:to-[#fd6d2b]/20 hover:shadow-lg transition transform hover:-translate-y-2">
                {item.icon}
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Admission & Visa */}
        <div className="mb-24 max-w-3xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center bg-linear-to-r from-[#0a77bf] to-[#fd6d2b] bg-clip-text text-transparent">
            Admission & Visa Requirements
          </h2>

          {[
            {
              icon: <FaCheckCircle />,
              title: "Prepare Documents",
              desc: "SSC, HSSC, Bachelor's certificates, recommendations, CV, motivation letter, IELTS/PTE, passport, photograph.",
              color: "bg-[#0a77bf]"
            },
            {
              icon: <FaUniversity />,
              title: "Apply to University",
              desc: "Submit application with fee (30–200 Euros) and receive acceptance letter.",
              color: "bg-[#0a77bf]"
            },
            {
              icon: <FaClock />,
              title: "Visa Processing",
              desc: "Apply for visa with health insurance, police certificate, bank statement. IELTS optional. Processing: 4–6 months.",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-linear-to-r from-[#0a77bf] to-[#fd6d2b] bg-clip-text text-transparent">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-linear-to-r from-[#0a77bf] to-[#fd6d2b] bg-clip-text text-transparent">
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
