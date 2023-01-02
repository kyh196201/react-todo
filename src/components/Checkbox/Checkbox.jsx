/* eslint-disable react/jsx-props-no-spreading */
import styles from './Checkbox.module.css';

export default function Checkbox({ checked, onChange, children, ...props }) {
  const handleChange = e => {
    onChange(e.target.checked);
  };

  return (
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        {...props}
      />
      <span>{children}</span>
    </label>
  );
}
