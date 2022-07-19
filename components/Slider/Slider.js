import React from 'react'
import Image from 'next/image'
import slideImage from '/public/images/xee.jpg'

const Slider = () => {
  const imageData = [
    {
      image: slideImage,
    },
  ]
  return (
    <React.Fragment>
      {/* <div className="w-full flex justify-center items-center mx-auto">
        {imageData?.map(({ image }) => (
          <div key={image} className="flex">
            <div className="relative w-[500px] h-64">
              <Image
                key={image}
                src={image}
                alt="xee"
                // width={550}
                // height={350}
                layout="fill"
                className=""
              />
            </div>

            <div className="hidden lg:flex">Detail</div>
          </div>
        ))}
      </div> */}
    </React.Fragment>
  )
}

export default Slider
