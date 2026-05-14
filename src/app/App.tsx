import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { QuoteBanner } from "./components/QuoteBanner";
import { About } from "./components/About";
import { Courses } from "./components/Courses";
import { CtaBanner } from "./components/CtaBanner";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <main>
        <Hero />
        <QuoteBanner />
        <About />
        <Courses />
        <CtaBanner />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
