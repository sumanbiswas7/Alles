import header from "./Header.module.css"


export default function Header(){
    return(
        <div className={header.container}>
        <img className={header.logo_small} src={"../images/logo_pink_bg.png"} alt="logo.png"/>   
        <h2 class={header.heading}>Hello and welcome, If you're new start by signing up</h2>
        <img className={header.securelog}  src={"../images/svg/undraw_secure_login_pdn4.svg"} alt="secure_log.svg"/>
    </div>
    );
};
