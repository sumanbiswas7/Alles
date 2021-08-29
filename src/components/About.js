import about from "./About.module.css"
import { useState } from "react";
import ContactCreator from "./ContactCreator";

export default function About(){
    const [openModal,setModalOpen] = useState(false);
    function ModalOpen(){
        setModalOpen(true)
    }
    function closeModal(){
        setModalOpen(false)
    }
    
    return(
        <div className={about.container}>
            <section className={about.section}>
                <h2 className={about.about_heading}>About</h2>
                <p>Share your best memories with us, let everyone enjoy it :) </p>
                <p>We will help you reach in every corner...</p>
                <p>Creator : Suman Biswas.</p>
                <button onClick={ModalOpen} className={about.contact_btn}>Contact Me</button>
            </section>
            <ul className={about.icon_container}>
                <li className={about.socialmedia_container} >
                    <a href="http://facebook.com" target="_blank" rel="noreferrer">
                        <img className={about.socialmedia_icon} src={"../images/twitter.png"} alt="facebook.png"></img>
                    </a>
                </li>
                <li className={about.socialmedia_container} >
                    <a href="http://facebook.com" target="_blank" rel="noreferrer">
                        <img className={about.socialmedia_icon} src={"../images/facebook.png"} alt="facebook.png"></img>
                    </a>
                </li>
                <li className={about.socialmedia_container} >
                    <a href="http://facebook.com" target="_blank" rel="noreferrer">
                        <img className={about.socialmedia_icon} src={"../images/email.png"} alt="facebook.png"></img>
                    </a>
                </li>
            </ul>
            { openModal ? <ContactCreator close={closeModal}/>:null}
            <footer className={about.copyright}> <small>&copy; Copyright 2021, Suman Biswas.</small> </footer>
        </div>
    );
};


