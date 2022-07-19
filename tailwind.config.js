/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '920px',
      xl: '1024px',
      '2xl': '1200px',
    },
    extend: {
      colors: {
        whiteThemeBackgroundPrimary: '#fff',
        whiteThemeBackgroundSecondary: '#F7F7F8',
        whiteThemeBackgroundTertiary: '#EFEFF1',
        whiteThemeBackgroundTertiaryDark: '#d7d7d9',
        whiteTextPrimary: '#0E0E10',
        whiteTextSecondary: '#53535F',
        darkThemeBackgroundPrimary: '#18181B',
        darkThemeBackgroundSecondary: '#2f2f32',
        darkThemeBackgroundTertiary: '#1F1F23',
        darkThemeBackgroundHover: '#5d5d5f',
        darkThemeBackgroundSidebar: '#1F1F23',
        darkTextPrimary: '#cccccc',
        darkTextSecondary: '#DEDEE3',
        darkTextTertiary: '#ADADB8',
        purplePrimary: '#6B28D0',
        purpleSecondary: '#9147FF',
        redPrimary: '#EB0400',
      },
    },
    fontFamily: {
      twitchFont: ['Inter', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
