const axios = require('axios'); 

const fetchData = ( year,month,day ) =>{
  const url = 'http://apis.data.go.kr/B090041/openapi/service/LrsrCldInfoService/getLunCalInfo';

  console.log('test') 
  
  const queryParams = {
    serviceKey: process.env.SERVICE_KEY,
    solYear: year ,//'1993'
    solMonth: month ,//09
    solDay: day
  };

  return axios.get(url, { params: queryParams })
  .then(res=>{
    this.$store.commit('result/SET_USER', res.data)
  })
  .catch(function (error) {
    console.log(error);
  });
} 
export default fetchData;