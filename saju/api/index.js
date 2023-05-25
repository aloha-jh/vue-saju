const axios = require('axios');  

export const fetchData = ( data ) =>{
  const url = '/B090041/openapi/service/LrsrCldInfoService/getLunCalInfo';
  
  const queryParams = {
    serviceKey: process.env.SERVICE_KEY,
    solYear: data.year ,//'1993'
    solMonth: data.month ,//09
    solDay: data.day
  }; 
  return axios.get(url, { params: queryParams })   
   
}  