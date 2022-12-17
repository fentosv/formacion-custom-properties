import Link from 'next/link'
import styles from './Button.module.scss'
import { clsx } from 'clsx'

function Button({ variant }: { variant?: string }) {
  return (
    <button
      className={clsx(
        {
          [styles[variant ?? '']]: variant,
        },
        styles.common
      )}
    >
      Click me
    </button>
  )
}

export default Button
