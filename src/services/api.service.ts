import axios from 'axios';
import { Offer } from '../types';

export const createOffer = (offer: Offer) => axios.post('http://localhost:4000/add', offer);
