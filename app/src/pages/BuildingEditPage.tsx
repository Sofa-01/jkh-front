import { useNavigate, useParams } from 'react-router-dom';
import { FormSection, Field, Actions, Button } from '../components/Form';
import { buildings, districts, units } from '../mock';

export default function BuildingEditPage(){
  const { id } = useParams();
  const navigate = useNavigate();
  const building = buildings.find(b=> String(b.id)===id) ?? buildings[0];
  return (
    <FormSection title="Редактирование объекта ЖКХ">
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24}}>
        <div>
          <Field label="Введите адрес объекта">
            <input defaultValue={building.address} />
          </Field>
          <Field label="Выберите район">
            <select defaultValue={building.districtId}>
              {districts.map(d=> <option key={d.id} value={d.id}>{d.name}</option>)}
            </select>
          </Field>
          <Field label="Выберите ЖЭУ">
            <select defaultValue={building.jkhUnitId}>
              {units.map(u=> <option key={u.id} value={u.id}>{u.name}</option>)}
            </select>
          </Field>
        </div>
        <div>
          <Field label="Введите год постройки">
            <input defaultValue={building.constructionYear ?? ''} />
          </Field>
          <Field label="Введите описание (необязательно)">
            <textarea defaultValue={building.description ?? ''} rows={4} />
          </Field>
          <Field label="Загрузите фото">
            <input type="file" />
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


