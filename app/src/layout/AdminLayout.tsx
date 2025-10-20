import { NavLink, Outlet } from 'react-router-dom';
import styles from './layout.module.css';

export default function AdminLayout() {
  return (
    <div className={styles.page}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>Панель администратора</div>
        <nav className={styles.menu}>
          <NavLink to="/admin/users" className={styles.item}>Пользователи</NavLink>
          <NavLink to="/admin/districts" className={styles.item}>Районы</NavLink>
          <NavLink to="/admin/units" className={styles.item}>ЖЭУ</NavLink>
          <NavLink to="/admin/buildings" className={styles.item}>Объекты ЖКХ</NavLink>
          <NavLink to="/admin/checklists" className={styles.item}>Чек-листы</NavLink>
          <NavLink to="/admin/inspectors" className={styles.item}>Инспекторы</NavLink>
          <NavLink to="/admin/tasks" className={styles.item}>Задания</NavLink>
          <NavLink to="/admin/analytics" className={styles.item}>Аналитика</NavLink>
          <a className={styles.logout} href="/login">Выход</a>
        </nav>
      </aside>
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}


