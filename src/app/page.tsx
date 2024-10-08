import Contact from "./components/Contact/Contact";
import FastOrfanize from "./components/FastOrganize/FastOrfanize";
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";
import HeadLight from "./components/HeadLight/HeadLight";
import Newsletter from "./components/Newsletter/Newsletter";
import Partners from "./components/Partners/Partners";
import Pricing from "./components/Pricing/Pricing";
import Testimonials from "./components/Testimonials/Testimonials";

export default function Home() {
  return (
    <main>
      <HeadLight />
      <Feature />
      <FastOrfanize />
      <Newsletter />
      <Partners />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
