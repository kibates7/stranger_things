//This file contains all calls to the API

 const BASE_URL = process.env.REACT_APP_BASE_URL

 export const fetchPosts = async (localToken) => {
    try {
      const response = await fetch(`${BASE_URL}/posts`,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localToken}`
        }
        })
      const result = await response.json()
      const data = result.data.posts
      return data
     // console.log(data);
     
      //return result.data.posts
      
  } catch (error) {
      console.log(error)
  }
  }

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

export const createPost = async (title, description, price, location, deliver, localToken) => {
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
                location: location,
                willDeliver: deliver
            }
            })
    }).then(response => response.json())
    .then(result => {
      console.log(result);
    })
    .catch(console.error);

}

export const getMyMessage = async (localToken) => {
    const response = await fetch(`${BASE_URL}/users/me`,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localToken}`
        }
        })
        
        const result = await response.json()
        //console.log(result.data.messages)
        return result.data.messages
}

export const sendMyMessage = async (message, localtoken, postId) => {
   
    const response = await fetch(`${BASE_URL}/posts/${postId}/messages`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localtoken}`
        },
        body: JSON.stringify({
            message: {
            content: message
        }
            })
    }).then(response => response.json())
    .then(result => {
      console.log(result);
    })
    .catch(console.error);
        
        
}

export const deleteMyMessage = async (localtoken, postId) => {
    console.log("current token", localtoken)
    const response = await fetch(`${BASE_URL}/posts/${postId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localtoken}`
        },
    }).then(response => response.json())
    .then(result => {
      console.log(result);
    })
    .catch(console.error);
        
        
}

export const editPost = async (title, description, price, location, deliver, localToken, postId) => {
    console.log("current token", localToken)
    const response = await fetch(`${BASE_URL}/posts/${postId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localToken}`
        },
        body: JSON.stringify({
            post:{
                title: title, 
                description: description, 
                price: price,
                location: location,
                willDeliver: deliver
            }
            })
    }).then(response => response.json())
    .then(result => {
      console.log(result);
    })
    .catch(console.error);

}





