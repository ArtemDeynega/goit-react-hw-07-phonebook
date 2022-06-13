import axios from 'axios';
const baseContactsApi = axios.create({
  baseURL: 'https://62a0e8947b9345bcbe420cf0.mockapi.io/api/v1/contacts/',
});

export const getContactsApi = async () => {
  const { data } = await baseContactsApi.get();
  return data;
};

export const addContactApi = async contact => {
  const { data } = await baseContactsApi.post(contact);
  return data;
};

export const deleteContactApi = async id => {
  const { data } = await baseContactsApi.delete(`${id}`);
  return data;
};
