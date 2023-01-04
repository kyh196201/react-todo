import styles from '../styles/AppBody.module.css';

export default function AppBody({ children }) {
  return <div className={styles.body}>{children}</div>;
}
