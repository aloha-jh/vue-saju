import axios from 'axios'
const DOMAIN = 'http://localhost:4000'


const request = (method, url, data) => {
   
    var request = require('request');

    var url = 'http://apis.data.go.kr/B090041/openapi/service/LrsrCldInfoService/getLunCalInfo';
    var queryParams = '?' + encodeURIComponent('%2FGfC1zu%2FwLBMmBPEC%2B3HWoQaMKClQ1%2FRNHODl8Q4UxzUQernn7owtJUpbJ9pdtf%2F5Aj43Ts%2BIBP0DfzSfzq3DA%3D%3D') + '=서비스키'; /* Service Key*/
    queryParams += '&' + encodeURIComponent('solYear') + '=' + encodeURIComponent('2015'); /* */
    queryParams += '&' + encodeURIComponent('solMonth') + '=' + encodeURIComponent('09'); /* */
    queryParams += '&' + encodeURIComponent('solDay') + '=' + encodeURIComponent('22'); /* */
    
    request({
        url: url + queryParams,
        method: 'GET'
    }, function (error, response, body) {
        console.log('Status', response.statusCode);
        console.log('Headers', JSON.stringify(response.headers));
        console.log('Reponse received', body);
    });


    return axios({
        method,
        url: DOMAIN + url,
        data,
    })
}

export const board = {
    getBoards() {
        return request('get', '/boards')
    },
    
}

export const card = {
    create(title, listId, pos) {
        return request('post', '/cards', { title, listId, pos })
    },
    get(cardId) {
        return request('get', `/cards/${cardId}`)
    },
    edit(cardId, title, description, listId) {
        return request('put', `/cards/${cardId}`, { title, description, listId })
    },
    delete(cardId) {
        return request('delete', `/cards/${cardId}`)
    },
}
