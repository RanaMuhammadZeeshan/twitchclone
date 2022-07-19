import React, { useState } from 'react'

import styles from './Switch.module.css'

const Switch = () => {
  const [switchValue, setSwitchValue] = useState(false)

  return (
    <React.Fragment>
      <label
        className={` ${styles.switch} border  ${
          switchValue
            ? 'bg-darkThemeBackgroundPrimary border-purplePrimary'
            : 'bg-whiteThemeBackgroundPrimary border-whiteTextPrimary'
        }  w-10 h-5 mt-1 cursor-pointer`}
      >
        <input
          type="checkbox"
          onChange={(e) => setSwitchValue(e.target.checked)}
          className="form-checkbox  cursor-pointer"
        />{' '}
        <div
          className={`${
            switchValue ? 'bg-purplePrimary' : 'bg-darkThemeBackgroundPrimary'
          } w-8 h-4 cursor-pointer`}
        ></div>
      </label>
    </React.Fragment>
  )
}

export default Switch
