import { useNavigate, useParams } from 'react-router-dom';
import { FormSection, Field, Actions, Button } from '../components/Form';
import { districts } from '../mock';

export default function DistrictEditPage(){
  const { id } = useParams();
  const navigate = useNavigate();
  const district = districts.find(d=> String(d.id)===id) ?? districts[0];
  return (
    <FormSection title="Редактирование района">
      <Field label="Введите наименование района">
        <input defaultValue={district.name} placeholder="Заводской" />
      </Field>
      <Actions>
        <Button variant="warning">Изменить</Button>
        <Button variant="secondary" onClick={()=>navigate(-1)}>Назад</Button>
      </Actions>
    </FormSection>
  );
}


