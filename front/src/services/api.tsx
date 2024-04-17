import axios, { AxiosInstance } from 'axios';

export interface ApiResponse {
  _id: string;
  date: string;
  location: string;
  description: string;
  rating: number;
  reflection?: string;
}

const instance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:5001/api/v1/entries',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchEntries = async (): Promise<ApiResponse[]> => {
  try {
    return (await instance.get('/')).data.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// TODO: getbyid, post, put, delete
