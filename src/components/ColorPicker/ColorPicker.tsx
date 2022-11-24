import { CSSProperties, useState } from 'react'

import styles from './ColorPicker.module.scss'
const ColorPicker = () => {
  const [color, setColor] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement
    setColor(value)
  }

  return (
    <div
      className={styles.container}
      id='color'
      style={{ '--picked-color': color } as CSSProperties}
    >
      <label htmlFor='color'>Selecciona un color! {color}</label>
      <input
        name='color'
        onChange={handleChange}
        type='color'
        value={color}
      />
    </div>
  )
}

export default ColorPicker
