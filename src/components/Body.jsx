import styles from '../styles/Body.module.css';

export default function Body({ children }) {
  return <div className={styles.body}>{children}</div>;
}
