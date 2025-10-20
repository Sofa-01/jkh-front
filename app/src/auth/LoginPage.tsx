import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './auth.module.css';

export default function LoginPage() {
  const navigate = useNavigate();
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: call backend and store token
    navigate('/admin/users');
  }

  return (
    <form className={styles.form} id="loginForm" onSubmit={onSubmit}>
      <input className={styles.input} placeholder="Логин" required />
      <input className={styles.input} type="password" placeholder="Пароль" required />
      <button className={styles.button} type="submit">Вход →</button>
      <button className={styles.back} type="button" onClick={() => navigate('/register')}>Назад</button>
    </form>
  );
}


