import React from 'react'

function Container({className, children}: {className?: string; children: React.ReactNode}) {
  return (
    <>
    <div className={`max-w-6xl m-auto ${className}`}>{children}</div>
    </>
  )
}

export default Container