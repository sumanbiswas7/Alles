import SinglePost from "./SinglePost";
import plist from './PostList.module.css'

export default function PostList(props){

    return(
        <ul className={plist.main_container}>
            {props.posts.map((posts)=>(
                <SinglePost
                taker={posts.takenby}
                place={posts.name}
                av={posts.av}
                sp={posts.sp}
                iso={posts.iso}
                caption={posts.caption}
                image_source={posts.image}
                />
            ))}
        </ul>
    );
}