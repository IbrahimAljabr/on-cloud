import axios from 'axios';
import { apiUrl } from '../config/config';

/**
 * add new Item.
 *
 * @return {Promise<Object>} The login response.
 */
export const addItem = async ({ name, price,image,description },id) => {
  const {
    data: { data },
  } = await axios.post(`${apiUrl}/create`, { name, price,image,description,userId:id });

  return data;
};

/**
 * edit item.
 *
 * @return {Promise<Object>} The login response.
 */
 export const editItem = async ({ name, price,image,description },id) => {
  const {
    data: { data },
  } = await axios.patch(`${apiUrl}/edit`, { name, price,image,description,id });

  return data;
};

/**
 * delete item.
 *
 * @return {Promise<Object>} The login response.
 */
 export const deleteItem = async (id) => {
  const {
    data: { data },
  } = await axios.delete(`${apiUrl}/delete/item/${id}` );

  return data;
};

/**
 * get Item.
 *
 * @return {Promise<Object>} The sign up response
 */
export const getItem = async (id) => {

  const {
    data: { data },
  } = await axios.get(`${apiUrl}/details/${id}`);

  return data;
};

/**
 * get Item.
 *
 * @return {Promise<Object>} The sign up response
 */
 export const getAllItem = async () => {

  const {
    data: { data },
  } = await axios.get(`${apiUrl}/all/items`);

  return data;
};


