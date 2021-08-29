import home from "./HomePage.module.css"
import { useEffect, useState } from 'react';
import { auth } from '../firebase';
import SigningPage from './SigningPage';
import AllPosts from '../components/post/AllPosts' 


export default function HomePage(props){
    const [user, setUser] = useState(null);
    
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email
      }
      if (userAuth) {
        console.log(userAuth)
        setUser(user)
      } else {
        setUser(null)
      }
    })
    return unsubscribe
  }, [])

  
    return(
        <div className={home.main_bg}>
            {user ? <AllPosts/>: <SigningPage/>}
        </div>
        
    );
}
