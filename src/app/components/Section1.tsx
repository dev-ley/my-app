import Content1 from './Content1'
import Navbar from './Navebar'

const Section1 = () => {
  return (
    <section className="relative w-full h-[863px] bg-cover bg-center bg-no-repeat text-white" style={{ backgroundImage: "url('/images/navbar/rectangle9.svg')" }}>
      <Navbar/> 
      <Content1/>
    </section>
  )
}

export default Section1
