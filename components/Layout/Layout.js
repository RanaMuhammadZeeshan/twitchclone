import React, { useEffect, useState } from 'react'
import Header from './Header'
import Sidenav from './Sidenav'
import useWindowSize from '../../customHooks/useWindowSize'

const Layout = ({ children }) => {
  const [sideBarToggle, setSideBarToggle] = useState(false)
  const windowWidthSize = useWindowSize()

  useEffect(() => {
    if (windowWidthSize.width < 1200) {
      setSideBarToggle(false)
    }
  }, [windowWidthSize])

  return (
    <React.Fragment>
      <section
        id="header"
        className="w-full bg-whiteThemeBackgroundPrimary text-whiteTextPrimary dark:bg-darkThemeBackgroundPrimary dark:text-darkTextPrimary shadow-whiteThemeBackgroundPrimary dark:shadow-darkThemeBackgroundPrimary sticky top-0 z-10 
       "
      >
        <Header />
      </section>

      <section id="main" className="flex max-h-screen">
        <div
          className={`${
            !sideBarToggle ? 'w-12' : 'w-72'
          } w-12  bg-whiteThemeBackgroundTertiary h-[93.5vh] text-whiteTextPrimary dark:bg-darkThemeBackgroundSidebar dark:text-darkTextPrimary overflow-y-scroll hideScrollBarBrowser hideScrollBarBrowserSecondary`}
        >
          <Sidenav
            setSideBarToggle={setSideBarToggle}
            sideBarToggle={sideBarToggle}
            windowWidthSize={windowWidthSize}
          />
        </div>

        <div
          className={` w-full  bg-whiteThemeBackgroundSecondary h-[93.5vh] text-whiteTextPrimary dark:bg-darkThemeBackgroundPrimary dark:text-darkTextPrimary font-twitchFont overflow-y-scroll`}
        >
          <main>{children}</main>
        </div>
      </section>

      {/* <section id="footer">Footer</section> */}
    </React.Fragment>
  )
}

export default Layout
