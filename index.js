'use-strict';
const axios = require('axios');

let url = 'https://fmnsrps0r0.execute-api.us-east-1.amazonaws.com/test/hash';

let user = {
   "email": "correoPrueba@gmail.com",
   "password": "contrasenaPrueba"
}

axios.post(url, user).then(response => {
   console.log(JSON.parse(response.data.body));
})