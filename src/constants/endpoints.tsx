const API_BASE_ENDPOINT = 'https://63bedcf7f5cfc0949b634fc8.mockapi.io';

const endpoints = {
  /* Patients API */
  users: `${API_BASE_ENDPOINT}/users`,
} as const;

export default endpoints;
