import { FETCH_POSTS,NEW_POST} from './types'

export const fetchPosts=()=>dispatch=>{
    console.log("Fetching")
        fetch('https://api.github.com/users/raiedkhan')
        .then(res => res.json())
        .then(posts => dispatch({
            type:FETCH_POSTS,
            payload: posts
        }));
};

export const createPost=(postData)=>dispatch=>{
    console.log('action called')
    fetch("https://api.github.com/users/"+postData.username)
    .then(res=>res.json())
    .then(post => dispatch({
        type:NEW_POST ,
        payload: post
    }));
}