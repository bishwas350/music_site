import { Ripple } from '@/components/magicui/ripple'
import React from 'react'

function Repple() {
  return (
    <>
    <div className="">
    <div className="py-96 relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
        Music
      </p>
      <Ripple />
    </div>
    </div>
    </>
  )
}

export default Repple