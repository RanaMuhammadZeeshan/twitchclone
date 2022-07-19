import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import profileImage from '/public/images/xee.jpg'
import Switch from '../Switch/Switch'

const ProfileMenu = ({ setToggleLanguage, toggleLanguage }) => {
  const [darkMode, setDarkMode] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  const toggleTheme = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      setTheme('light')
      setDarkMode('light')
      return
    } else {
      setTheme('dark')
      setDarkMode('dark')
      return
    }
  }

  return (
    <div
      className={`absolute  ${
        toggleLanguage ? 'hidden' : ''
      } top-[40px] right-3 bg-whiteThemeBackgroundPrimary dark:bg-darkThemeBackgroundPrimary dark:text-darkTextPrimary shadow-xl shadow-whiteThemeBackgroundTertiaryDark dark:shadow-darkThemeBackgroundPrimary rounded-md w-52 h-[570px] overflow-y-scroll scroll-smooth hideScrollBarBrowser hideScrollBarBrowserSecondary`}
    >
      <div className="flex flex-col mx-4">
        {/* Profile */}
        <div className="flex justify-start items-center py-6 px-2 space-x-2">
          <div>
            <Image
              src={profileImage}
              width={'40'}
              height={'40'}
              layout="fixed"
              alt="user"
              className="rounded-full"
            />
          </div>

          <div>
            <h3 className="font-twitchFont text-xs  font-semibold">Zeeshan</h3>
          </div>
        </div>
        <hr className="w-full bg-whiteThemeBackgroundTertiary" />
        {/* Channel */}

        <div className="flex flex-col space-y-2 justify-center items-start my-3">
          <div className="flex space-x-2 justify-start items-center w-full rounded-md hover:bg-whiteThemeBackgroundTertiaryDark dark:hover:bg-darkThemeBackgroundHover hover:cursor-pointer px-1">
            <div>
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

            <div>
              <p className="font-twitchFont text-xs capitalize ">Channel</p>
            </div>
          </div>

          <div className="flex space-x-2 justify-start items-center w-full rounded-md hover:bg-whiteThemeBackgroundTertiaryDark dark:hover:bg-darkThemeBackgroundHover hover:cursor-pointer  px-1">
            <div>
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
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>

            <div>
              <p className="font-twitchFont text-xs capitalize ">
                video producer
              </p>
            </div>
          </div>

          <div className="flex space-x-2 justify-start items-center w-full rounded-md hover:bg-whiteThemeBackgroundTertiaryDark dark:hover:bg-darkThemeBackgroundHover hover:cursor-pointer  px-1">
            <div>
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
                  d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>

            <div>
              <p className="font-twitchFont text-xs capitalize ">
                creator dashboard
              </p>
            </div>
          </div>

          <div className="flex space-x-2 justify-start items-center w-full rounded-md hover:bg-whiteThemeBackgroundTertiaryDark dark:hover:bg-darkThemeBackgroundHover hover:cursor-pointer  px-1">
            <div>
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>

            <div>
              <p className="font-twitchFont text-xs capitalize ">safety</p>
            </div>
          </div>
        </div>

        {/* Emote */}
        <hr className="w-full bg-whiteThemeBackgroundTertiary" />

        <div className="flex flex-col space-y-2 justify-center items-start my-3">
          <div className="flex space-x-2 justify-start items-center w-full rounded-md hover:bg-whiteThemeBackgroundTertiaryDark dark:hover:bg-darkThemeBackgroundHover hover:cursor-pointer px-1">
            <div>
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
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div>
              <p className="font-twitchFont text-xs capitalize ">
                Emote attribution
              </p>
            </div>
          </div>
        </div>

        {/* Subscription */}
        <hr className="w-full bg-whiteThemeBackgroundTertiary" />
        <div className="flex flex-col space-y-2 justify-center items-start my-3">
          <div className="flex space-x-2 justify-start items-center w-full rounded-md hover:bg-whiteThemeBackgroundTertiaryDark dark:hover:bg-darkThemeBackgroundHover hover:cursor-pointer px-1">
            <div>
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
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>

            <div>
              <p className="font-twitchFont text-xs capitalize ">
                Subscriptions
              </p>
            </div>
          </div>

          <div className="flex space-x-2 justify-start items-center w-full rounded-md hover:bg-whiteThemeBackgroundTertiaryDark dark:hover:bg-darkThemeBackgroundHover hover:cursor-pointer  px-1">
            <div>
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
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </div>

            <div>
              <p className="font-twitchFont text-xs capitalize ">Drops</p>
            </div>
          </div>

          <div className="flex space-x-2 justify-start items-center w-full rounded-md hover:bg-whiteThemeBackgroundTertiaryDark dark:hover:bg-darkThemeBackgroundHover hover:cursor-pointer  px-1">
            <div>
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
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>

            <div>
              <p className="font-twitchFont text-xs capitalize ">Wallet</p>
            </div>
          </div>
        </div>

        {/* Settings */}
        <hr className="w-full bg-whiteThemeBackgroundTertiary" />
        <div className="flex flex-col space-y-2 justify-center items-start my-3">
          <div className="flex space-x-2 justify-start items-center w-full rounded-md hover:bg-whiteThemeBackgroundTertiaryDark dark:hover:bg-darkThemeBackgroundHover hover:cursor-pointer px-1">
            <div>
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
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>

            <div>
              <p className="font-twitchFont text-xs capitalize ">Settings</p>
            </div>
          </div>

          <div
            className="flex  justify-between items-center w-full rounded-md hover:bg-whiteThemeBackgroundTertiaryDark dark:hover:bg-darkThemeBackgroundHover hover:cursor-pointer  px-1"
            onClick={() => {
              setToggleLanguage(!toggleLanguage)
              // setToggleProfileMenu(!toggleProfileMenu)
            }}
          >
            <div className="flex space-x-2 justify-start items-start">
              <div>
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
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>

              <div className="mt-1">
                <p className="font-twitchFont text-xs capitalize ">Languages</p>
              </div>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>

          <div
            className="flex  justify-between items-center w-full rounded-md hover:bg-whiteThemeBackgroundTertiaryDark dark:hover:bg-darkThemeBackgroundHover hover:cursor-pointer  px-1"
            onClick={() => {
              toggleTheme()
            }}
          >
            <div className="flex space-x-2 justify-start items-start">
              <div>
                {darkMode === 'dark' ? (
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
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
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
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </div>

              <div className="mt-1">
                <p className="font-twitchFont text-xs capitalize ">
                  {darkMode === 'dark' ? 'Light theme' : 'Dark theme'}
                </p>
              </div>
            </div>

            {/* <div>
              <Switch />
            </div> */}
          </div>
        </div>

        {/* Logout */}

        <hr className="w-full bg-whiteThemeBackgroundTertiary" />

        <div className="flex flex-col space-y-2 justify-center items-start my-3">
          <div className="flex space-x-2 justify-start items-center w-full rounded-md hover:bg-whiteThemeBackgroundTertiaryDark dark:hover:bg-darkThemeBackgroundHover hover:cursor-pointer px-1">
            <div>
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
            </div>

            <div>
              <p className="font-twitchFont text-xs capitalize ">Log out</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileMenu
