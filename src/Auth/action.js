import axios from 'axios';

export function login(data){
  return {
    type: 'LOGIN',
    payload: axios.post('http://192.168.56.1:3000/login',{
      username:data.username,
      password:data.password
    })
  }
}