//register an account
//send username/password to server
//response is jwt, set state to jwt

const register = async (username, pwd, token) => {
    const BASE_URL = 'https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-PT'
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
    }).then(response => response.json())
      .then(result => {
          console.log(result)
          const jwtResponse = 'test'
          localStorage.setItem('jwt', jwtResponse)
      })
      .catch(console.error)
}

export default register