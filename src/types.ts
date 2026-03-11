import { ReactElement } from 'react';

export interface Offer {
  service: string;
  isMash: boolean;
  countMash: number;
  speed: '1000 МБіт/с';
  typeOfHouse: 'В квартиру' | 'В будинок';
  region: string;
  city: string;
  street: string;
  house: string;
  flat: string;
  username: string;
  phone: string;
  note: string;
}

export type ValidationErrors<T> = {
  [Key in keyof T]?: string;
};

export type DefaultValidationErrors = { [key: string]: string };

export interface Tariff {
  id: number;
  name: string;
  img: string;
  price: string;
  description: string[];
  modalElement: ReactElement;
  extraPrice?: string;
}
