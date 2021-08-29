import spost from './SinglePost.module.css'

export default function SinglePost(props){


    return(
        <li className={spost.main_container}>
            <div className={spost.list_container}>
                <ul className={spost.place_taker_container}>
                <li className={spost.list_general_data}>Taken by - {props.taker}</li>
                <li className={spost.list_general_data}>Place - {props.place}</li>
                </ul>
            <div className={spost.picture_meta_container}>
                <li className={spost.list_picture_meta_data}>{props.av}</li>
                <li className={spost.list_picture_meta_data}>{props.sp}</li>
                <li className={spost.list_picture_meta_data}>{props.iso}</li>
            </div>
            </div>
                <div>
                    <p className={spost.caption}>{props.caption}</p>
                </div>
            <img className={spost.main_image} src={props.image_source} alt='img'/>
        </li>
    );
}