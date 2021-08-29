import { useRef } from 'react';
import { useState } from 'react';
import share from './SharePage.module.css'
import { useHistory } from "react-router-dom";
// import ImageForm from "../components/ImageFrom";

export default function Share() {
    const history = useHistory();
    const urlRef = useRef();
    const avRef = useRef();
    const spRef = useRef();
    const isoRef = useRef();
    const picTakerRef = useRef();
    const placeRef = useRef();
    const captionRef = useRef();


    const [data,setData] =useState(null);
    const [ isModalOpen, openModal ] = useState(false);

    function  linkRenderer(val) {
        const urlVal = val.target.value;
        console.log(urlVal);
        setData(urlVal)
        openModal(true)
    }
    function submitHandler(event) { 
        event.preventDefault();
        const url = urlRef.current.value;
        const av = avRef.current.value;
        const sp = spRef.current.value;
        const iso = isoRef.current.value;
        const picTaker = picTakerRef.current.value;
        const place = placeRef.current.value;
        const caption = captionRef.current.value;

        const postData = {
            image : url,
            av : av,
            sp : sp,
            iso : iso,
            takenby : picTaker,
            name : place,
            caption : caption
        };
        fetch('https://alles-179b0-default-rtdb.firebaseio.com/NewPostData.json',{
            method: 'POST',
            body : JSON.stringify(postData)

        }).then(()=>{
            history.replace('/')
        });
        console.log(postData);
    }


    return(
        <div className={share.container}>
            <form className={share.main_container} onSubmit={submitHandler}>
                <form className={share.inp_container}>
                    <input className={share.inp} type='text' required placeholder='Aperture' ref={avRef}/>
                    <input className={share.inp} type='text' required placeholder='Shutter Speed' ref={spRef}/>
                    <input className={share.inp} type='text' required placeholder='ISO' ref={isoRef}/>
                </form>
                <input className={share.url_inp} onChange={linkRenderer} type='url' required  ref={urlRef} placeholder="Facebook image url"/> 
                <form className={share.small_container}>
                    <input className={share.inp_place} required type='text' placeholder='Picture taken by' ref={picTakerRef}/>
                    <input className={share.inp_place} required type='text' placeholder='Place where picture was taken' ref={placeRef}/>
                </form>
                <textarea className={share.description} name="comment" form="usrform" placeholder='Caption...' ref={captionRef}/>
                {isModalOpen ? <img className={share.img_preview} src={data} alt='cant find img associated with this url'/> :null}
                <button className={share.submit_btn}>Share Post</button>
            </form>
        </div>
    );
}