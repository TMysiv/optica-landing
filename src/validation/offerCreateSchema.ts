import * as  yup from 'yup';
import { houseTypes, services, speeds } from '../helpers';

export const offerCreateSchema = yup.object().shape({
  service: yup
    .string()
    .oneOf(services.map(s => s.value), 'Обрано невірний сервіс')
    .required('Обов\'язкове поле'),

  isMash: yup.boolean().defined(),
  countMash: yup.number().notRequired(),
  speed: yup
    .string()
    .oneOf(speeds.map(s => s.value), 'Обрана невірна швидкість')
    .required('Обов\'язкове поле'),
  typeOfHouse: yup
    .string()
    .oneOf(houseTypes.map(h => h.value), 'Обрано невірний тип житла')
    .required('Обов\'язкове поле'),
  region: yup.string().required('Область обов\'язкове поле'),
  city: yup.string().required('Населений пункт обов\'язкове поле'),
  street: yup.string().required('Вулиця обов\'язкове поле'),
  house: yup.string().required('Будинок обов\'язкове поле'),
  flat: yup.string(),
  username: yup.string().required('Ім\'я обов\'язкове поле'),
  phone: yup.string()
    .matches(/^\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Невірний формат номера телефону')
    .required('Номер телефону обов\'язкове поле'),
  note: yup.string().max(100, 'Максимальна довжина примітки 100'),
})
