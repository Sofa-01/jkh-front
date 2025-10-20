import { FormEvent } from 'react';
import styles from './auth.module.css';

export default function RegisterPage() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: integrate with backend later
    alert('Регистрация прошла успешно! (мок)');
    (e.currentTarget as HTMLFormElement).reset();
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input className={styles.input} placeholder="Фамилия" required />
      <input className={styles.input} placeholder="Имя" required />
      <input className={styles.input} type="email" placeholder="Email" required />
      <input className={styles.input} placeholder="Логин" required />
      <input className={styles.input} type="password" placeholder="Пароль" required />
      <button className={styles.button} type="submit">Регистрация →</button>
    </form>
  );
}


