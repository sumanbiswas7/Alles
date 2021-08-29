import sign from "./Signingbutton.module.css"
import Quote from "./Quote";


export default function Signing(props){
    return(
        <div className={sign.container}>
        <Quote/>
            <section className={sign.design}>
                <img className={sign.secure_img} src={"../images/svg/undraw_secure_files_re_6vdh.svg"} alt="secure.img"></img>
                <p className={sign.secure_p}>We don't share your personal info to anyone</p>
            </section>
            <img className={sign.verified_img} src={"../images/svg/verified.svg"} alt="undraw_Photo_re_5blb.svg"/>
        </div>
    );
}

