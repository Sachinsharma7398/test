import axios from 'axios'

const submitFormApi=async(form)=>{
    const data ={
        name:form.name,
        email:form.email,
        msg:form.message
    }
   return axios.post('https://marjan-api.herokuapp.com/contact',data) ;
}
export {submitFormApi}