import user from './User.module.css';
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

export default function User(props) {
    const history = useHistory();
    function signOut(){
        auth.signOut().then(()=>{
            history.replace('/')
        })
    }

    return(
        <div className={user.container}>
            <section className={user.container_small}>
            <p>{props.user}</p>
            <button className={user.btn} onClick={signOut}>
                <img className={user.img_logout} src={'../images/logout.png'} alt='logout'></img>
            </button>
            </section>
        </div>
    );
    
}