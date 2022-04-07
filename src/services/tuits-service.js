import axios from 'axios';
//const TUITS_API = 'https://full-stack-developer-server-sh.herokuapp.com/api/tuits';
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;

export const findAllTuits = async() => {
	const response = await axios.get(TUITS_API);
	const tuits = response.data;
	return tuits;
}