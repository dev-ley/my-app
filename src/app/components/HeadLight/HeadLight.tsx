import Herolight from './Herolight'
import Navbar from './Navbar'

const HeadLight = () => {
  return (
    <section className="relative w-full h-[863px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/navbar/rectangle9.png')" }}>
      <Navbar/> 
      <Herolight/>
    </section>
  )
}

export default HeadLight
