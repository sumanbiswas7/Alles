import {Route,BrowserRouter as Router,Switch,Link} from "react-router-dom";
import About from "../pages/AboutPage";
import Home from "../pages/HomePage";
import Share from "../pages/SharePage";
import SigningPage from "../pages/SigningPage"
import nav from "./Navbar.module.css"


export default function Navbar() {


    return(
        <Router>
        <nav>
            <ul className={nav.container}>
                <li className={nav.list}>
                <Link to="/" className={nav.Link}>Home</Link>
                </li>
                <li className={nav.list}>
                <Link to="/share" className={nav.Link}>Add Post</Link>
                </li>
                <li className={nav.list}>
                <Link to="/about" className={nav.Link}>About</Link>
                </li>
                <li className={nav.list}>
                <Link to="/signin" className={nav.Link}>Sign In</Link>
                </li>
            </ul>
        </nav>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" exact component={About}/>
            <Route path="/share" exact component={Share}/>
            <Route path="/signin" exact component={SigningPage}/>
        </Switch>
        </Router>
    );
}

