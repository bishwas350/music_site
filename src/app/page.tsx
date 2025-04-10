import Cercle from "./component/Cercle"
import FutureCorse from "./component/FutureCorse"
import HeroSection from "./component/HeroSection"
import InfaniteCard from "./component/InfaniteCard"
import Marquee from "./component/Marquee"
import Repple from "./component/Repple"


const Home = () => {
  return (
    <>
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
      <div className="">
        <HeroSection/>
        <FutureCorse/>
        <InfaniteCard/>
        <Repple/>
        <Marquee/>
        <Cercle/>
      </div>
    </main>
    </>
  )
}

export default Home