import styles from '../../styles/global.module.scss';
export default function Form({ form, isValue, setValue, handleAddValue }) {
  return (
    <form className={`${styles.form} ${form ? styles.visible : styles.hidden}`}>
      <input
        className={styles.input}
        type='text'
        value={isValue}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className={styles.buttons} onClick={handleAddValue}>
        Dodaj
      </button>
    </form>
  );
}
