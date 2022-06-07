import axios from 'axios'

const getTeamPersonsApiCall=async()=>{
   return axios.get('https://marjan-api.herokuapp.com/get_team') ;
}
export {getTeamPersonsApiCall}