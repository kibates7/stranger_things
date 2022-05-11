//This file contains all calls to the API
function Index(props) {
 const BASE_URL = 'https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-PT'


//This will fetch all inside of the api
const fetchAllData = async () => {
    try {
        const response = await fetch(`${BASE_URL}/posts`)
        const result = await response.json()
        const data = result.data.posts
        props.setPosts(data)
        
    } catch (error) {
        console.log(error)
    }
}





}

export default Index