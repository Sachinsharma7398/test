import axios from 'axios'

const getPortfolioApiCall=async()=>{
   return axios.get('https://marjan-api.herokuapp.com/get_portfolio') ;
}
export {getPortfolioApiCall}