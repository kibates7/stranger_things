import React, {useState, useEffect} from 'react';
import {Button} from '@mui/material'
import NumberFormat from 'react-number-format';
import './EditPost.css'
import {editPost} from './api/index'
import {BrowserRouter as Router, useHistory, useLocation } from "react-router-dom"

const NewPost = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("") 
    const [price, setPrice] = useState("")  
    const [location, setLocation] = useState("")  
    const [willDeliver, setWillDeliver] = useState(false)
    const history = useHistory()
    const uselocation = useLocation();
    const param = uselocation.state.detail;

    const handleSubmit = (e) => {
        e.preventDefault()
        editPost(title, description,price, location, willDeliver, localStorage.getItem("token"), param._id)
        console.log(title, description, price, location, willDeliver);
        history.push('/posts/me')
    }

    useEffect(() => {
        setTitle(param.title)
        setDescription(param.description)
        setPrice(param.price)
        setLocation(param.location)
        setWillDeliver(param.willDeliver)
        //console.log(param);
    }, [])

    return (
        <div className="EditPost">
            <form className="editPost__form" onSubmit={handleSubmit}>
                {/* {console.log(uselocation)} */}
                <h1>Edit Post</h1>
                <label>Title: </label>
                <input type="text" minLength='1' maxLength='20' required value={title} onChange={(e) => setTitle(e.target.value)}></input>
                
                <label>Description: </label>
                <input contentEditable="true" type="text" minLength='1' required value={description} onChange={(e) => setDescription(e.target.value)} ></input>
                
                <label>Price: </label>
                <NumberFormat prefix='$'  displayType="input" decimalSeparator="." thousandSeparator={true} defaultValue='0' value={price}  onValueChange={(e) => setPrice(e.value)}/>
                <label>Location: </label>
                <input contentEditable="true" type="text" minLength='1' required value={location} onChange={(e) => setLocation(e.target.value)} ></input>
                <br/>
                <label>Will Deliver: </label>
                <input type="checkbox" value={willDeliver} onChange={(e) => setWillDeliver(e.target.value)}></input>
                
                {/* <Button variant="contained" onClick={()=> history.push("/posts/me")} >Go Back To My Posts</Button> */}
                <Button variant="contained" type="submit">Edit Post</Button>
                
                </form>
                
        </div>
    );
};

export default NewPost;