import axios from 'axios';
import { endpoints } from '@/Constants';

export default function api() {
  return axios.create({
    baseURL: endpoints.baseUrl,
    timeout: 10000,
  });
}
