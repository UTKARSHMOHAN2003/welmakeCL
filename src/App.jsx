import ProductShowcase from "./Components/Addsection";
import Footer from "./Components/Footer";
import HeroSection from "./Components/Herosection";
import WhyWelMakeSection from "./Components/Midsection";
import WelMakeNavbar from "./Components/Navbar";
import TestimonialCarousel from "./Components/TestimonialCarousel";

export default function App() {
  return (
    <div className="">
      <WelMakeNavbar></WelMakeNavbar>
      <HeroSection></HeroSection>
      <WhyWelMakeSection></WhyWelMakeSection>
      <ProductShowcase></ProductShowcase>
      <TestimonialCarousel/>
      <Footer/>
    </div>
  );
}
