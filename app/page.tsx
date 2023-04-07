import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const Page = () => {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default Page;
