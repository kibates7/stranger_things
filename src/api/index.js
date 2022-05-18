//This file contains all calls to the API

 const BASE_URL = process.env.REACT_APP_BASE_URL


//This will fetch user info inside of the api
export const fetchUserInfo = async (localToken) => {
    const response = await fetch(`${BASE_URL}/users/me`,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localToken}`
        }
        })
        const result = await response.json()
        return result.data
}

export const createPost = async (title, description, price, deliver, localToken) => {
    console.log("current token", localToken)
    const response = await fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localToken}`
        },
        body: JSON.stringify({
            post:{
                title: title, 
                description: description, 
                price: price,
                willDeliver: deliver
            }
            })
    }).then(response => response.json())
    .then(result => {
      console.log(result);
    })
    .catch(console.error);

}







