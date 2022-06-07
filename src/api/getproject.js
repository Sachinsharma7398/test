import axios from 'axios'

const getProjectApiCall=()=>{
   return axios.get('https://marjan-api.herokuapp.com/get_project') ;
}
export {getProjectApiCall}