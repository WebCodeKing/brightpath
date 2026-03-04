import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
    <div>hello world Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad exercitationem doloremque velit, non repudiandae id quam nulla iusto, voluptatum suscipit possimus. Temporibus repudiandae iusto aliquid amet quos vel repellat commodi! Voluptatibus, odio numquam laborum veritatis accusantium id ipsa eum voluptatum suscipit, accusamus eos excepturi qui quisquam autem error vitae est?
    </div>
    </>
  );
}
