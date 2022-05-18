//register an account
//send username/password to server
//response is jwt, set state to jwt
//import Register from './Register'

const BASE_URL = process.env.REACT_APP_BASE_URL
export const register = async (username, pwd) => {
    try{
        const response = await fetch(`${BASE_URL}/users/register`, {
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
        })
        const result = await response.json()
        if(result.success) {
            localStorage.setItem('token', result.data.token)
            return result
        }
    }
    catch(err) {console.log(err)}
    
    
    //localStorage.setItem('token', result.data.token)
    
    

    // }).then(response => response.json())
    //   .then(result => {
    //       console.log(result);
    //       if(result.data.success) {
    //         localStorage.setItem('token', result.data.token)
    //         return result
            
    //       }
    //       else return result.error.message
    //       //console.log(result.data.token);
    //       //return result
          
    //   })
    //   .catch (console.error())
}

