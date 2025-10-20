import styles from './table.module.css';

export default function UnitsPage(){
  const rows = [
    {name:'ЖЭУ №1', district:'Заводской', homes:100},
    {name:'ЖЭУ №10', district:'Ленинский', homes:290},
    {name:'ЖЭУ №7', district:'Заводской', homes:310},
    {name:'ЖЭУ №18', district:'Московский', homes:270},
    {name:'ЖЭУ №31', district:'Октябрьский', homes:340},
  ];
  return (
    <div className={styles.wrap}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h1 className={styles.title}>ЖЭУ</h1>
        <div className={styles.toolbar}>
          <button className={styles.warn} style={{background:'#2f6f4e'}}>Добавить</button>
          <input className={styles.search} placeholder="Поиск" />
        </div>
      </div>
      <div className={styles.tableBox}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Наименование ЖЭУ</th>
              <th>Район</th>
              <th>Количество домов</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r)=> (
              <tr key={r.name}>
                <td>{r.name}</td>
                <td>{r.district}</td>
                <td>{r.homes}</td>
                <td className={styles.actions}>
                  <button className={styles.danger}>Удалить</button>
                  <a className={styles.warn} href={`/admin/units/1/edit`} style={{display:'inline-block',textDecoration:'none',padding:'8px 12px',borderRadius:6,color:'#fff'}}>Изменить</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


