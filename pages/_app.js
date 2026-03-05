import "@/styles/globals.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return <>
    <div className="w-full overflow-hidden">
    {/* <div id="background" className="">
  <div className="relative z-10">    */}
  <Head>
    <link rel="icon" href="/brightpath-logo.png"></link>
  </Head>
  <Navbar/>
  <Component {...pageProps} />
  {/* <Footer/> */}
  {/* </div>
  </div> */}
  </div>
  
  </>
}
