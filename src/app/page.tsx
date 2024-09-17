import FastOrfanize from "./components/FastOrganize/FastOrfanize";
import Feature from "./components/Feature/Feature";
import HeadLight from "./components/HeadLight/HeadLight";
import Newsletter from "./components/Newsletter/Newsletter";
import Partners from "./components/Partners/Partners";

export default function Home() {
  return (
    <main>
      <HeadLight />
      <Feature />
      <FastOrfanize />
      <Newsletter />
      <Partners />
    </main>
  );
}
