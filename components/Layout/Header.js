import React from 'react'

import HeaderRight from './HeaderRight'
import HeaderMiddle from './HeaderMiddle'
import HeaderLeft from './HeaderLeft'

const Header = () => {
  return (
    <React.Fragment>
      <div className="flex justify-between items-center mx-2 h-12">
        {/* Left Side */}
        <div className="flex space-x-4 md:space-x-8">
          <HeaderLeft />
        </div>

        {/* Middle */}
        <div>
          <HeaderMiddle />
        </div>

        {/* Right */}
        <div className="flex space-x-1 md:space-x-4">
          <HeaderRight />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header
