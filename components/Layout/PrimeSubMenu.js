import React, { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import OffersCard from './OffersCard'
import PrimeSubMenuHeader from './PrimeSubMenuHeader'

import startFreeloadingImage from '/public/images/start-freeloading.jpg'
import lol from '/public/images/lol.jpg'
import metalSlug from '/public/images/metul-slug.jpg'
import cloudSheep from '/public/images/cloud-sheep.jpg'
import twoPointHospital from '/public/images/twopointhospital.jpg'
import aionClassic from '/public/images/aionclassic.jpg'
import bitsGif from '/public/images/bits.gif'
import blackBit from '/public/images/black-bit.png'
import purplekBit from '/public/images/purple-bit.png'
import blueBit from '/public/images/blue-bit.png'
import greenBit from '/public/images/green-bit.png'
import redBit from '/public/images/red-bit.png'

import BitsList from './BitsList'

const PrimeSubMenu = ({ showPrimeToggle, setShowPrimeToggle, bitsMenu }) => {
  const [mapDataArray, setMapDataArray] = useState([])
  const [activeTab, setActiveTab] = useState('All')

  const primetitle = 'prime gaming loot'
  const bitsTitle = 'Purchase Bits'

  const allGamesArray = useMemo(
    () => [
      {
        heading: 'Prime Day: Start Freeloading',
        picture: startFreeloadingImage,
        category: 'Free with prime',
        company: 'Amazon games studio',
      },
      {
        heading: 'League of Legends: Prime Gaming Capsule',
        picture: lol,
        category: 'In-Game Content',
        company: 'Riot Games, Inc',
      },
    ],
    []
  )

  const freeGamesArray = [
    {
      heading: 'Metal Slug',
      picture: metalSlug,
      category: 'Games with prime',
      company: 'snk',
    },
    {
      heading: 'Cloud Sheep',
      picture: cloudSheep,
      category: 'Games with prime',
      company: 'handy games',
    },
  ]

  const endingSoonGamesArray = [
    {
      heading: 'Two Point Hospital: Thrill Ride Bundle',
      picture: twoPointHospital,
      category: 'In-Game Content',
      company: 'sega',
    },
    {
      heading: 'Aion Classic: Black Sheer Outfit',
      picture: aionClassic,
      category: 'In-Game Content',
      company: 'ncsoft',
    },
  ]

  const bitsArray = [
    {
      numberOfBits: '300',
      bitsIconsArray: [blackBit, purplekBit],
      price: '3.00',
      discount: '29%',
    },
    {
      numberOfBits: '100',
      bitsIconsArray: [blackBit, purplekBit],
      price: '1.40',
      discount: null,
    },
    {
      numberOfBits: '500',
      bitsIconsArray: [blackBit, purplekBit, blueBit],
      price: '13.70',
      discount: '5%',
    },
    {
      numberOfBits: '2000',
      bitsIconsArray: [blackBit, purplekBit, greenBit, blueBit],
      price: '250.20',
      discount: null,
    },
    {
      numberOfBits: '5000',
      bitsIconsArray: [blackBit, purplekBit, greenBit, blueBit, redBit],
      price: '1420.00',
      discount: '30%',
    },
  ]

  const handleTabChange = (tab) => {
    if (tab === 'All') {
      setMapDataArray(allGamesArray)
      setActiveTab('All')
      return
    } else if (tab === 'Free') {
      setMapDataArray(freeGamesArray)
      setActiveTab('Free')
      return
    } else {
      setMapDataArray(endingSoonGamesArray)
      setActiveTab('Ending')
      return
    }
  }

  useEffect(() => {
    setMapDataArray(allGamesArray)
  }, [allGamesArray])

  return (
    <div
      className={`absolute top-10 ${
        bitsMenu ? 'right-10' : '-right-24'
      }  bg-whiteThemeBackgroundPrimary dark:bg-darkThemeBackgroundPrimary w-[28rem] h-[40rem] shadow-xl rounded-lg overflow-y-scroll scroll-smooth overflow-hidden`}
    >
      {/* Header */}
      <div className="flex justify-between items-center  py-3 px-1 border-b-2 border-b-whiteThemeBackgroundTertiaryDark dark:border-b-darkThemeBackgroundHover">
        <div className="invisible">T</div>

        {bitsMenu ? (
          <div className="flex flex-col space-y-1 justify-center items-center">
            <div className="font-semibold  font-twitchFont text-sm capitalize text-center tracking-wider">
              {bitsTitle}
            </div>
            <div className="flex space-x-1 justify-start items-center">
              <p className="font-twitchFont  text-sm">You have</p>
              <div>
                <Image
                  src={bitsGif}
                  alt="bits"
                  width={16}
                  height={16}
                  className=""
                  layout="fixed"
                />
              </div>
              <p className="font-twitchFont  font-semibold text-sm">0 Bits</p>
            </div>
          </div>
        ) : (
          <div className="font-semibold  font-twitchFont text-sm capitalize text-center tracking-wider">
            {primetitle}
          </div>
        )}

        <div className="group hover:bg-whiteThemeBackgroundTertiary dark:hover:bg-darkThemeBackgroundHover cursor-pointer p-1 rounded-md mr-2">
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>

      {/* Section Intro */}
      <div className="mx-6 my-4">
        <PrimeSubMenuHeader bitsMenu={bitsMenu} />
      </div>
      <hr className="w-full bg-whiteTextSecondary dark:bg-darkThemeBackgroundHover mt-4" />
      {/* Section Data */}

      {bitsMenu ? (
        <React.Fragment>
          <div className="flex justify-start items-center py-2 mx-6 border-b-1">
            <div>
              <p className="font-twitchFont text-sm text-whiteTextSecondary dark:text-darkTextPrimary">
                Prices are shown in <span className="font-semibold">USD</span>{' '}
                and <span className="font-semibold">include VAT</span>
              </p>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div className="flex justify-around items-end pt-6 pb-1 px-2 border-b-1">
          <div className="">
            <button
              className={`inline-block ${
                activeTab === 'All' ? 'focus:text-purplePrimary' : ''
              } capitalize font-twitchFont text-sm  group-hover:text-purplePrimary cursor-pointer`}
              onClick={() => handleTabChange('All')}
            >
              All
            </button>
            <hr
              className={` ${
                activeTab === 'All' ? 'visible' : 'invisible'
              } w-full bg-purplePrimary h-1`}
            />
          </div>

          <div>
            <button
              className={`inline-block ${
                activeTab === 'Free' ? 'focus:text-purplePrimary' : ''
              } capitalize font-twitchFont text-sm  group-hover:text-purplePrimary cursor-pointer`}
              onClick={() => handleTabChange('Free')}
            >
              Free games
            </button>

            <hr
              className={` ${
                activeTab === 'Free' ? 'visible' : 'invisible'
              } w-full bg-purplePrimary h-1`}
            />
          </div>

          <div>
            <button
              className={`inline-block ${
                activeTab === 'Ending' ? 'focus:text-purplePrimary' : ''
              } capitalize font-twitchFont text-sm  group-hover:text-purplePrimary cursor-pointer`}
              onClick={() => handleTabChange('Ending')}
            >
              Ending soon
            </button>

            <hr
              className={` ${
                activeTab === 'Ending' ? 'visible' : 'invisible'
              } w-full bg-purplePrimary h-1`}
            />
          </div>
        </div>
      )}

      <hr className="w-full" />

      {bitsMenu ? (
        <React.Fragment>
          {bitsArray?.map(
            ({ numberOfBits, bitsIconsArray, price, discount }) => (
              <BitsList
                key={price}
                numberOfBits={numberOfBits}
                bitsIconsArray={bitsIconsArray}
                price={price}
                discount={discount}
              />
            )
          )}
        </React.Fragment>
      ) : (
        <div className="flex flex-col mx-10 space-y-4">
          {mapDataArray?.map(({ heading, picture, category, company }) => (
            <OffersCard
              key={heading}
              picture={picture}
              category={category}
              company={company}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default PrimeSubMenu
