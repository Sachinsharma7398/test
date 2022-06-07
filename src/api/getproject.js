import axios from 'axios'

const getProjectApiCall= async()=>{
   return axios.get('https://marjan-api.herokuapp.com/get_project') ;
}
export {getProjectApiCall}