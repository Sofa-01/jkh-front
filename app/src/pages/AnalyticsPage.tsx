import styles from './table.module.css';
import { exportPdfMock } from '../utils/pdf';

export default function AnalyticsPage(){
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Аналитика</h1>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
        <div className={styles.tableBox} style={{height:280,display:'flex',alignItems:'center',justifyContent:'center'}}>График по районам (мок)</div>
        <div className={styles.tableBox} style={{height:280,display:'flex',alignItems:'center',justifyContent:'center'}}>График по ЖЭУ (мок)</div>
        <div className={styles.tableBox} style={{height:280,display:'flex',alignItems:'center',justifyContent:'center'}}>График по статусам (мок)</div>
      </div>
      <div style={{marginTop:16}}>
        <button className={styles.warn} onClick={exportPdfMock} style={{border:'none'}}>Выгрузить PDF</button>
      </div>
    </div>
  );
}


