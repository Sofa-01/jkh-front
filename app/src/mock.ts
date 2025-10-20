import { Building, Checklist, District, ElementCatalog, JkhUnit, User } from './types';

export const roles = [
  { id: 1, name: 'Инспектор' },
  { id: 2, name: 'Специалист по координации' },
  { id: 3, name: 'Специалист по сопровождению' },
];

export const users: User[] = [
  { id: 1, email: 'admin1@mail.ru', login: 'ivan', firstName: 'Иван', lastName: 'Серебряный', roleId: 1 },
  { id: 2, email: 'admin2@mail.ru', login: 'dmitriy', firstName: 'Дмитрий', lastName: 'Серебряный', roleId: 1 },
  { id: 3, email: 'admin3@mail.ru', login: 'pavel', firstName: 'Павел', lastName: 'Серебряный', roleId: 2 },
];

export const districts: District[] = [
  { id: 1, name: 'Заводской' },
  { id: 2, name: 'Первомайский' },
  { id: 3, name: 'Московский' },
  { id: 4, name: 'Центральный' },
  { id: 5, name: 'Фрунзенский' },
];

export const units: JkhUnit[] = [
  { id: 1, name: 'ЖЭУ №1', districtId: 1 },
  { id: 2, name: 'ЖЭУ №10', districtId: 2 },
  { id: 3, name: 'ЖЭУ №7', districtId: 1 },
  { id: 4, name: 'ЖЭУ №18', districtId: 3 },
  { id: 5, name: 'ЖЭУ №31', districtId: 4 },
];

export const buildings: Building[] = [
  { id: 1, address: 'ул. Академика Красина 23', districtId: 1, jkhUnitId: 1, inspectorId: 1, constructionYear: 1977 },
  { id: 2, address: 'ул. Академика Красина 24', districtId: 1, jkhUnitId: 1, inspectorId: 1 },
  { id: 3, address: 'ул. Академика Красина 25', districtId: 1, jkhUnitId: 1, inspectorId: 1 },
  { id: 4, address: 'ул. Академика Красина 26', districtId: 1, jkhUnitId: 1, inspectorId: 1 },
];

export const elementCatalog: ElementCatalog[] = [
  { id: 1, name: 'Фундаменты' },
  { id: 2, name: 'Цоколь' },
  { id: 3, name: 'Наружные стены' },
];

export const checklists: Checklist[] = [
  { id: 1, title: 'Плановый весенний осмотр', createdAt: '2025-01-10' },
  { id: 2, title: 'Плановый осенний осмотр', createdAt: '2025-07-12' },
  { id: 3, title: 'Частичный плановый осмотр', createdAt: '2025-03-16' },
];


