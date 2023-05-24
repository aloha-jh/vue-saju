const axios = require('axios');


const fetchData = () =>{
  const url = 'http://apis.data.go.kr/B090041/openapi/service/LrsrCldInfoService/getLunCalInfo';
  const queryParams = {
    serviceKey: '/GfC1zu/wLBMmBPEC+3HWoQaMKClQ1/RNHODl8Q4UxzUQernn7owtJUpbJ9pdtf/5Aj43Ts+IBP0DfzSfzq3DA==', // Service Key
    solYear: '1993',
    solMonth: '09',
    solDay: '20'
  };

  return axios.get(url, { params: queryParams })
  .then(res=>res.data)
  .catch(function (error) {
    console.log(error);
  });
} 
export default fetchData;