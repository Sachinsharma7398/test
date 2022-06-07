import axios from 'axios'

const getTeamPersonsApiCall=()=>{
   return axios.get('https://marjan-api.herokuapp.com/get_team') ;
}
export {getTeamPersonsApiCall}