import styles from '../styles/footer.module.css';

export default function Footer({ children }) {
  return <footer className={styles.footer}>{children}</footer>;
}
