import styles from './table.module.css';
import { users, buildings, checklists } from '../mock';

export default function TasksPage(){
  const rows = [
    {id:1, title:'Осмотр дома', priority:'обычный', status:'New', building:buildings[0].address, checklist:checklists[0].title, inspector:users[0].firstName+' '+users[0].lastName, date:'2025-01-15 10:00'},
    {id:2, title:'Осмотр дома', priority:'высокий', status:'В работе', building:buildings[1].address, checklist:checklists[1].title, inspector:users[1].firstName+' '+users[1].lastName, date:'2025-01-16 12:00'},
  ];
  const statusColor: Record<string,string> = { 'New':'#607d8b', 'Принято':'#2196f3', 'В работе':'#ff9800', 'На проверке':'#9c27b0', 'На доработке':'#e91e63', 'Утверждено':'#4caf50' };
  return (
    <div className={styles.wrap}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h1 className={styles.title}>Задания</h1>
        <div className={styles.toolbar}>
          <button className={styles.warn} style={{background:'#2f6f4e'}}>Добавить</button>
          <input className={styles.search} placeholder="Поиск" />
        </div>
      </div>
      <div className={styles.tableBox}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Название</th>
              <th>Приоритет</th>
              <th>Статус</th>
              <th>Адрес</th>
              <th>Чек-лист</th>
              <th>Инспектор</th>
              <th>Дата</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r=> (
              <tr key={r.id}>
                <td>{r.title}</td>
                <td>{r.priority}</td>
                <td><span style={{background:statusColor[r.status]??'#607d8b',color:'#fff',padding:'4px 8px',borderRadius:6}}>{r.status}</span></td>
                <td>{r.building}</td>
                <td>{r.checklist}</td>
                <td>{r.inspector}</td>
                <td>{r.date}</td>
                <td className={styles.actions}>
                  <button className={styles.danger}>Удалить</button>
                  <a className={styles.warn} href={`/inspector/tasks/${r.id}`} style={{display:'inline-block',textDecoration:'none',padding:'8px 12px',borderRadius:6,color:'#fff'}}>Открыть</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


