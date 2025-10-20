import { ReactNode } from 'react';
import styles from './form.module.css';

export function FormSection({ children, title }: {children: ReactNode; title: string}){
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.sectionBody}>{children}</div>
    </div>
  );
}

export function Field({ label, children }: {label: string; children: ReactNode}){
  return (
    <label className={styles.field}>
      <div className={styles.label}>{label}</div>
      <div className={styles.control}>{children}</div>
    </label>
  );
}

export function Actions({ children }: {children: ReactNode}){
  return <div className={styles.actions}>{children}</div>;
}

export function Button({ children, variant = 'primary', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & {variant?: 'primary'|'warning'|'danger'|'secondary'}){
  return <button {...props} className={[styles.btn, styles[variant]].join(' ')}>{children}</button>;
}


