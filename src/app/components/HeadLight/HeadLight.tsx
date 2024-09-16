import Content1 from './Herolight'
import Navbar from './Navbar'

const HeadLight = () => {
  return (
    <section className="relative w-full h-[863px] bg-cover bg-center bg-no-repeat text-white" style={{ backgroundImage: "url('/images/navbar/rectangle9.png')" }}>
      <Navbar/> 
      <Content1/>
    </section>
  )
}

export default HeadLight
