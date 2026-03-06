import axios from 'axios';
import { Offer } from '../types';
import { config } from '../config';

export const createOffer = (offer: Offer) => axios.post(`${config.api}/add`, offer);
