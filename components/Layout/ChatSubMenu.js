import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

import messagePersonImage from '/public/images/xee.jpg'

const ChatSubMenu = ({ setShowChatToggle, showChatToggle }) => {
  const searchListRef = useRef(null)
  const [toggleDeleteChatButton, setToggleDeleteChatButton] = useState(false)

  useEffect(() => {
    if (!toggleDeleteChatButton) return

    function handleClick(event) {
      if (!searchListRef.current.contains(event.target)) {
        setToggleDeleteChatButton(!toggleDeleteChatButton)
      }
    }

    window.addEventListener('mouseleave', handleClick)

    return () => {
      window.removeEventListener('mouseleave', handleClick)
    }
  }, [toggleDeleteChatButton])

  return (
    <div className="absolute top-10 right-12 bg-whiteThemeBackgroundPrimary dark:bg-darkThemeBackgroundPrimary w-[28rem] h-[20rem]  shadow-xl rounded-lg overflow-y-scroll scroll-smooth">
      <div className="flex justify-between items-center  py-3 px-1 border-b-2 border-b-whiteThemeBackgroundTertiaryDark dark:border-b-darkThemeBackgroundHover">
        <div className="invisible">T</div>

        <div className="font-semibold  font-twitchFont text-sm capitalize text-center tracking-wider">
          Whispers
        </div>

        <div className="flex space-x-2 items-center justify-between">
          <div className="group hover:bg-whiteThemeBackgroundTertiary dark:hover:bg-darkThemeBackgroundHover cursor-pointer p-1 rounded-md mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 md:h-6 md:w-6 group-hover:bg-whiteThemeBackgroundTertiary dark:group-hover:bg-darkThemeBackgroundHover"
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

          <div className="group hover:bg-whiteThemeBackgroundTertiary dark:hover:bg-darkThemeBackgroundHover  cursor-pointer p-1 rounded-md mr-2">
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Search */}

      <div className="w-full bg-whiteThemeBackgroundTertiary dark:bg-darkThemeBackgroundSecondary py-1">
        <div className="flex justify-start items-center mx-3 bg-whiteThemeBackgroundTertiaryDark dark:bg-darkThemeBackgroundHover px-4 py-1 rounded-md">
          {/* Icon */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6 group-hover:bg-whiteThemeBackgroundTertiary dark:group-hover:bg-darkThemeBackgroundHover cursor-pointer"
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
          </div>

          {/* Input */}
          <div>
            <input
              type={'text'}
              placeholder="Search For People"
              className="form-input outline-none bg-inherit h-6 w-[23rem] border-none placeholder:font-twitchFont placeholder:text-sm placeholder:text-whiteTextSecondary dark:placeholder:text-darkTextTertiary"
            />
          </div>
        </div>
      </div>

      {/* Search List */}
      <div
        ref={searchListRef}
        className="relative mx-2 py-4 cursor-pointer overflow-x-hidden"
        onMouseEnter={() => setToggleDeleteChatButton(!toggleDeleteChatButton)}
        onMouseLeave={() => setToggleDeleteChatButton(!toggleDeleteChatButton)}
      >
        <hr className="w-full" />

        <div className=" hover:bg-whiteThemeBackgroundTertiary dark:hover:bg-darkThemeBackgroundHover">
          <div className="flex justify-start items-center space-x-2 ">
            {/* Image */}
            <div className="py-2 flex justify-center items-center cursor-pointer">
              <Image
                src={messagePersonImage}
                width={'32'}
                height={'32'}
                layout="fixed"
                alt="user"
                className="rounded-full"
              />
            </div>

            <div className="flex py-2 flex-col">
              {/* Name */}
              <div>
                <h3 className="font-twitchFont font-semibold text-sm">
                  Zeeshan
                </h3>
              </div>

              {/* Message Preview */}
              <div className="flex justify-start items-center space-x-1">
                <p className="font-twitchFont text-whiteTextSecondary dark:text-darkTextPrimary text-sm">
                  !League
                </p>
                <div className="flex justify-center items-center mt-[2px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-twitchFont text-whiteTextSecondary dark:text-darkTextPrimary text-sm">
                    message preview
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="w-full" />

        <div
          className={`absolute bg-whiteThemeBackgroundPrimary dark:bg-darkThemeBackgroundPrimary hover:bg-whiteThemeBackgroundTertiary dark:hover:bg-darkThemeBackgroundHover top-8 bottom-0 ${
            toggleDeleteChatButton ? 'left-[23rem]' : 'left-[50rem]'
          } right-0 h-7 w-8  shadow-md rounded-md transform -traslate-x-[23rem]  duration-300`}
        >
          <div className="w-3 h-5 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute top-1 left-[6px] right-0 bottom-0 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatSubMenu
