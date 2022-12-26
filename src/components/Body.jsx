import styles from '../styles/body.module.css';

export default function Body({ children }) {
  return <div className={styles.body}>{children}</div>;
}
