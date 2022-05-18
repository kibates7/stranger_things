import React, {useState} from 'react';
import {Button} from '@mui/material'
import NumberFormat from 'react-number-format';
import './NewPost.css'
import {createPost} from './api/index'
import {BrowserRouter as Router, useHistory } from "react-router-dom"

const NewPost = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("") 
    const [price, setPrice] = useState("")  
    const [willDeliver, setWillDeliver] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        createPost(title, description,price, willDeliver, localStorage.getItem("token"))
        console.log(title, description, price, willDeliver);
        history.push('/posts/me')
    }
    return (
        <div className="NewPost">
            <form className="newPost__form" onSubmit={handleSubmit}>
                <h1>Create a new post</h1>
                <label>Title: </label>
                <input type="text" minLength='1' maxLength='20' required value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <br></br>
                <label>Description: </label>
                <input contentEditable="true" type="text" minLength='1' required value={description} onChange={(e) => setDescription(e.target.value)} ></input>
                <br/>
                <label>Price: </label>
                <NumberFormat prefix='$'  displayType="input" decimalSeparator="." thousandSeparator={true} defaultValue='0' value={price}  onValueChange={(e) => setPrice(e.value)}/>
                {/* <input type="text" minLength='1' maxLength='20' required value={price} onChange={(e) => setPrice(e.target.value)}></input> */}
                <label>Will Deliver: </label>
                <input type="checkbox" value={willDeliver} onChange={(e) => setWillDeliver(e.target.value)}></input>
                
                {/* <Button variant="contained" onClick={()=> history.push("/posts/me")} >Go Back To My Posts</Button> */}
                <Button variant="contained" type="submit">Submit Post</Button>
                
                </form>
                
        </div>
    );
};

export default NewPost;