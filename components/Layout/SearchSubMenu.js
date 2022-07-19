import Image from 'next/image'
import React from 'react'

import profileImage from '/public/images/xee.jpg'

const SearchSubMenu = ({ largeView }) => {
  const searchListArray = [
    {
      picture: profileImage,
      name: 'Zeeshan',
      verified: true,
      statusLive: true,
    },
    { picture: profileImage, name: 'John', verified: true, statusLive: true },
    {
      picture: profileImage,
      name: 'BrettLee',
      verified: false,
      statusLive: false,
    },
    { picture: profileImage, name: 'Ali', verified: true, statusLive: true },
    {
      picture: profileImage,
      name: 'Loltyler1',
      verified: false,
      statusLive: true,
    },
  ]

  return (
    <div
      className={`absolute top-[40px]  ${
        !largeView ? '-right-32' : '-right-4 2xl:right-10'
      } bg-whiteThemeBackgroundPrimary text-whiteTextPrimary dark:bg-darkThemeBackgroundPrimary dark:text-darkTextPrimary max-h-[550px] w-96 shadow-xl rounded-lg overflow-y-scroll scroll-smooth hideScrollBarBrowser hideScrollBarBrowserSecondary`}
    >
      <div className="flex flex-col mx-2">
        {/* Search */}
        {!largeView && (
          <div className="flex space-x-1">
            {/* Input */}
            <div className="mt-1">
              <input
                type={'text'}
                placeholder="Search"
                className="form-input bg-whiteThemeBackgroundTertiary placeholder:text-whiteTextSecondary  dark:bg-darkThemeBackgroundHover  w-[20.9rem] h-8 outline-none  rounded-l-md border-0 dark:placeholder:text-darkTextSecondary"
              />
            </div>

            {/* Icon */}

            <div className="bg-whiteThemeBackgroundTertiary text-whiteTextSecondary dark:bg-darkThemeBackgroundHover dark:text-darkTextSecondary h-8 flex justify-center items-center rounded-r-md cursor-pointer mt-1">
              <button className="px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
        {searchListArray?.map(({ picture, name, verified, statusLive }) => (
          <div key={name} className="flex flex-col space-y-2">
            {/* Search List */}
            <div className="flex justify-between items-center my-2">
              {/* Detail   */}
              <div className="flex space-x-1 items-center">
                {/* Picture */}
                <div className=" flex justify-center items-center cursor-pointer">
                  <Image
                    src={picture}
                    width={'32'}
                    height={'32'}
                    layout="fixed"
                    alt="user"
                    className="rounded-full"
                  />
                </div>

                {/* Name */}
                <div>
                  <span className="inline-block font-twitchFont text-sm">
                    {name}
                  </span>
                </div>

                {/* Verified */}
                {verified && (
                  <div className="relative w-3 h-3 bg-purplePrimary text-darkTextPrimary rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 absolute inset-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Status */}
              {statusLive && (
                <div>
                  <span className="inline-block text-center font-twitchFont font-semibold uppercase bg-redPrimary text-darkTextPrimary text-xs tracking-wide px-3 py-[3px] rounded-md">
                    Live
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchSubMenu
