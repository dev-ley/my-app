import Feature from "./components/Feature/Feature";
import HeadLight from "./components/HeadLight/HeadLight";

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center">
      <HeadLight/>
      <Feature/>
    </main>
  );
}
