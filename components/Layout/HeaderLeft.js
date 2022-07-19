import Link from 'next/link'
import React from 'react'
import BrouseSmall from './BrouseSmall'

const HeaderLeft = () => {
  return (
    <React.Fragment>
      {/* Icon */}
      <div className="flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 48 48"
          fill="#000000"
          className="cursor-pointer p-2  h-11 w-11 md:h14 md:w-14"
        >
          <path
            fill="#7e57c2"
            d="M42,27.676c-3,3.441-6,6.882-9,10.324c-2.333,0-4.667,0-7,0c-2.333,2-4.667,4-7,6c-1,0-2,0-3,0	c0-2,0-4,0-6c-3.333,0-6.667,0-10,0c0-7.431,0-14.863,0-22.294C7.455,12.804,8.909,9.902,10.364,7C20.909,7,31.455,7,42,7	C42,13.892,42,20.784,42,27.676z"
          ></path>
          <path
            fill="#fafafa"
            d="M39,26.369c-1.667,1.877-3.333,3.754-5,5.631c-2.333,0-4.667,0-7,0c-2.333,2-4.667,4-7,6c0-2,0-4,0-6	c-2.667-0.008-5.333-0.016-8-0.024c0-7.326,0-14.651,0-21.976c9,0,18,0,27,0C39,15.456,39,20.912,39,26.369z"
          ></path>
          <rect width="3" height="10" x="21" y="16" fill="#7e57c2"></rect>
          <rect width="3" height="10" x="30" y="16" fill="#7e57c2"></rect>
        </svg>
      </div>

      {/* Following */}
      <div className="hidden md:flex justify-center items-center">
        <Link href={'/pages/browse'}>
          <a className=" text-xs lg:text-lg font-semibold  cursor-pointer hover:text-purplePrimary font-twitchFont leading-6">
            Following
          </a>
        </Link>
      </div>

      <div className="flex md:hidden justify-center items-center">
        <Link href={'/pages/browse'}>
          <a className="group hover:bg-whiteThemeBackgroundTertiary  p-1 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 cursor-pointer hover:text-purplePrimary group-hover:bg-whiteThemeBackgroundTertiary  text-xs font-semibold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </a>
        </Link>
      </div>

      {/* Browse */}
      <div className="hidden md:flex justify-center items-center">
        <Link href={'/pages/browse'}>
          <a className=" text-xs lg:text-lg font-semibold  cursor-pointer hover:text-purplePrimary font-twitchFont leading-6">
            Browse
          </a>
        </Link>
      </div>

      <div className="flex md:hidden justify-center items-center">
        <Link href={'/pages/browse'}>
          <a className="group hover:bg-whiteThemeBackgroundTertiary  p-1 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 cursor-pointer hover:text-purplePrimary group-hover:bg-whiteThemeBackgroundTertiary  text-xs font-semibold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </a>
        </Link>
      </div>

      {/* Dots Icon */}
      <BrouseSmall />
    </React.Fragment>
  )
}

export default HeaderLeft
