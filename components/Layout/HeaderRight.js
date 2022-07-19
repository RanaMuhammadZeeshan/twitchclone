import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import SearchSmall from './SearchSmall'

import profileImage from '/public/images/xee.jpg'
import PrimeSubMenu from './PrimeSubMenu'
import NotificationSubMenu from './NotificationSubMenu'
import ChatSubMenu from './ChatSubMenu'
import ProfileMenu from './ProfileMenu'
import LanguageMenu from './LanguageMenu'

const HeaderRight = () => {
  const primeRef = useRef(null)
  const notificationRef = useRef(null)
  const chatRef = useRef(null)
  const bitsRef = useRef(null)
  const profileRef = useRef(null)

  const [showPrimeToggle, setShowPrimeToggle] = useState(false)
  const [toggleBits, setToggleBits] = useState(false)
  const [showNotificationToggle, setShowNotificationToggle] = useState(false)
  const [showChatToggle, setShowChatToggle] = useState(false)
  const [toggleProfileMenu, setToggleProfileMenu] = useState(false)
  const [toggleLanguage, setToggleLanguage] = useState(false)

  useEffect(() => {
    if (!showPrimeToggle) return

    function handleClick(event) {
      if (!primeRef.current.contains(event.target)) {
        setShowPrimeToggle(!showPrimeToggle)
      }
    }

    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [showPrimeToggle])

  useEffect(() => {
    if (!toggleBits) return

    function handleClick(event) {
      if (!bitsRef.current.contains(event.target)) {
        setToggleBits(!toggleBits)
      }
    }

    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [toggleBits])

  useEffect(() => {
    if (!showNotificationToggle) return

    function handleClick(event) {
      if (!notificationRef.current.contains(event.target)) {
        setShowNotificationToggle(!showNotificationToggle)
      }
    }

    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [showNotificationToggle])

  useEffect(() => {
    if (!showChatToggle) return

    function handleClick(event) {
      if (!chatRef.current.contains(event.target)) {
        setShowChatToggle(!showChatToggle)
      }
    }

    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [showChatToggle])

  useEffect(() => {
    if (!toggleProfileMenu) return

    function handleClick(event) {
      if (!profileRef.current.contains(event.target)) {
        setToggleProfileMenu(!toggleProfileMenu)
      }
    }

    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [toggleProfileMenu])

  useEffect(() => {
    if (!toggleLanguage) return

    function handleClick(event) {
      if (!profileRef.current.contains(event.target)) {
        setToggleLanguage(!toggleLanguage)
      }
    }

    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [toggleLanguage])

  return (
    <React.Fragment>
      <SearchSmall />

      {/* Prime */}
      <div ref={primeRef} className="relative flex items-center justify-center">
        <div className="group hover:bg-whiteThemeBackgroundTertiary dark:hover:bg-darkThemeBackgroundHover cursor-pointer p-1 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 md:h-6 md:w-6 group-hover:bg-whiteThemeBackgroundTertiary dark:group-hover:bg-darkThemeBackgroundHover"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            onClick={() => setShowPrimeToggle(!showPrimeToggle)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>

        {showPrimeToggle && (
          <PrimeSubMenu
            showPrimeToggle={showPrimeToggle}
            setShowPrimeToggle={setShowPrimeToggle}
            bitsMenu={false}
          />
        )}
      </div>

      {/* Notification */}
      <div
        ref={notificationRef}
        className="relative flex justify-center items-center"
      >
        <div className="group hover:bg-whiteThemeBackgroundTertiary dark:hover:bg-darkThemeBackgroundHover cursor-pointer p-1 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 md:h-6 md:w-6 group-hover:bg-whiteThemeBackgroundTertiary dark:group-hover:bg-darkThemeBackgroundHover"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            onClick={() => setShowNotificationToggle(!showNotificationToggle)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg>
        </div>
        {showNotificationToggle && (
          <NotificationSubMenu
            setShowNotificationToggle={setShowNotificationToggle}
            showNotificationToggle={showNotificationToggle}
          />
        )}
      </div>

      {/* Chat */}
      <div ref={chatRef} className="flex justify-center items-center">
        <div className="group hover:bg-whiteThemeBackgroundTertiary dark:hover:bg-darkThemeBackgroundHover cursor-pointer p-1 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 md:h-6 md:w-6 group-hover:bg-whiteThemeBackgroundTertiary dark:group-hover:bg-darkThemeBackgroundHover"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            onClick={() => setShowChatToggle(!showChatToggle)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
            />
          </svg>
        </div>

        {showChatToggle && (
          <ChatSubMenu
            setShowChatToggle={setShowChatToggle}
            showChatToggle={showChatToggle}
          />
        )}
      </div>

      {/* Get Bits */}
      <div ref={bitsRef} className="flex justify-center items-center">
        <div className="group flex justify-center items-center 2xl:bg-whiteThemeBackgroundTertiary 2xl:hover:bg-whiteThemeBackgroundTertiaryDark  dark:2xl:bg-darkThemeBackgroundPrimary dark:hover:bg-darkThemeBackgroundHover hover:bg-whiteThemeBackgroundTertiary  px-3 py-2 2xl:py-1 space-x-1 rounded-md cursor-pointer">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 md:h-6 md:w-6 2xl:w-4 2xl:h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              onClick={() => setToggleBits(!toggleBits)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <div className=" hidden 2xl:block">
            <span
              className="inline-block"
              onClick={() => setToggleBits(!toggleBits)}
            >
              Get Bits
            </span>
          </div>
        </div>

        {toggleBits && (
          <PrimeSubMenu
            showPrimeToggle={toggleBits}
            setShowPrimeToggle={setToggleBits}
            bitsMenu={true}
          />
        )}
      </div>

      {/* User Avatar */}
      <div
        ref={profileRef}
        className="relative flex justify-center items-center"
      >
        <div>
          <Image
            src={profileImage}
            width={'32'}
            height={'32'}
            layout="fixed"
            alt="user"
            className="rounded-full cursor-pointer"
            onClick={() => {
              toggleLanguage && setToggleLanguage(false)
              setToggleProfileMenu(!toggleProfileMenu)
            }}
          />
        </div>

        {toggleProfileMenu && (
          <ProfileMenu
            setToggleLanguage={setToggleLanguage}
            toggleLanguage={toggleLanguage}
            setToggleProfileMenu={setToggleProfileMenu}
            toggleProfileMenu={toggleProfileMenu}
          />
        )}
        {toggleLanguage && (
          <LanguageMenu
            setToggleLanguage={setToggleLanguage}
            toggleLanguage={toggleLanguage}
          />
        )}
      </div>
    </React.Fragment>
  )
}

export default HeaderRight
