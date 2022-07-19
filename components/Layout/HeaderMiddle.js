import React, { useEffect, useRef, useState } from 'react'
import SearchSmall from './SearchSmall'
import SearchSubMenu from './SearchSubMenu'

const HeaderMiddle = () => {
  const searchBarRef = useRef(null)
  const [toggleSearch, setToggleSearch] = useState(false)

  useEffect(() => {
    if (!toggleSearch) return

    function handleClick(event) {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setToggleSearch(!toggleSearch)
      }
    }

    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [toggleSearch])

  return (
    <React.Fragment>
      <div
        ref={searchBarRef}
        className="relative hidden md:flex justify-center items-center space-x-1"
      >
        <div>
          <input
            type={'text'}
            placeholder="Search"
            className="form-input bg-whiteThemeBackgroundTertiary dark:bg-darkThemeBackgroundHover md:w-48 lg:w-64 xl:w-72 2xl:w-96 h-8 outline-none rounded-l-md border-0 dark:placeholder:text-darkTextTertiary"
          />
        </div>

        <div className="bg-whiteThemeBackgroundTertiary hover:bg-whiteThemeBackgroundTertiaryDark dark:bg-darkThemeBackgroundHover dark:hover:bg-darkTextTertiary h-8 flex justify-center items-center rounded-r-md cursor-pointer">
          <button
            onClick={() => setToggleSearch(!toggleSearch)}
            className="px-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </button>
        </div>

        {toggleSearch && <SearchSubMenu largeView={true} />}
      </div>
    </React.Fragment>
  )
}

export default HeaderMiddle
