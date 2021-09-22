import ap from './AboutPage.module.css'
import ScaleLoader from "react-spinners/ScaleLoader";

export default function About() {
    
    return(
        <div className={ap.container}>
            <ScaleLoader/>
            <h1> Work in Progress </h1>
        </div>
    );
}