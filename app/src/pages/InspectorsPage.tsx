import styles from './table.module.css';
import { districts, units } from '../mock';

export default function InspectorsPage(){
  const rows = [
    {last:'Серебряный', first:'Иван', email:'AdminVasilev@mail.ru', district:'Заводской', unit:'ЖЭУ №1'},
    {last:'Серебряный', first:'Дмитрий', email:'AdminVasilev@mail.ru', district:'Московский', unit:'ЖЭУ №11'},
    {last:'Серебряный', first:'Павел', email:'Admin@mail.ru', district:'Московский', unit:'ЖЭУ №13'},
  ];
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Инспекторы</h1>
      <div className={styles.tableBox}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Фамилия</th>
              <th>Имя</th>
              <th>Email</th>
              <th>Район</th>
              <th>ЖЭУ</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r,i)=> (
              <tr key={i}>
                <td>{r.last}</td>
                <td>{r.first}</td>
                <td>{r.email}</td>
                <td>
                  <select defaultValue={districts[0].name}>
                    {districts.map(d=> <option key={d.id}>{d.name}</option>)}
                  </select>
                </td>
                <td>
                  <select defaultValue={units[0].name}>
                    {units.map(u=> <option key={u.id}>{u.name}</option>)}
                  </select>
                </td>
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


