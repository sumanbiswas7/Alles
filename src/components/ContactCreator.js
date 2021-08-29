import author from "./ContactCreator.module.css"

export default function ContactCreator(props){
    return(
        <div className={author.main_container}>
            <ul className={author.icon_container}>
                <li className={author.creator_container}>
                    <a href="https://www.facebook.com/profile.php?id=100009266254381" target="_blank" rel="noreferrer">
                        <img className={author.socialmedia_icon} src={"../images/facebook.png"} alt="facebook.img"></img>
                    </a>
                </li>
                <li className={author.creator_container}>
                    <a href="https://www.instagram.com/sumanbiswas7/" target="_blank" rel="noreferrer">
                        <img className={author.socialmedia_icon} src={"../images/instagram.png"} alt="insta.img"></img>
                    </a>
                </li>
                <li className={author.creator_container}>
                    <a href="https://twitter.com/SumanBi20341056" target="_blank" rel="noreferrer">
                        <img className={author.socialmedia_icon} src={"../images/twitter.png"} alt="twitter.img"></img>
                    </a>
                </li>
                <button onClick={props.close} className={author.creator_cancel}>
                        <img className={author.cancel_icon} src={"../images/cancel.png"} alt="cancel.img"></img>                    
                </button>
            </ul>
            <section>
                <img className={author.whatsapp} src={"../images/whatsapp.png"} alt="whatsapp.img"></img>
                <img className={author.call} src={"../images/call.png"} alt="call.img"></img>
            </section>
        </div>
    );
};