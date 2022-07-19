import Image from 'next/image'
import React from 'react'

const BitsList = ({ numberOfBits, bitsIconsArray, price, discount }) => {
  return (
    <div>
      <div className="flex py-6 mx-6 items-center justify-between">
        {/* Left */}
        <div className="flex flex-col space-y-1">
          <div>
            <p className="font-twitchFont font-semibold text-sm">
              {numberOfBits} Bits
            </p>
          </div>

          <div className="flex space-x-1">
            {bitsIconsArray?.map((biticon, index) => (
              <Image
                key={index}
                src={biticon}
                alt={biticon}
                width={24}
                height={24}
                layout="fixed"
              />
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col space-y-1">
          <div className="bg-purpleSecondary px-4 py-1 rounded-md hover:bg-purplePrimary">
            <button className="font-twitchFont font-bold text-sm text-darkTextPrimary  w-20 duration-200">
              $ {price}
            </button>
          </div>
          {discount && (
            <div>
              <p className="font-twitchFont text-xs text-whiteTextSecondary dark:text-darkTextPrimary">
                {discount} discount
              </p>
            </div>
          )}
        </div>
      </div>
      <hr className="w-full" />
    </div>
  )
}

export default BitsList
