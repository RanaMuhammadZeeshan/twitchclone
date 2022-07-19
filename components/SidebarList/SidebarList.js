import React from 'react'
import Image from 'next/image'

const SidebarList = ({
  sideBarToggle,
  profileImage,
  currentlyPlaying,
  name,
  watchingRightNow,
  onlineStatus,
  newVideos,
}) => {
  return (
    <div className="flex">
      <div className="px-2 2xl:px-2 py-1 rounded-md">
        <Image
          src={profileImage}
          width={'32'}
          height={'32'}
          layout="fixed"
          alt="user"
          className={`${
            !onlineStatus ? 'grayscale' : ''
          } rounded-full cursor-pointer`}
        />
      </div>
      {sideBarToggle && (
        <div className="flex justify-between items-center space-x-5">
          <div className="flex flex-col">
            <div>
              <p className="text-xs">{name}</p>
            </div>
            <div>
              {onlineStatus ? (
                <p className="text-xs text-whiteTextSecondary dark:text-darkTextTertiary">
                  {currentlyPlaying}
                </p>
              ) : (
                <p className="text-xs text-whiteTextSecondary dark:text-darkTextTertiary">
                  {newVideos}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-between items-center space-x-2">
            {onlineStatus ? (
              <React.Fragment>
                <div className="w-2 h-2 bg-redPrimary rounded-full"></div>
                <div>
                  <p className="text-sm">{watchingRightNow}</p>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <p className="text-sm">Offline</p>
              </React.Fragment>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default SidebarList
