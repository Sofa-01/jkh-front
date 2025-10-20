import { useNavigate } from 'react-router-dom';
import { FormSection, Field, Actions, Button } from '../components/Form';
import { elementCatalog } from '../mock';

export default function ChecklistAddPage(){
  const navigate = useNavigate();
  return (
    <FormSection title="Добавление чек-листа">
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24}}>
        <div>
          <Field label="Введите наименование чек-листа">
            <input placeholder="Наименование" />
          </Field>
          <Field label="Выберите дату создания">
            <input type="date" />
          </Field>
        </div>
        <div>
          <Field label="Введите описание (необязательно)">
            <input placeholder="Описание" />
          </Field>
          <Field label="Выберите элементы чек-листа">
            <select defaultValue={elementCatalog[0].id}>
              {elementCatalog.map(e=> <option key={e.id} value={e.id}>{e.name}</option>)}
            </select>
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


