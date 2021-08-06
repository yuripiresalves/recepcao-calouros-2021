import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.image}>
        <img src="/images/dino.svg" alt="Dino" />
      </div>
      <h1 className={styles.title}>recepção de calouros 2021</h1>
    </header>
  );
}
