import styles from './table.module.css';

export default function BuildingsPage(){
  const rows = [
    {addr:'ул. Академика Красина 23', unit:'ЖЭУ №4', district:'Заводской', inspector:'Иванов Роман'},
    {addr:'ул. Академика Красина 24', unit:'ЖЭУ №5', district:'Заводской', inspector:'Иванов Роман'},
    {addr:'ул. Академика Красина 25', unit:'ЖЭУ №6', district:'Заводской', inspector:'Иванов Роман'},
    {addr:'ул. Академика Красина 26', unit:'ЖЭУ №7', district:'Заводской', inspector:'Иванов Роман'},
  ];
  return (
    <div className={styles.wrap}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h1 className={styles.title}>Объекты ЖКХ</h1>
        <div className={styles.toolbar}>
          <a className={styles.warn} href="/admin/buildings/add" style={{display:'inline-block',textDecoration:'none',padding:'8px 12px',borderRadius:6,color:'#fff'}}>Добавить</a>
          <input className={styles.search} placeholder="Поиск" />
        </div>
      </div>
      <div className={styles.tableBox}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Адрес объекта</th>
              <th>ЖЭУ</th>
              <th>Район</th>
              <th>Инспектор</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r)=> (
              <tr key={r.addr}>
                <td>{r.addr}</td>
                <td>{r.unit}</td>
                <td>{r.district}</td>
                <td>{r.inspector}</td>
                <td className={styles.actions}>
                  <button className={styles.danger}>Удалить</button>
                  <a className={styles.warn} href={`/admin/buildings/${1}/edit`} style={{display:'inline-block',textDecoration:'none',padding:'8px 12px',borderRadius:6,color:'#fff'}}>Изменить</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


