import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <h2 className='font-extrabold text-2xl text-primary'>
      <Link href="/">
      Noteflow
      </Link>
    </h2>
  )
}

export default Logo