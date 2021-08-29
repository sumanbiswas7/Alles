import PostList from "./PostList";
import { useState } from "react";
import {useEffect} from 'react';


export default function AllPosts(){
    const [USERPOSTS,SetUserPosts] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

useEffect(()=>{
    fetch('https://alles-179b0-default-rtdb.firebaseio.com/NewPostData.json'
    ).then((res)=>{
        return res.json();
    }).then((data)=>{
        const POSTS = [];

        for(const key in data){
            const POST = {
                id: key,
                ...data[key]
            };
            POSTS.push(POST);
        }
        SetUserPosts(POSTS.reverse());
        setIsLoading(false);
        
    })
},[]);
if ((isLoading)) {
    return(
        <div>
            <h2 style={{textAlign: "center",marginTop:'2rem'}}>Loading...</h2>
        </div>
    );
}

    return(
        <PostList posts={USERPOSTS}/>
    );
}