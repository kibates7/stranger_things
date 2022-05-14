import Login from "../Login";
const BASE_URL = process.env.REACT_APP_BASE_URL
export const login = (user, pwd) => {
const response = fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        user: {
            username: user,
            password: pwd
    }
})

}).then(response => response.json())
.then(result => {
    localStorage.getItem('token')
    console.log(localStorage);
})
  .catch(console.error);
}