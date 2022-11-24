import Link from 'next/link'
import styles from './Navbar.module.scss'

const links = [
  {
    label: 'Diseño',
    href: '/',
  },
  {
    label: 'En tiempo de ejecución',
    href: '/runtime',
  },
  {
    label: 'Temas',
    href: '/themes',
  },
]

function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbar__container}>
        {links.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
          >
            {label}
          </Link>
        ))}
      </div>
    </header>
  )
}

export default Navbar
