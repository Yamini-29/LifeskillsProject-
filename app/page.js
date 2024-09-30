import Courselist from "@/components/CourseList";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-orange-800 to-pink-300 min-h-screen">
    <Header/>
    <Courselist/>
    <Footer/>
    </div>
  );

}
