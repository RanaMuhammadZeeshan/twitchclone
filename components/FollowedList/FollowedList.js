import React from 'react'
import SidebarList from '../SidebarList/SidebarList'
import profileImage from '/public/images/xee.jpg'

const FollowedList = ({ sideBarToggle }) => {
  const recommendedListArray = [
    {
      profileImage,
      currentlyPlaying: 'Leagur Of Legends',
      name: 'Zeeshan',
      watchingRightNow: '1.2m',
      onlineStatus: true,
      newVideos: '100 new videos',
    },
    {
      profileImage,
      currentlyPlaying: 'Leagur Of Legends',
      name: 'loltyler1',
      watchingRightNow: '1k',
      onlineStatus: true,
      newVideos: '100 new videos',
    },
    {
      profileImage,
      currentlyPlaying: 'pools, Hot Tubs',
      name: 'John Doe',
      watchingRightNow: '5m',
      onlineStatus: true,
      newVideos: '100 new videos',
    },
    {
      profileImage,
      currentlyPlaying: 'IRL',
      name: 'Jane Doe',
      watchingRightNow: '12.5k',
      onlineStatus: false,
      newVideos: '100 new videos',
    },
  ]

  return (
    <React.Fragment>
      {recommendedListArray?.map(
        ({
          profileImage,
          currentlyPlaying,
          name,
          watchingRightNow,
          onlineStatus,
          newVideos,
        }) => (
          <SidebarList
            key={name}
            sideBarToggle={sideBarToggle}
            profileImage={profileImage}
            currentlyPlaying={currentlyPlaying}
            name={name}
            watchingRightNow={watchingRightNow}
            onlineStatus={onlineStatus}
            newVideos={newVideos}
          />
        )
      )}
    </React.Fragment>
  )
}

export default FollowedList
