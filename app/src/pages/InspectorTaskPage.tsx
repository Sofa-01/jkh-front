import { useNavigate, useParams } from 'react-router-dom';
import { FormSection, Field, Actions, Button } from '../components/Form';
import { buildings, checklists } from '../mock';

const elementNames = ['Фундаменты','Цоколь','Наружные стены'];
const options = ['Исправное','Удовлетворительное','Неудовлетворительное','Аварийное'];

export default function InspectorTaskPage(){
  const { id } = useParams();
  const navigate = useNavigate();
  const building = buildings[0];
  const checklist = checklists[0];
  return (
    <FormSection title={`Проведение осмотра · Задание #${id}`}>
      <div style={{marginBottom:16,color:'#666'}}>Адрес: {building.address} · Чек-лист: {checklist.title} · Дата: {new Date().toLocaleString('ru-RU')}</div>

      {elementNames.map((name,idx)=> (
        <div key={idx} style={{background:'#fff',borderRadius:8,padding:16,boxShadow:'0 1px 4px rgba(0,0,0,.06)',marginBottom:12}}>
          <div style={{fontWeight:600,marginBottom:8}}>{name}</div>
          <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
            {options.map(o=> (
              <label key={o} style={{display:'flex',alignItems:'center',gap:6}}>
                <input type="radio" name={`el-${idx}`} /> {o}
              </label>
            ))}
          </div>
          <Field label="Комментарий">
            <input placeholder="Комментарий" />
          </Field>
        </div>
      ))}

      <Actions>
        <Button onClick={()=>alert('Отправлено координатору (мок)')}>Отправить акт</Button>
        <Button variant="secondary" onClick={()=>navigate(-1)}>Назад</Button>
      </Actions>
    </FormSection>
  );
}


