import styles from './table.module.css';

export default function ChecklistsPage(){
  const rows = [
    {title:'Фундаменты', date:'10.01.25'},
    {title:'Цоколь', date:'12.07.25'},
    {title:'Наружные стены', date:'16.03.25'},
  ];
  return (
    <div className={styles.wrap}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h1 className={styles.title}>Элементы чек-листа</h1>
        <div className={styles.toolbar}>
          <a className={styles.warn} href="/admin/checklists/add" style={{display:'inline-block',textDecoration:'none',padding:'8px 12px',borderRadius:6,color:'#fff'}}>Добавить</a>
          <input className={styles.search} placeholder="Поиск" />
        </div>
      </div>
      <div className={styles.tableBox}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Наименование элемента</th>
              <th>Дата создания</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r)=> (
              <tr key={r.title}>
                <td>{r.title}</td>
                <td>{r.date}</td>
                <td className={styles.actions}>
                  <button className={styles.danger}>Удалить</button>
                  <a className={styles.warn} href={`/admin/checklists/${1}/edit`} style={{display:'inline-block',textDecoration:'none',padding:'8px 12px',borderRadius:6,color:'#fff'}}>Изменить</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


