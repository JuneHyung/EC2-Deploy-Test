import axios from 'axios';
const url = 'http://localhost:5000/api'

export const onLogin = async (email, password) =>{
  try{
    const body = {
      "userId":email, "userPw": password
    }
    const res = await axios.post(`${url}/login`, body);
    console.log(res)
    if(res.status===200){
      localStorage.setItem('Tokens', JSON.stringify({
        'accessToken': res.data.accessToken,
        'refreshToken': res.data.refreshToken,
        'userId': res.data.userId
      }))
      console.log('로그인 성공')
    }
  }catch(err) {
    console.error(err)
    // if(error.)
    // if(err.response.status===401) console.error(err.response.data)
    // else console.error('알 수 없는 에러');
  }
}

const getToeknFromLocal = async () =>{
  try{
    const val = await localStorage.getItem("Tokens");
    if(val !== null) return JSON.parse(val);
    else return null;
  }catch(e){
    console.error(e.message);
  }
}

export const verifyTokens = async () => {
  const token = await getToeknFromLocal();
  
  if(token===null) console.log('돌아가')
  else{
    const headersConfig = {
      "refresh" : token.refreshToken,
      "authorization": `Bearer ${token.accessToken}`
    };

    try{
      const res = await axios.get(`${url}/refresh`, {headers: headersConfig})
      console.log(res.data)

      // accessToken 만료, refreshToken 정상 -> 재발급된 accessToken 저장 후 자동 로그인
      localStorage.setItem(`Tokens`,JSON.stringify({
        ...token,
        'accessToken': res.data.data.accessToken
      }))
      console.log('Refresh 로그인 성공')
    }catch(err){
      const code = err.response.data.code;
      console.log(err.response)
      if(code===401) console.error('401 Auth')
      else console.error('Error!')
    }
  }
}