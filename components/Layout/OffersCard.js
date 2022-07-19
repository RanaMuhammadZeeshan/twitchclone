import Image from 'next/image'
import React from 'react'
import StartFreeTrialButton from './StartFreeTrialButton'

import startFreeloadingImage from '/public/images/start-freeloading.jpg'

const OffersCard = ({ heading, picture, category, company }) => {
  return (
    <React.Fragment>
      <div className="flex flex-col space-y-2">
        <div>
          <h2 className="capitalize font-twitchFont text-lg font-semibold">
            {heading}
          </h2>
        </div>

        <div>
          <Image
            alt="game"
            src={picture}
            width={400}
            height={220}
            className="rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <span className="font-twitchFont text-xs ">{category}</span>
          <span className="font-twitchFont text-xs ">{company}</span>
        </div>

        <div className="mt-2">
          <StartFreeTrialButton />
        </div>
      </div>
      <hr className="w-full" />
    </React.Fragment>
  )
}

export default OffersCard
