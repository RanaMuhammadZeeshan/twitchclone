import React, { useState } from 'react'
import NotificationEmptyCard from './NotificationEmptyCard'

const NotificationSubMenu = ({
  showNotificationToggle,
  setShowNotificationToggle,
}) => {
  const [activeTab, setActiveTab] = useState('')

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div className="absolute top-10 -right-24 bg-whiteThemeBackgroundPrimary dark:bg-darkThemeBackgroundPrimary  w-[28rem] h-[20rem]  shadow-xl rounded-lg overflow-y-scroll scroll-smooth">
      <div className="flex justify-between items-center  py-3 px-1 border-b-2 border-b-whiteThemeBackgroundTertiaryDark dark:border-b-darkThemeBackgroundHover">
        <div className="invisible">T</div>

        <div className="font-semibold  font-twitchFont text-sm capitalize text-center tracking-wider">
          Notifications
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

          <div className="group hover:bg-whiteThemeBackgroundTertiary dark:hover:bg-darkThemeBackgroundHover cursor-pointer p-1 rounded-md mr-2">
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex justify-around items-end pt-6 pb-1 px-2 border-b-1">
        <div className="">
          <button
            className={`inline-block ${
              activeTab === 'All' ? 'focus:text-purplePrimary' : ''
            } capitalize font-twitchFont text-sm  group-hover:text-purplePrimary cursor-pointer`}
            onClick={() => handleTabChange('mytwitch')}
          >
            My twitch
          </button>
          <hr
            className={` ${
              activeTab === 'mytwitch' ? 'visible' : 'invisible'
            } w-full bg-purplePrimary h-1`}
          />
        </div>

        <div>
          <button
            className={`inline-block ${
              activeTab === 'Free' ? 'focus:text-purplePrimary' : ''
            } capitalize font-twitchFont text-sm  group-hover:text-purplePrimary cursor-pointer`}
            onClick={() => handleTabChange('mychannel')}
          >
            my channel
          </button>

          <hr
            className={` ${
              activeTab === 'mychannel' ? 'visible' : 'invisible'
            } w-full bg-purplePrimary h-1`}
          />
        </div>
      </div>
      <hr className="w-full bg-whiteThemeBackgroundTertiaryDark dark:bg-darkThemeBackgroundHover" />

      <div className="flex flex-col mx-10 space-y-4">
        <NotificationEmptyCard />
      </div>
    </div>
  )
}

export default NotificationSubMenu
