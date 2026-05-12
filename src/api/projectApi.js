import axios from 'axios';

const API_URL = 'http://localhost:3000/api/projects';

export const getProjects = () => axios.get(API_URL);