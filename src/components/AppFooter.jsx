import styles from '../styles/AppFooter.module.css';

export default function AppFooter({ children }) {
  return <footer className={styles.footer}>{children}</footer>;
}
