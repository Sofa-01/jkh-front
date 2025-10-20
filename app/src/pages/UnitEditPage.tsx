import { useNavigate, useParams } from 'react-router-dom';
import { FormSection, Field, Actions, Button } from '../components/Form';
import { districts, units } from '../mock';

export default function UnitEditPage(){
  const { id } = useParams();
  const navigate = useNavigate();
  const unit = units.find(u=> String(u.id)===id) ?? units[0];
  return (
    <FormSection title="Редактирование информации о ЖЭУ">
      <Field label="Введите наименование ЖЭУ">
        <input defaultValue={unit.name} placeholder="ЖЭУ №1" />
      </Field>
      <Field label="Выберите район">
        <select defaultValue={unit.districtId}>
          {districts.map(d=> <option key={d.id} value={d.id}>{d.name}</option>)}
        </select>
      </Field>
      <Actions>
        <Button variant="warning">Изменить</Button>
        <Button variant="secondary" onClick={()=>navigate(-1)}>Назад</Button>
      </Actions>
    </FormSection>
  );
}


