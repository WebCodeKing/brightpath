// components/Navbar.js
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    // component
    <div className="flex flex-wrap place-items-center sticky top-0 z-50">
      <section className="relative mx-auto">
        {/* Navbar */}
        <nav className="flex justify-between bg-gray-900 text-white w-screen">
          <div className="px-5 xl:px-12 py-3 flex w-full items-center">
            <a className="text-3xl font-bold font-heading" href="#">
              {/* Logo Here */}
              {/* <Image
                src="/favicon.png"
                alt="Madina Image"
                width={50}
                height={10}
                className=""
                priority
              /> */}
            </a>
            {/* Nav Links */}
            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12 justify-self-center">
              <Link legacyBehavior href="/"><a><li className="hover:text-gray-200">Home</li></a></Link>
              <Link legacyBehavior href="/about"><a className="hover:text-gray-200"><li>About</li></a></Link>
              <Link legacyBehavior href="/company-profile"><a className="hover:text-gray-200"><li>Company Profile</li></a></Link>
              {/* <Link legacyBehavior href="/affiliate-companies"><a><li className="hover:text-gray-200">Affiliate Companies */}
              {/* </li></a></Link>
              <Link legacyBehavior href="/hajj-guides"><a><li className="hover:text-gray-200">Hajj Guides
              </li></a></Link> */}
              {/* <li className="relative group">
                <div className="inline-block">
                  <a href="#" className="hover:text-gray-300">SECP</a>
                  <ul className="absolute left-0 mt-1 w-40 bg-black text-white rounded shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <Link legacyBehavior href="/secp/hajj2024"><li className="px-4 py-2 rounded hover:bg-gray-700"><a href="#">Hajj 2024</a></li></Link>
                    <Link legacyBehavior href="/secp/hajj2025"><li className="px-4 py-2 rounded hover:bg-gray-700"><a>Hajj 2025</a></li></Link> */}
                    {/* <li className="px-4 py-2 hover:bg-gray-700"><a href="#">Marketing</a></li> */}
                  {/* </ul>
                </div>
              </li> */}

              <Link legacyBehavior href="/faq"><a><li className="hover:text-gray-200">FAQ</li></a></Link>
              <Link legacyBehavior href="/contact"><a onClick={() => console.log("Navigating to Contact")}><li className="hover:text-gray-200">Contact</li></a></Link>
            </ul>   
            {/* Header Icons */}
            {/* <div className="hidden xl:flex items-center space-x-5 items-center">
              <a className="hover:text-gray-200" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </a>
              <a className="flex items-center hover:text-gray-200" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="flex absolute -mt-5 ml-4">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                </span>
              </a>
              {/* Sign In / Register */}
            {/* <a className="flex items-center hover:text-gray-200" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
            </div> */}
          </div>
          {/* Responsive navbar */}
          {/* <a className="xl:hidden flex mr-6 items-center" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="flex absolute -mt-5 ml-4">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span>
          </a> */}
          <a className="navbar-burger self-center mr-12 xl:hidden" href="#" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </a>
        </nav>
        <div className={`absolute md:hidden w-[100%] transition-all duration-300 ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden z-50'}`}>
        <ul className="bg-gray-800 text-white space-y-4 px-5 py-4">
          <Link legacyBehavior href="/" onClick={() => setIsMenuOpen(false)}><a><li className=' hover:text-gray-400 font-bold'>Home</li></a></Link><hr />
          <Link legacyBehavior href="/about" onClick={() => setIsMenuOpen(false)}><a><li className='pt-[16px] font-bold hover:text-gray-400'>About</li></a></Link><hr />
          <Link legacyBehavior href="/company-profile" onClick={() => setIsMenuOpen(false)}><a><li className='pt-[16px] font-bold hover:text-gray-400'>Company Profile</li></a></Link><hr />
          {/* <Link legacyBehavior href="/affiliate-companies" onClick={() => setIsMenuOpen(false)}><a><li className='pt-[16px] font-bold hover:text-gray-400'>Affiliate Companies</li></a></Link><hr /> */}
          {/* <Link legacyBehavior href="/hajj-guides" onClick={() => setIsMenuOpen(false)}><a><li className='pt-[16px] font-bold hover:text-gray-400'>Hajj Guides</li></a></Link><hr /> */}

          {/* SECP Mobile Collapsible */}
          {/* <li>
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="w-full text-left flex justify-between items-center font-bold  hover:text-gray-400">
              SECP
              <span>{isDropdownOpen ? "▲" : "▼"}</span>
            </button>
            <ul className={`mt-2 ml-4 space-y-2 transition-all duration-300 ${isDropdownOpen ? 'block' : 'hidden'}`}>
              <hr /><Link legacyBehavior href="/secp/hajj2024" onClick={() => setIsMenuOpen(false)}><a><li className='font-bold mt-[16px] hover:text-gray-400'>Hajj 2024</li></a></Link><hr />
              <Link legacyBehavior href="/secp/hajj2025" onClick={() => setIsMenuOpen(false)}><a><li className='font-bold mt-[16px] hover:text-gray-400'>Hajj 2025</li></a></Link>
            </ul>
          </li><hr /> */}

          <Link legacyBehavior href="/faq" onClick={() => setIsMenuOpen(false)}><a><li className='pt-[16px] font-bold hover:text-gray-400'>FAQ</li></a></Link><hr />
          <Link legacyBehavior href="/contact" onClick={() => setIsMenuOpen(false)}><a><li className='pt-[16px] font-bold hover:text-gray-400'>Contact</li></a></Link>
        </ul>
      </div>
      </section>
      {/* Follow me on twitter */}
      <div className="absolute bottom-0 right-0 mb-4 mr-4 z-10">
        {/* <div>
          <a title="Follow me on twitter" href="https://www.twitter.com/asad_codes" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img className="object-cover object-center w-full h-full rounded-full" src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg"/>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
