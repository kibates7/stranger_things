//register an account
//send username/password to server
//response is jwt, set state to jwt
//import Register from './Register'

const BASE_URL = process.env.REACT_APP_BASE_URL
export const register = (username, pwd) => {
    const response = fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username: username,
                password: pwd
            }
        })
    }).then(response => response.json())
      .then(result => {
          console.log(result);
          localStorage.setItem('token', result.data.token)
          //console.log(result.data.token);
          
      })
      .catch (console.log(error))
}

