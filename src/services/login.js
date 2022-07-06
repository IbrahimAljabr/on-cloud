import axios from 'axios';
import { apiUrl } from '../config/config';

/**
 * Login user.
 *
 * @param {string} email User email.
 * @param {string} password User password.
 *
 * @return {Promise<Object>} The login response.
 */
export const login = async ({email, password}) => {
  const {
    data: { data },
  } = await axios.post(`${apiUrl}/login`, { email, password });

  return data;
};

/**
 * Sign up new user.
 *
 * @param {string} name User name.
 * @param {string} email User email.
 * @param {string} password User password.
 *
 * @return {Promise<Object>} The sign up response
 */
export const signUp = async ({name, email, password}) => {

  const {
    data: { data },
  } = await axios.post(`${apiUrl}/signup`, { name, email, password });

  return data;
};


