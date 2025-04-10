'use client'

import { MorphingText } from '@/components/magicui/morphing-text'
import { ThreeDMarquee } from '@/components/ui/3d-marquee'

function Marquee() {
    const images = [
        
        "/music1.jpg",
        "/music2.jpg",
        "/music3.jpg",
        "/music4.jpg",
        "/music5.jpg",
        "/music6.jpg",
        "/music7.jpg",
        "/music8.jpg",
        "/music9.jpg",
        "/music10.jpg",
        "/music11.jpg",
        "/music12.jpg",
        "/music13.jpg",
        "/music14.jpg",
        "/music15.jpg",
        "/music16.jpg",
        "/music17.jpg",
        "/music18.jpg",
        "/music19.jpg",
        "/music20.jpg",
        "/music21.jpg",
        "/music22.jpg",
        "/music23.jpg",
        "/music24.jpg",
        "/music25.jpg",
        "/music26.jpg",
        "/music27.jpg",
        "/music28.jpg",
        "/music29.jpg",
        "/music30.jpg",
        "/music31.jpg",
    ]
    const texts = [
        "Feel",
        "The",
        "Music",
        "Feel",
        "The",
        "Beat",
      ];
  return (
    <>
    <div className="mx-auto  w-full relative">
        <ThreeDMarquee images={images}/>
            <div className="absolute flex items-center justify-center top-[50%] left-[40%]">
            <MorphingText texts={texts} />
            </div>
    </div>
    </>
  )
}

export default Marquee