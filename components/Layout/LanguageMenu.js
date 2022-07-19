import React from 'react'

const LanguageMenu = ({ setToggleLanguage, toggleLanguage }) => {
  const languageListArray = [
    'Afrikaan',
    'Dansk',
    'Deutsch',
    'English US',
    'English UK',
    'German',
    'Urdu',
    'Japanese',
    'Korean',
    'Punjabi',
  ]

  return (
    <React.Fragment>
      <div className="absolute top-[40px] right-3 bg-whiteThemeBackgroundPrimary dark:bg-darkThemeBackgroundPrimary dark:text-darkTextPrimary shadow-xl shadow-whiteThemeBackgroundTertiaryDark dark:shadow-darkThemeBackgroundPrimary rounded-md w-52 h-[300px] overflow-y-scroll scroll-smooth hideScrollBarBrowser hideScrollBarBrowserSecondary">
        <div className="flex flex-col space-y-3">
          <div className="bg-whiteThemeBackgroundTertiary dark:bg-darkThemeBackgroundSecondary ">
            <div className="flex justify-between items-center mx-2">
              <div
                className="group hover:bg-whiteThemeBackgroundTertiaryDark dark:hover:bg-darkThemeBackgroundHover hover:text-whiteTextPrimary dark:hover:text-darkTextPrimary cursor-pointer my-1 py-1  px-2 rounded-md"
                onClick={() => {
                  setToggleLanguage(!toggleLanguage)
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>

              <div>
                <p className="font-twitchFont font-semibold text-sm">
                  Language
                </p>
              </div>

              <div className="invisible">I</div>
            </div>
          </div>

          <div className="mx-2 flex flex-col space-y-1">
            <div className="flex justify-between text-darkTextPrimary items-center w-full rounded-md bg-purplePrimary  cursor-pointer py-1 px-1">
              <div>
                <p className="font-twitchFont text-sm">English</p>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            {/* :ist */}
            {languageListArray?.map((language) => (
              <div
                key={language}
                className="flex justify-between items-center w-full rounded-md hover:bg-whiteThemeBackgroundTertiaryDark dark:hover:bg-darkThemeBackgroundHover  cursor-pointer py-1 px-1"
              >
                <div>
                  <p className="font-twitchFont text-sm">{language}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default LanguageMenu
