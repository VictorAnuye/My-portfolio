import Image from "next/image";
import { FaAward } from "react-icons/fa"
import { MdFileDownloadDone } from "react-icons/md";
import { BiSolidHappyHeartEyes } from "react-icons/bi";
import { FaCrown } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { SiAdobeillustrator } from "react-icons/si";
import { BsVectorPen } from "react-icons/bs";
import tuneup from "@/app/public/tuneup.jpg";
import piness from "@/app/public/piness.png";
import tuneuplogo from "@/app/public/tuneuplogo.png";
import lilly from "@/app/public/lilly.jpg"
import vg from "@/app/public/vg.jpg"


export default function Home() {
  return (
    <div>
      <div className="text-center h-96 justify-center pt-6 bg-[#F5F5F7]">
        <div className="text-[#705C53]">
          <p>Hello I'm</p>
        </div>
        <div className=" text-4xl text-[#705C53] font-serif">
          <h1>Victor Anuye</h1>
        </div>
        <div className="font-sans text-[#705C53]">
          <p>UI/UX Designer</p>
          <div className="pt-2">
            <a href="https://wa.link/ll7sld"><button className="bg-[#705C53] text-white rounded-xl w-20 h-10  hover:bg-[#B7B7B7] hover:scale-110 hover:shadow-xl transition duration-800">HIRE ME</button></a>
          </div>
        </div>
        <div className="">
          <div className="md:grid md:grid-cols-3 grid grid-cols-3 divide-x divide-[#705C53] pt-12 px-12 text-center gap-2 text-[#705C53] font-serif ">
            <div>
              <h1 className="flex justify-center md:text-5xl text-2xl"><BiSolidHappyHeartEyes /></h1>
              <h1 className="md:text-5xl text-2xl">50+</h1>
              <p className="md:text-xl">Happy Client</p>
            </div>
            <div className="">
              <h1 className="flex justify-center md:text-5xl text-2xl"><MdFileDownloadDone /></h1>
              <h1 className="md:text-5xl text-2xl">200+</h1>
              <p className="md:text-xl">Completed Project</p>
            </div>
            <div>
              <h1 className="flex justify-center md:text-5xl text-2xl"><FaAward /></h1>
              <h1 className="md:text-5xl text-2xl">2</h1>
              <p className="md:text-xl px-2">Awards Won</p>
          </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:gap-72 gap-6 px-2 md:px-12 md:text-start text-cent pt-12 bg-[#B7B7B7] md:h-72 h-96">
        <div className="border-xl rounded-xl bg-red-500 md:w-60 w-48 md:h-48 h-12">
          <Image
          src={vg}
          alt="brand logo" className="md:h-48 "/>
        </div>
        <div className="flex justify-end">
          <div className="flex">
            <h1></h1>
          </div>
          <div className="flex">
            <p><h1 className="md:text-3xl text-xl font-serif text-[#705C53]">Victor Anuye</h1> <h2 className="text-[#705C53] font-sans">UI/UX ,Graphic Designer,Web Developer</h2>  focusing on creating intuitive and aesthetically pleasing  <br />user interfaces and user experiences. His work likely involves understanding user needs  on design solutions to enhance functionality and engagement in digital products <br /> He collaborates with teams to ensure that design choices meet both user expectations and business goals</p>
          </div>
        </div>
      </div>
      <div className="md:h-40 h-auto bg-[#F5F5F7] ">
        <div className="flex justify-center pt-6">
          <h1 className="text-4xl text-[#705C53] font-serif">What We Offer</h1>
        </div>
        <div className="text-center w-auto flex justify-center text-black pt-2 px-12 md:px-2">
          <p className="flex justify-center font-sans"> A versatile designer specializing in UI/UX, graphic design,and logo creation<br />He crafts user-friendly digital experiences, high-quality visuals,<br /> and impactful logos that embody brand identities, making him a valuable asset for cohesive design projects.</p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-4 grid grid-cols-4 text-center md:h-50 bg-[#F5F5F7] md:pt-2 pt-2 md:px-32 px-2">
        <div className="border-xl rounded-xl bg-[#B7B7B7] md:h-60 h-40 md:w-48 w-20 hover:text-[#705C53] hover:scale-110 hover:shadow-lg transition duration-800">
          <h1 className="flex item-center justify-center text-center place-content-center md:pt-16 pt-12 md:text-6xl text-4xl"><FaCrown /></h1>
          <h1>UI/UX Design</h1>
        </div>
        <div className="border-xl rounded-xl bg-[#B7B7B7] md:h-60 h-40 md:w-48 w-20 hover:text-[#705C53] hover:scale-110 hover:shadow-lg transition duration-800">
          <h1 className="flex item-center justify-center text-center place-content-center md:pt-16 pt-12 md:text-6xl text-4xl"><FaLaptop /></h1>
          <h1>Web Design</h1>
        </div>
        <div className="border-xl rounded-xl bg-[#B7B7B7] md:h-60 h-40 md:w-48 w-20 hover:text-[#705C53] hover:scale-110 hover:shadow-lg transition duration-800">
          <h1 className="flex item-center justify-center text-center place-content-center md:pt-16 pt-12 md:text-6xl text-4xl"><SiAdobeillustrator /></h1>
          <h1>Graphics Design</h1>
        </div>
        <div className="border-xl rounded-xl bg-[#B7B7B7] md:h-60  h-40 md:w-48 w-20 hover:text-[#705C53] hover:scale-110 hover:shadow-lg transition duration-800">
          <h1 className="flex item-center justify-center text-center place-content-center md:pt-16 pt-12 md:text-6xl text-4xl"><BsVectorPen /></h1>
          <h1>Logo Design</h1>
        </div>
      </div>
      <div className="md:h-40 h-auto bg-[#F5F5F7] pt-6 md:pt-6">
        <div className="flex justify-center pt">
          <h1 className="md:text-4xl text-2xl font-serif text-[#705C53]">Check Out Some of My works</h1>
        </div>
        <div className="text-center w-auto flex justify-center text-black md:pt-6 px-12 md:px-2">
          <p className="flex justify-center font-sans">
          Explore Victor Anuye’s designs to see how he blends creativity and functionality across UI/UX, graphic design, and logo creation. <br />Check out his portfolio to discover unique solutions that elevate brand identities and enhance user experiences!</p>
        </div>
      </div>
      <div className=" bg-[#F5F5F7] grid grid-cols-2 md:grid md:grid-cols-4 md:h-94 md:px-40 md:gap-12 px-6">
        <div className="flex bg-red-400 text-center  md:h-60 h-40 w-40 md:w-60 border rounded-xl">
          <Image src={tuneup} alt="" className=" flex " />
        </div>
        <div className="flex bg-red-400 text-center md:h-60 md:w-60 h-40 w-40 border rounded-xl">
          <Image src={piness} alt="" className=" " />
        </div>
        <div className="flex bg-red-400 text-center  md:h-full md:w-60 w-40 h-40 border rounded-xl">
          <Image src={tuneuplogo} alt="" className="flex h-40 md:h-full"/>
        </div>
        <div className="flex bg-red-400 text-center md:h-full md:w-60 w-40 h-40 border rounded-xl">
          <Image src={lilly} alt="" className="flex h-40 md:h-full"/>
        </div>
      </div>
      <div className="flex justify-center gap-12 md:h-40 h-72 pt-12 bg-[#F5F5F7]">
        <div className="flex gap-12 bg-[#705C53] w-96 h-16 md:h-16 justify-between border-xl rounded-2xl px-6 pt-2 pb-2">
          <div className=" flex justify-between text-white ">
            <div className="flex "><h1 className="font-serif">Hire me for your Project <br /><p>your just one step away.</p></h1>
            </div>
          </div>
          <div className="flex rounded-2xl w-20 h-auto justify-center bg-[#B7B7B7] hover:bg-[#F5F5F7] hover:scale-110 hover:shadow-xl transition duration-800">
            <a href="https://wa.link/ll7sld"><button className="text-black font-serif flex justify-center text-center items-center">HIRE</button></a>
          </div>
        </div>
      </div>
      
    </div>
  );
}
