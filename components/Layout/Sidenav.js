import React from 'react'
import Image from 'next/image'
import profileImage from '/public/images/xee.jpg'
import RecommendedList from '../RecommendedList/RecommendedList'
import FollowedList from '../FollowedList/FollowedList'

const Sidenav = ({ setSideBarToggle, sideBarToggle, windowWidthSize }) => {
  return (
    <React.Fragment>
      <div className={`flex flex-col `}>
        <div className={`flex flex-col justify-center  space-y-4  py-2`}>
          {windowWidthSize.width >= 1200 && (
            <div className="flex justify-around">
              {sideBarToggle && (
                <div className="hidden 2xl:block py-1">
                  <p className="text-sm uppercase font-semibold text-center">
                    followed channels
                  </p>
                </div>
              )}
              <div
                className="cursor-pointer hover:bg-whiteThemeBackgroundTertiaryDark dark:hover:bg-darkThemeBackgroundHover px-1 2xl:px-2 py-1 rounded-md"
                onClick={() => setSideBarToggle(!sideBarToggle)}
              >
                {sideBarToggle ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                )}
              </div>
            </div>
          )}

          {!sideBarToggle && (
            <div className="px-2 2xl:px-2 py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            </div>
          )}

          <FollowedList sideBarToggle={sideBarToggle} />

          {windowWidthSize.width >= 1200 && (
            <div className="flex justify-around">
              {sideBarToggle && (
                <div className="hidden 2xl:block py-1">
                  <p className="text-sm uppercase font-semibold text-center">
                    recommended channels
                  </p>
                </div>
              )}
              <div className="invisible  px-1 2xl:px-2 py-1 ">
                <div></div>
              </div>
            </div>
          )}

          {!sideBarToggle && (
            <div className="px-2 2xl:px-3 py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}

          <RecommendedList sideBarToggle={sideBarToggle} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Sidenav
