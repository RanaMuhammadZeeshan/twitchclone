import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

const BrouseSmall = () => {
  const toggleMoreRef = useRef(null)
  const [toggleState, setTogglState] = useState(false)

  const moreLinkArray = [
    { link: '/about', name: 'about' },
    { link: '/advertiser', name: 'advertiser' },
    { link: '/blog', name: 'blog' },
    { link: '/developers', name: 'developers' },
    { link: '/download', name: 'download apps' },
    { link: '/gift', name: 'gift card' },
    { link: '/igdb', name: 'igdb' },
    { link: '/loot', name: 'loot cave - merch store' },
    { link: '/music', name: 'music on twitch' },
    { link: '/partners', name: 'partners' },
    { link: '/press', name: 'press' },
    { link: '/turbo', name: 'turbo' },
  ]

  const helpAndLegalArray = [
    { link: '/accessibility', name: 'accessibility statement' },
    { link: '/ad', name: 'ad choices' },
    { link: '/guidelines', name: 'community guidelines' },
    { link: '/cookie', name: 'cookie policy' },
    { link: '/help', name: 'help' },
    { link: '/peivacy', name: 'privacy policy' },
    { link: '/safety', name: 'safety center' },
    { link: '/security', name: 'security' },
    { link: '/terms', name: 'terms' },
  ]

  useEffect(() => {
    if (!toggleState) return

    function handleClick(event) {
      if (
        toggleMoreRef.current &&
        !toggleMoreRef.current.contains(event.target)
      ) {
        setTogglState(!toggleState)
      }
    }

    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [toggleState])

  return (
    <div
      ref={toggleMoreRef}
      className="relative flex items-center justify-center "
    >
      <div
        id="dots"
        className="group hover:bg-whiteThemeBackgroundTertiary dark:hover:bg-darkThemeBackgroundHover p-1 rounded-md"
        onClick={() => setTogglState(!toggleState)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 cursor-pointer hover:text-purplePrimary group-hover:bg-whiteThemeBackgroundTertiary dark:group-hover:bg-darkThemeBackgroundHover dark:text-darkTextPrimary text-xs font-semibold"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </div>
      {toggleState && (
        <div className="absolute top-[40px] left-2 text-whiteTextPrimary dark:text-darkTextPrimary bg-whiteThemeBackgroundPrimary dark:bg-darkThemeBackgroundPrimary shadow-xl shadow-whiteThemeBackgroundTertiaryDark dark:shadow-darkThemeBackgroundPrimary rounded-md w-52 h-[620px] overflow-y-scroll scroll-smooth hideScrollBarBrowser hideScrollBarBrowserSecondary">
          <div className="flex flex-col justify-center  items-start mx-4 my-2 space-y-2 font-twitchFont text-whiteTextSecondary">
            {/* General */}
            <h3 className="uppercase font-semibold text-whiteTextPrimary dark:text-darkTextTertiary px-2 text-sm leading-5">
              general
            </h3>

            {moreLinkArray?.map(({ link, name }) => (
              <Link key={name} href={link}>
                <a
                  className={`text-xs leading-4 dark:text-darkTextPrimary text-whiteTextSecondary font-medium ${
                    name === 'igdb' ? 'uppercase' : 'capitalize'
                  } w-full px-2 py-1 rounded-md hover:bg-whiteThemeBackgroundTertiaryDark hover:dark:bg-darkThemeBackgroundHover`}
                >
                  {name}
                </a>
              </Link>
            ))}

            <hr className="w-full " />
            {/* Help & Legal */}
            <h3 className=" my-2 uppercase text-whiteTextPrimary dark:text-darkTextTertiary font-semibold px-2 text-sm leading-5">
              Help & legal
            </h3>

            {helpAndLegalArray?.map(({ link, name }) => (
              <Link key={name} href={link}>
                <a className="text-xs leading-4 dark:text-darkTextPrimary text-whiteTextSecondary capitalize  w-full px-2 py-1 rounded-md hover:bg-whiteThemeBackgroundTertiaryDark dark:hover:bg-darkThemeBackgroundHover">
                  {name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default BrouseSmall
