import styles from './table.module.css';

export default function DistrictsPage(){
  const rows = [
    {name:'Заводской', units:4, homes:100, code:'001'},
    {name:'Первомайский', units:13, homes:290, code:'006'},
    {name:'Московский', units:17, homes:310, code:'003'},
    {name:'Центральный', units:14, homes:270, code:'009'},
    {name:'Фрунзенский', units:20, homes:340, code:'008'},
  ];
  return (
    <div className={styles.wrap}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h1 className={styles.title}>Районы</h1>
        <div className={styles.toolbar}>
          <button className={styles.warn} style={{background:'#2f6f4e'}}>Добавить</button>
          <input className={styles.search} placeholder="Поиск" />
        </div>
      </div>
      <div className={styles.tableBox}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Наименование района</th>
              <th>Количество ЖЭУ</th>
              <th>Количество домов</th>
              <th>Код района</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r)=> (
              <tr key={r.code}>
                <td>{r.name}</td>
                <td>{r.units}</td>
                <td>{r.homes}</td>
                <td>{r.code}</td>
                <td className={styles.actions}>
                  <button className={styles.danger}>Удалить</button>
                  <a className={styles.warn} href={`/admin/districts/1/edit`} style={{display:'inline-block',textDecoration:'none',padding:'8px 12px',borderRadius:6,color:'#fff'}}>Изменить</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


