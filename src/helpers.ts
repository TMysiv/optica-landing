import { DefaultValidationErrors, ValidationErrors } from './types';

export const services = [
  { id: 1, value: 'Інтернет' },
  { id: 2, value: 'Оптимальний дует' },
  { id: 3, value: 'Максимальний дует' },
];

export const speeds = [
  { id: 1, value: '1000 МБіт/с' },
];

export const houseTypes = [
  { id: 1, value: 'В квартиру' },
  { id: 2, value: 'В будинок' },
];

export function beautifyErrors<T = DefaultValidationErrors>(yupErrors: any): ValidationErrors<T> {
  if (!yupErrors.inner || !Array.isArray(yupErrors.inner)) return {};

  const entries = yupErrors.inner
    .filter((e: any) => e.path)
    .map((e: any) => [e.path, e.message] as const);

  return Object.fromEntries(entries) as ValidationErrors<T>;
}

export const regions = [
  'Вінницька',
  'Волинська',
  'Дніпропетровська',
  'Донецька',
  'Житомирська',
  'Закарпатська',
  'Запорізька',
  'Івано-Франківська',
  'Київська',
  'Кіровоградська',
  'Львівська',
  'Миколаївська',
  'Одеська',
  'Полтаська',
  'Рівненська',
  'Сумська',
  'Тернопільська',
  'Харківська',
  'Херсонська',
  'Харківська',
  'Хмельницька',
  'Черкаська',
  'Чернівецька',
  'Чернігівська',
];

