import styles from './table.module.css';

export default function UsersPage(){
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Пользователи</h1>
      <div className={styles.toolbar}>
        <input className={styles.search} placeholder="Поиск" />
      </div>
      <div className={styles.tableBox}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Фамилия</th>
              <th>Имя</th>
              <th>Email</th>
              <th>Роль</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {['Иван','Дмитрий','Павел','Евгений','Владимир'].map((name,i)=> (
              <tr key={i}>
                <td>Серебряный</td>
                <td>{name}</td>
                <td>admin{i}@mail.ru</td>
                <td>Инспектор</td>
                <td className={styles.actions}>
                  <button className={styles.danger}>Удалить</button>
                  <button className={styles.warn}>Обновить</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


