import { useContext } from 'react'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { ContextGlobal } from '../utils/global.context'

const themes = ['light', 'dark']

export default function ToggleButton() {
  const { themeState, themeDispatch } = useContext(ContextGlobal)

  const toggleTheme = () => {
    themeDispatch({ type: 'TOGGLE_THEME' })
  }

  return (
    <div className='theme-switch'>
      {themes.map(t => {
        const checked = t === themeState.theme
        return (
          <button
            key={t}
            className={`${checked ? 'cambio' : ''}`}
            onClick={toggleTheme}
            aria-label='Toggle theme'
          >
            {t === 'light' ? <BsFillSunFill /> : <BsFillMoonFill />}
          </button>
        )
      })}
    </div>
  )
}