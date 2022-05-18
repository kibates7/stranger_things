
const BASE_URL = process.env.REACT_APP_BASE_URL
export const login = async (user, pwd) => {
const response = await fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
        
    },
    body: JSON.stringify({
        user: {
            username: user,
            password: pwd,
    }
})
})
const result = await response.json()
localStorage.getItem('token')
console.log(result)
return result

}