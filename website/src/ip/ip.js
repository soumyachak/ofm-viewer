import axios from "axios";

export const welldata = () => axios.get("http://localhost:8000/");
export const proddata = () => axios.get("http://localhost:8000/prod");
export const welltestdata = () => axios.get("http://localhost:8000/welltest");
export const injdata = () => axios.get("http://localhost:8000/inj");
export const revprdata = () => axios.get("http://localhost:8000/revpr");
