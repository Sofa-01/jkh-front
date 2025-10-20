import { useNavigate, useParams } from 'react-router-dom';
import { FormSection, Field, Actions, Button } from '../components/Form';
import { checklists, elementCatalog } from '../mock';

export default function ChecklistEditPage(){
  const { id } = useParams();
  const navigate = useNavigate();
  const checklist = checklists.find(c=> String(c.id)===id) ?? checklists[0];
  return (
    <FormSection title="Редактирование чек-листа">
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24}}>
        <div>
          <Field label="Введите наименование чек-листа">
            <input defaultValue={checklist.title} />
          </Field>
          <Field label="Выберите дату создания">
            <input type="date" defaultValue={checklist.createdAt.substring(0,10)} />
          </Field>
        </div>
        <div>
          <Field label="Введите описание (необязательно)">
            <input defaultValue={checklist.description ?? ''} />
          </Field>
          <Field label="Выберите элементы чек-листа">
            <select defaultValue={elementCatalog[0].id}>
              {elementCatalog.map(e=> <option key={e.id} value={e.id}>{e.name}</option>)}
            </select>
          </Field>
        </div>
      </div>
      <Actions>
        <Button variant="warning">Изменить</Button>
        <Button variant="secondary" onClick={()=>navigate(-1)}>Назад</Button>
      </Actions>
    </FormSection>
  );
}


