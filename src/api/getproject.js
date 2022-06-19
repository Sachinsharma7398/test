import axios from 'axios'
import basedomain from './basedomain';

const getProjectApiCall= async()=>{
   return axios.get(`${basedomain}get_project`) ;
}
export {getProjectApiCall}