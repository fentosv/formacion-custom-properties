import ThemeSwitcher from '../components/ThemeSwitcher'
import styles from '../styles/theme.module.scss'

export default function Home() {
  return (
    <section className={styles.container}>
      <ThemeSwitcher />
      <h1>Soy un title</h1>
      <section>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque ab ratione blanditiis minus numquam autem iusto
        accusamus voluptates. Harum, voluptatum? Illo sequi accusamus, alias distinctio corrupti veniam eligendi
        consectetur aperiam.
      </section>
      <footer>Soy un footer</footer>
    </section>
  )
}
