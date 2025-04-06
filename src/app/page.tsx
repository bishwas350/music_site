import FutureCorse from "./component/FutureCorse"
import HeroSection from "./component/HeroSection"


const Home = () => {
  return (
    <>
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
      <div className="">
        <HeroSection/>
        <FutureCorse/>
      </div>
    </main>
    </>
  )
}

export default Home