import { useNavigate } from 'react-router-dom';
import { FormSection, Field, Actions, Button } from '../components/Form';
import { districts, units } from '../mock';

export default function BuildingAddPage(){
  const navigate = useNavigate();
  return (
    <FormSection title="Добавление объекта ЖКХ">
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24}}>
        <div>
          <Field label="Введите адрес объекта">
            <input placeholder="Адрес" />
          </Field>
          <Field label="Выберите район">
            <select defaultValue={districts[0].id}>
              {districts.map(d=> <option key={d.id} value={d.id}>{d.name}</option>)}
            </select>
          </Field>
          <Field label="Выберите ЖЭУ">
            <select defaultValue={units[0].id}>
              {units.map(u=> <option key={u.id} value={u.id}>{u.name}</option>)}
            </select>
          </Field>
        </div>
        <div>
          <Field label="Введите год постройки">
            <input placeholder="Год" />
          </Field>
          <Field label="Введите описание (необязательно)">
            <textarea placeholder="Описание" rows={4} />
          </Field>
          <Field label="Загрузите фото">
            <input type="file" />
          </Field>
        </div>
      </div>
      <Actions>
        <Button>Добавить</Button>
        <Button variant="secondary" onClick={()=>navigate(-1)}>Назад</Button>
      </Actions>
    </FormSection>
  );
}


