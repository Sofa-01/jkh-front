import { Outlet, Link, useLocation } from 'react-router-dom';
import styles from './auth.module.css';

export default function AuthLayout() {
  const location = useLocation();
  const isLogin = location.pathname.includes('login');
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>{isLogin ? 'Вход' : 'Регистрация'}</h1>
        {!isLogin && (
          <p className={styles.subtitle}>
            Уже зарегистрированы? <Link to="/login" className={styles.link}>Войти</Link>
          </p>
        )}
        {isLogin && (
          <p className={styles.subtitle}>
            Нет аккаунта? <Link to="/register" className={styles.link}>Регистрация</Link>
          </p>
        )}
        <Outlet />
      </div>
    </div>
  );
}


