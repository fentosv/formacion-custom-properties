import { useState, useEffect } from 'react'
import styles from './ThemeSwitcher.module.scss'

enum Themes {
  light = 'light',
  dark = 'dark',
}
const STORAGE_THEME_KEY = 'theme'

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(Themes.light)
  const isDark = theme === Themes.dark

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('theme-dark', theme === Themes.dark)
  }, [theme])

  return (
    <span className={styles.switch}>
      <input
        checked={isDark}
        id='input'
        onChange={e => {
          const target = e.target as HTMLInputElement
          const themeToBoolean = target.checked ? Themes.dark : Themes.light
          setTheme(themeToBoolean)
          localStorage.setItem(STORAGE_THEME_KEY, themeToBoolean)
        }}
        type='checkbox'
      />
      <label htmlFor='input'>Tema seleccionado: {theme === Themes.light ? '🌞' : '🌑'}</label>
    </span>
  )
}

export default ThemeSwitcher
