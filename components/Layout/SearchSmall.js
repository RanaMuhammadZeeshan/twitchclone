import React, { useEffect, useRef, useState } from 'react'
import SearchSubMenu from './SearchSubMenu'

const SearchSmall = () => {
  const searchBarRef = useRef(null)
  const [toggleSearch, setToggleSearch] = useState(false)

  useEffect(() => {
    if (!toggleSearch) return

    function handleClick(event) {
      if (!searchBarRef.current.contains(event.target)) {
        setToggleSearch(!toggleSearch)
      }
    }

    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [toggleSearch])

  return (
    <div
      ref={searchBarRef}
      className="relative flex justify-center items-center md:hidden ml-4"
    >
      <button
        onClick={() => setToggleSearch(!toggleSearch)}
        className="group hover:bg-whiteThemeBackgroundTertiary dark:hover:bg-darkThemeBackgroundHover cursor-pointer p-1 rounded-md"
      >
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      {toggleSearch && <SearchSubMenu largeView={false} />}
    </div>
  )
}

export default SearchSmall
